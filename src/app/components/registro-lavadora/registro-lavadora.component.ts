import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {finalize} from 'rxjs/operators';
import {Constants} from '../../shared/constants/constants';

@Component({
  selector: 'app-registro-lavadora',
  templateUrl: './registro-lavadora.component.html',
  styleUrls: ['./registro-lavadora.component.scss']
})
export class RegistroLavadoraComponent {

  public isLoading = false;
  public marca = new FormControl('');
  public capacidad = new FormControl('');
  public color = new FormControl('');
  public panel = new FormControl('');
  public manguera = new FormControl('');
  public precio = new FormControl('');

  // Reemplazar por esta linea
  // constructor(private router: Router, private appService: AppService) {
  constructor(private router: Router, private appService: AppStubService) {
  }

  public crearLavadora(): void {
    const marca = this.marca.value;
    const capacidad = this.capacidad.value;
    const color = this.color.value;
    const panel = this.panel.value;
    const manguera = this.manguera.value;
    const precio = this.precio.value;

    this.isLoading = true;

    this.appService.crearLavadora(marca, capacidad, color, panel, manguera, precio)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        () => {
          this.router.navigate([Constants.URLS.PRINCIPAL]);
        }
      );


  }

}
