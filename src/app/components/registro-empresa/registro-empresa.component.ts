import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {Constants} from '../../shared/constants/constants';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.scss']
})
export class RegistroEmpresaComponent implements OnInit {

  public isLoading = false;
  public showError = false;
  public messageError = '';
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
  }

  public createCompany(): void {
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
      this.appService.createCompany(name, cellNumber, address, email, password)
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
