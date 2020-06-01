import {Component, OnInit} from '@angular/core';
import {DatosClienteModel} from '../../shared/models/datos-cliente.model';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {finalize} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Constants} from '../../shared/constants/constants';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.scss']
})
export class ModificarClienteComponent implements OnInit {

  public isLoading = false;
  public showError = false;
  public messageError = '';
  public datosCliente: DatosClienteModel;

  public name = new FormControl('');
  public lastName = new FormControl('');
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
    this.appService.datosCliente(localStorage.getItem('userFM'))
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (response: DatosClienteModel) => {
          this.datosCliente = response;
          this.name.setValue(response.nombre);
          this.lastName.setValue(response.apellido);
          this.address.setValue(response.direccion);
          this.cellNumber.setValue(response.telefono);
          this.email.setValue(response.correo);
        }
      );
  }

  public actualizar(): void {
    const name = this.name.value;
    const lastName = this.lastName.value;
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
      this.appService.actualizarCuentaCliente(name, lastName, cellNumber, address, email, password)
        .pipe(finalize(() => this.isLoading = false))
        .subscribe(
          () => {
            this.router.navigate([Constants.URLS.ACCOUNT_USER]);
          },
          () => {
            this.showError = true;
            this.messageError = 'El usuario ya existe';
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
