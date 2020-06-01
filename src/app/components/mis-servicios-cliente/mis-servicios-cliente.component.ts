import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {finalize} from 'rxjs/operators';
import {ServiciosClienteModel} from '../../shared/models/servicios-cliente.model';
import {Constants} from '../../shared/constants/constants';

@Component({
  selector: 'app-mis-servicios-cliente',
  templateUrl: './mis-servicios-cliente.component.html',
  styleUrls: ['./mis-servicios-cliente.component.scss']
})
export class MisServiciosClienteComponent implements OnInit {

  public isLoading = true;
  public showError = false;
  public messageError = '';
  public listaDeMeses: any[] = [];
  public enero: ServiciosClienteModel[] = [];
  public febrero: ServiciosClienteModel[] = [];
  public marzo: ServiciosClienteModel[] = [];
  public abril: ServiciosClienteModel[] = [];
  public mayo: ServiciosClienteModel[] = [];
  public junio: ServiciosClienteModel[] = [];
  public julio: ServiciosClienteModel[] = [];
  public agosto: ServiciosClienteModel[] = [];
  public septiembre: ServiciosClienteModel[] = [];
  public octubre: ServiciosClienteModel[] = [];
  public noviembre: ServiciosClienteModel[] = [];
  public diciembre: ServiciosClienteModel[] = [];

  // Reemplazar por esta linea
  // constructor(private router: Router, private appService: AppService) {
  constructor(private router: Router, private appService: AppStubService) {
  }

  ngOnInit() {
    this.obtenerServicios();
  }

  public obtenerServicios(): void {
    this.appService.getServiciosCliente(localStorage.getItem('userFM'))
      .pipe(finalize(() => this.ordenarMeses()))
      .subscribe(
        (response: ServiciosClienteModel[]) => {
          console.log('resp', response);
          response.map(servicio => {
            switch (servicio.mes) {
              case 'Enero':
                this.enero.push(servicio);
                break;
              case 'Febrero':
                this.febrero.push(servicio);
                break;
              case 'Marzo':
                this.marzo.push(servicio);
                break;
              case 'Abril':
                this.abril.push(servicio);
                break;
              case 'Mayo':
                this.mayo.push(servicio);
                break;
              case 'Junio':
                this.junio.push(servicio);
                break;
              case 'Julio':
                this.julio.push(servicio);
                break;
              case 'Agosto':
                this.agosto.push(servicio);
                break;
              case 'Septiembre':
                this.septiembre.push(servicio);
                break;
              case 'Octubre':
                this.octubre.push(servicio);
                break;
              case 'Noviembre':
                this.noviembre.push(servicio);
                break;
              case 'Diciembre':
                this.diciembre.push(servicio);
                break;
            }
          });
        },
        () => {
          this.messageError = 'Aún no solicitas un servicio';
          this.isLoading = false;
          this.showError = true;
        }
      );
  }

  public ordenarMeses(): void {
    if (this.enero.length > 0) {
      this.listaDeMeses.push(this.enero);
    }
    if (this.febrero.length > 0) {
      this.listaDeMeses.push(this.febrero);
    }
    if (this.marzo.length > 0) {
      this.listaDeMeses.push(this.marzo);
    }
    if (this.abril.length > 0) {
      this.listaDeMeses.push(this.abril);
    }
    if (this.mayo.length > 0) {
      this.listaDeMeses.push(this.mayo);
    }
    if (this.junio.length > 0) {
      this.listaDeMeses.push(this.junio);
    }
    if (this.julio.length > 0) {
      this.listaDeMeses.push(this.julio);
    }
    if (this.agosto.length > 0) {
      this.listaDeMeses.push(this.agosto);
    }
    if (this.septiembre.length > 0) {
      this.listaDeMeses.push(this.septiembre);
    }
    if (this.octubre.length > 0) {
      this.listaDeMeses.push(this.octubre);
    }
    if (this.noviembre.length > 0) {
      this.listaDeMeses.push(this.noviembre);
    }
    if (this.diciembre.length > 0) {
      this.listaDeMeses.push(this.diciembre);
    }
    this.isLoading = false;
    console.log('this.listaDeMeses', this.listaDeMeses);
  }

  public hiddenAlert(): void {
    this.showError = false;
  }

  public goToPrincipal(): void {
    this.router.navigate([Constants.URLS.LIST_USER]);
  }
}
