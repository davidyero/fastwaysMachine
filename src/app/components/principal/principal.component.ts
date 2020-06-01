import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {ResponseLoginModel} from '../../shared/models/response-login.model';
import {Constants} from '../../shared/constants/constants';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {finalize} from 'rxjs/operators';
import {HeaderService} from '../../shared/services/header.service';
import {AppService} from '../../shared/services/app.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public showError = false;
  public isLoading = false;
  public user = new FormControl('');
  public password = new FormControl('');

  // Reemplazar por esta linea
  // constructor(private router: Router, private headerService: HeaderService, private appService: AppService) {
  constructor(private router: Router, private headerService: HeaderService, private appService: AppStubService) {
  }

  ngOnInit() {
    const rol = localStorage.getItem('roleFM');
    if (rol === Constants.APP_CONSTANTS.ROLES.COMPANY) {
      this.router.navigate([Constants.URLS.SERVICE]);
      this.headerService.setHeaderName('Cerrar Sesion');
      this.headerService.showDropdown(true);
    } else if (rol === Constants.APP_CONSTANTS.ROLES.USER) {
      this.router.navigate([Constants.URLS.LIST_USER]);
      this.headerService.setHeaderName('Cerrar Sesion');
      this.headerService.showDropdown(true);
    } else {
      this.router.navigate([Constants.URLS.PRINCIPAL]);
      this.headerService.showDropdown(false);
    }
  }

  public login(): void {
    const userForm = this.user;
    const pass = this.password;
    this.isLoading = true;

    this.appService.login(userForm.value, pass.value)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (response: ResponseLoginModel) => {
          if (response.rol === Constants.APP_CONSTANTS.ROLES.COMPANY) {
            this.router.navigate([Constants.URLS.SERVICE]);
            this.headerService.showMenu(false);
          } else {
            this.router.navigate([Constants.URLS.LIST_USER]);
            this.headerService.showMenu(true);
          }
          this.headerService.setHeaderName('Cerrar Sesion');
          this.headerService.showDropdown(true);
          localStorage.setItem('userFM', response.usuario);
          localStorage.setItem('roleFM', response.rol);
        },
        () => {
          this.showError = true;
        }
      );
  }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  public hiddenAlert(): void {
    this.showError = false;
  }
}
