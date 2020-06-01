import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {Constants} from '../../shared/constants/constants';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent implements OnInit {

  public isLoading = false;
  public showError = false;
  public messageError = '';
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
  }

  public createUser(): void {
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
      this.appService.createUser(name, lastName, cellNumber, address, email, password)
        .pipe(finalize(() => this.isLoading = false))
        .subscribe(
          () => {
            this.router.navigate([Constants.URLS.PRINCIPAL]);
          },
          () => {
            this.showError = true;
            this.messageError = 'El usuario ya existe';
          }
        );
    }

  }

  public hiddenAlert(): void {
    this.showError = false;
  }
}
