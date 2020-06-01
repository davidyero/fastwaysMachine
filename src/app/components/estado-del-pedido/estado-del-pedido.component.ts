import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Constants} from '../../shared/constants/constants';

@Component({
  selector: 'app-estado-del-pedido',
  templateUrl: './estado-del-pedido.component.html',
  styleUrls: ['./estado-del-pedido.component.scss']
})
export class EstadoDelPedidoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goToPrincipal(): void {
    this.router.navigate([Constants.URLS.LIST_USER]);
  }
}
