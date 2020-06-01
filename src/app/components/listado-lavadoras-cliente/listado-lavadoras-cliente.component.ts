import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {ListWashingMachineModel} from '../../shared/models/list-washing-machine.model';
import {finalize} from 'rxjs/operators';
import {LavadoraModel} from '../../shared/models/lavadora.model';
import {Constants} from '../../shared/constants/constants';

@Component({
  selector: 'app-listado-lavadoras-cliente',
  templateUrl: './listado-lavadoras-cliente.component.html',
  styleUrls: ['./listado-lavadoras-cliente.component.scss']
})
export class ListadoLavadorasClienteComponent implements OnInit {

  public isLoading = true;
  public showList = true;
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

    this.appService.getLavadorasCliente()
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

  public alquilar(id: number): void {
    this.isLoading = true;
    this.showList = false;
    this.appService.getInfoLavadora(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (response: LavadoraModel) => {
          this.lavadora = response;
        },
        () => {
          this.showList = true;
        }
      );
  }

  public hiddenAlert(): void {
    this.showError = false;
  }

  public cancel(): void {
    this.showList = true;
  }

  public confirm(id: number): void {
    this.appService.confimarPedido(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        () => {
          this.router.navigate([Constants.URLS.ORDER_STATE]);
        },
        () => {
          this.showList = true;
        }
      );
  }
}
