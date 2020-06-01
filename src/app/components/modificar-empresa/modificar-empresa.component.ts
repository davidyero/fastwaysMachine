import { Component, OnInit } from '@angular/core';
import {DatosClienteModel} from '../../shared/models/datos-cliente.model';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {finalize} from 'rxjs/operators';
import {Constants} from '../../shared/constants/constants';
import {DatosEmpresaModel} from '../../shared/models/datos-empresa.model';

@Component({
  selector: 'app-modificar-empresa',
  templateUrl: './modificar-empresa.component.html',
  styleUrls: ['./modificar-empresa.component.scss']
})
export class ModificarEmpresaComponent implements OnInit {

  public isLoading = false;
  public showError = false;
  public messageError = '';
  public datosEmpresa: DatosEmpresaModel;

  public name = new FormControl('');
  public email = new FormControl('');
  public address = new FormControl('');
  public cellNumber = new FormControl('');
  public password = new FormControl('');
  public repeatPassword = new FormControl('');

  // Reemplazar por esta linea
  // constructor(private router: Router, private appService: AppService) {
  constructor(private router: Router, private appService: AppStubService) {
  }

  ngOnInit() {
    this.getDatosCliente();
  }

  public getDatosCliente(): void {
    this.isLoading = true;
    this.appService.cuentaEmpresa(localStorage.getItem('userFM'))
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (response: DatosClienteModel) => {
          this.datosEmpresa = response;
          this.name.setValue(response.nombre);
          this.address.setValue(response.direccion);
          this.cellNumber.setValue(response.telefono);
          this.email.setValue(response.correo);
        }
      );
  }

  public actualizar(): void {
    const name = this.name.value;
    const email = this.email.value;
    const address = this.address.value;
    const cellNumber = this.cellNumber.value;
    const password = this.password.value;
    const repeatPassword = this.repeatPassword.value;

    if (password !== repeatPassword) {
      this.showError = true;
      this.messageError = 'Las contraseñas no coinciden';
    } else {
      this.isLoading = true;
      this.appService.actualizarCuentaEmpresa(name, cellNumber, address, email, password)
        .pipe(finalize(() => this.isLoading = false))
        .subscribe(
          () => {
            this.router.navigate([Constants.URLS.ACCOUNT_COMPANY]);
          },
          () => {
            this.showError = true;
            this.messageError = 'La empresa ya existe';
          }
        );
    }

  }

  public borrar(): void {
    this.appService.borrarCuentaCliente(localStorage.getItem('userFM'))
      .subscribe(
        () => {
          this.router.navigate([Constants.URLS.PRINCIPAL]);
        }
      );
  }

}
