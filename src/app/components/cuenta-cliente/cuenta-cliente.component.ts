import {Component, OnInit} from '@angular/core';
import {DatosClienteModel} from '../../shared/models/datos-cliente.model';
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {Constants} from '../../shared/constants/constants';

@Component({
  selector: 'app-cuenta-cliente',
  templateUrl: './cuenta-cliente.component.html',
  styleUrls: ['./cuenta-cliente.component.scss']
})
export class CuentaClienteComponent implements OnInit {

  public isLoading = true;
  public datosCliente: DatosClienteModel;

  // Reemplazar por esta linea
  // constructor(private router: Router, private appService: AppService) {
  constructor(private router: Router, private appService: AppStubService) {
  }

  ngOnInit() {
    this.getDatosCliente();
  }

  public getDatosCliente(): void {
    this.appService.datosCliente(localStorage.getItem('userFM'))
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (response: DatosClienteModel) => {
          this.datosCliente = response;
        }
      );
  }

  public modificar(): void {
    this.router.navigate([Constants.URLS.MODIFY_USER]);
  }

  public salir(): void {
    localStorage.removeItem('userFM');
    localStorage.removeItem('roleFM');
    this.router.navigate([Constants.URLS.PRINCIPAL]);
  }
}
