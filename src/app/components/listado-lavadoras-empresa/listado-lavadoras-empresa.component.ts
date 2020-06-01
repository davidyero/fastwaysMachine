import {Component, OnInit} from '@angular/core';
import {LavadoraModel} from '../../shared/models/lavadora.model';
import {ListWashingMachineModel} from '../../shared/models/list-washing-machine.model';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {finalize} from 'rxjs/operators';
import {Constants} from '../../shared/constants/constants';

@Component({
  selector: 'app-listado-lavadoras-empresa',
  templateUrl: './listado-lavadoras-empresa.component.html',
  styleUrls: ['./listado-lavadoras-empresa.component.scss']
})
export class ListadoLavadorasEmpresaComponent implements OnInit {

  public isLoading = true;
  public showError = false;
  public messageError = '';
  public lavadora: LavadoraModel;
  public lavadoras: ListWashingMachineModel[] = [];

  // Reemplazar por esta linea
  // constructor(private router: Router, private appService: AppService) {
  constructor(private router: Router, private appService: AppStubService) {
  }

  ngOnInit() {
    this.obtenerLavadoras();
  }

  public obtenerLavadoras(): void {
    this.appService.obtenerLavadorasEmpresa(localStorage.getItem('userFM'))
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (response: ListWashingMachineModel[]) => {
          this.lavadoras = response;
        },
        () => {
          this.messageError = 'No hay lavadoras disponibles';
          this.showError = true;
        }
      );
  }

  public eliminar(id: number): void {
    this.appService.eliminarLavadora(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        () => {
          this.router.navigate([Constants.URLS.PRINCIPAL]);
        }
      );
  }

  public hiddenAlert(): void {
    this.showError = false;
  }
}
