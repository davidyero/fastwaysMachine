import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {finalize} from 'rxjs/operators';
import {Constants} from '../../shared/constants/constants';
import {DatosEmpresaModel} from '../../shared/models/datos-empresa.model';

@Component({
  selector: 'app-cuenta-empresa',
  templateUrl: './cuenta-empresa.component.html',
  styleUrls: ['./cuenta-empresa.component.scss']
})
export class CuentaEmpresaComponent implements OnInit {

  public isLoading = true;
  public datosEmpresa: DatosEmpresaModel;

  // Reemplazar por esta linea
  // constructor(private router: Router, private appService: AppService) {
  constructor(private router: Router, private appService: AppStubService) {
  }

  ngOnInit() {
    this.getDatosCliente();
  }

  public getDatosCliente(): void {
    this.appService.cuentaEmpresa(localStorage.getItem('userFM'))
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (response: DatosEmpresaModel) => {
          this.datosEmpresa = response;
        }
      );
  }

  public modificar(): void {
    this.router.navigate([Constants.URLS.MODIFY_COMPANY]);
  }

  public salir(): void {
    localStorage.removeItem('userFM');
    localStorage.removeItem('roleFM');
    this.router.navigate([Constants.URLS.PRINCIPAL]);
  }
}
