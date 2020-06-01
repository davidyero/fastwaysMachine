import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {ResponseLoginModel} from '../models/response-login.model';
import {Constants} from '../constants/constants';
import {delay} from 'rxjs/operators';
import {ListWashingMachineModel} from '../models/list-washing-machine.model';
import {LavadoraModel} from '../models/lavadora.model';
import {DatosClienteModel} from '../models/datos-cliente.model';
import {ServiciosClienteModel} from '../models/servicios-cliente.model';
import {DatosEmpresaModel} from '../models/datos-empresa.model';
import {ServiciosEmpresaModel} from '../models/servicios-empresa.model';
import {LavadoraEmpresaModel} from '../models/lavadora-empresa.model';
import {PedidosModel} from '../models/pedidos.model';

@Injectable({
  providedIn: 'root'
})
export class AppStubService {

  public url = 'https://lh3.googleusercontent.com/proxy/qH3EX-rDVUzAu3IRYxlB-IhvVrPIrwgTmAui11QqeaVGC-HxwcAgjJNcw6JOyyrSQqoVEnM' +
    'FZeeAaGddoIat8HfT2TnYVApanZBDBhIbjVGwPvjNhC_SeUVdiIzv6wF2LwdNcdpPzfwQ_YElsOGKAoJPlWbHD1i0Xq8gf09sFdAal0VhZkkdDLuXCfj6yJBe2' +
    'PENr5DblXCeRFkYPMYxI4zmPWFTZudILVJHx4R7';

  public login(user: string, password: string): Observable<ResponseLoginModel> {
    const responseUser: ResponseLoginModel = {
      usuario: 'julian@gmail.com',
      rol: Constants.APP_CONSTANTS.ROLES.USER,
      token: '123123qweqwe'
    };

    const responseCompany: ResponseLoginModel = {
      usuario: 'Empresa falsa',
      rol: Constants.APP_CONSTANTS.ROLES.COMPANY,
      token: '123123qweqwe'
    };

    if (user === 'Julian') {
      return of(responseUser).pipe(delay(1000));
    } else if (user === 'Empresa') {
      return of(responseCompany).pipe(delay(1000));
    } else {
      return throwError({
        status: 404
      });
    }
  }

  public createUser(
    name: string,
    lastName: string,
    cellNumber: string,
    address: string,
    email: string,
    password: string): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }

  public createCompany(
    name: string,
    cellNumber: string,
    address: string,
    email: string,
    password: string): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }

  public getLavadorasCliente(): Observable<ListWashingMachineModel[]> {
    return of(
      [
        {
          id: 1,
          nombre: 'MABE',
          capacidad: '20 LB',
          precio: '$2.000',
          disponibilidad: true,
          imagen: this.url,
        },
        {
          id: 2,
          nombre: 'SAMSUNG',
          capacidad: '30 LB',
          precio: '$3.000',
          disponibilidad: true,
          imagen: this.url,
        },
        {
          id: 3,
          nombre: 'CHALLENGE',
          capacidad: '40 LB',
          precio: '$4.000',
          disponibilidad: true,
          imagen: this.url,
        }
      ]
    ).pipe(delay(1000));
  }

  public getInfoLavadora(id: number): Observable<LavadoraModel> {
    return of({
      id: 1,
      empresa: 'Empresa Fake',
      telefono: '222 22 22',
      correo: 'empresaface@gmail.com',
      marca: 'MABE',
      capacidad: '20 LB',
      color: 'Blanco',
      panel: 'Analogico',
      mangera: 'Agua caliente, fria',
      precio: '$2.000',
      imagen: this.url,
    }).pipe(delay(1000));
  }

  public confimarPedido(id: number): Observable<boolean> {
    return of(true);
  }

  public datosCliente(correo: string): Observable<DatosClienteModel> {
    return of({
      nombre: 'Julian',
      apellido: 'Yepes',
      direccion: 'Calle 123',
      telefono: '222 22 22',
      correo: 'jy@gmail.com',
    }).pipe(delay(1000));
  }

  public actualizarCuentaCliente(
    name: string,
    lastName: string,
    cellNumber: string,
    address: string,
    email: string,
    password: string): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }

  public getServiciosCliente(correo: string): Observable<ServiciosClienteModel[]> {
    return of(
      [
        {
          mes: 'Abril',
          marca: 'MABE',
          capacidad: '10 LB',
          fecha: '20/04/2020',
          hora: '9:00',
          tarifa: '3.000',
          empresa: 'AlquilaYA',
          duracion: '1 Hora',
        },
        {
          mes: 'Abril',
          marca: 'MABE',
          capacidad: '10 LB',
          fecha: '10/04/2020',
          hora: '9:00',
          tarifa: '6.000',
          empresa: 'AlquilaYA',
          duracion: '2 Horas',
        },
        {
          mes: 'Mayo',
          marca: 'LG',
          capacidad: '10 LB',
          fecha: '20/05/2020',
          hora: '9:00',
          tarifa: '10.000',
          empresa: 'Empresa Fake',
          duracion: '2 Hora',
        },
        {
          mes: 'Febrero',
          marca: 'SAMSUNG',
          capacidad: '10 LB',
          fecha: '20/02/2020',
          hora: '9:00',
          tarifa: '5.000',
          empresa: 'Otra empresa',
          duracion: '1 Hora',
        }
      ]
    ).pipe(delay(1000));
  }


  public borrarCuentaCliente(correo: string): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }

  public cuentaEmpresa(correo: string): Observable<DatosEmpresaModel> {
    return of({
      nombre: 'Empresa Falsa',
      direccion: 'Calle falsa 123',
      telefono: '333 33 33',
      correo: 'empresafalsa@gmail.com',
    }).pipe(delay(1000));
  }

  public actualizarCuentaEmpresa(
    name: string,
    cellNumber: string,
    address: string,
    email: string,
    password: string): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }

  public getServiciosEmpresa(correo: string): Observable<ServiciosEmpresaModel[]> {
    return of(
      [
        {
          mes: 'Abril',
          marca: 'MABE',
          capacidad: '10 LB',
          fecha: '20/04/2020',
          hora: '9:00',
          tarifa: '3.000',
          cliente: 'Julian Yepes',
          duracion: '1 Hora',
        },
        {
          mes: 'Abril',
          marca: 'MABE',
          capacidad: '10 LB',
          fecha: '10/04/2020',
          hora: '9:00',
          tarifa: '6.000',
          cliente: 'Tatiana Perez',
          duracion: '2 Horas',
        },
        {
          mes: 'Mayo',
          marca: 'LG',
          capacidad: '10 LB',
          fecha: '20/05/2020',
          hora: '9:00',
          tarifa: '10.000',
          cliente: 'Camila Garcia',
          duracion: '2 Hora',
        },
        {
          mes: 'Febrero',
          marca: 'SAMSUNG',
          capacidad: '10 LB',
          fecha: '20/02/2020',
          hora: '9:00',
          tarifa: '5.000',
          cliente: 'Maria Rojas',
          duracion: '1 Hora',
        }
      ]
    ).pipe(delay(1000));
  }

  public crearLavadora(
    marca: string,
    capacidad: string,
    color: string,
    panel: string,
    manguera: string,
    precio: string,
  ): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }

  public obtenerLavadorasEmpresa(correo: string): Observable<LavadoraEmpresaModel[]> {
    return of(
      [
        {
          id: 1,
          nombre: 'MABE',
          capacidad: '20 LB',
          precio: '$2.000',
          disponibilidad: true,
          imagen: this.url,
        },
        {
          id: 2,
          nombre: 'SAMSUNG',
          capacidad: '30 LB',
          precio: '$3.000',
          disponibilidad: true,
          imagen: this.url,
        },
        {
          id: 3,
          nombre: 'CHALLENGE',
          capacidad: '40 LB',
          precio: '$4.000',
          disponibilidad: true,
          imagen: this.url,
        }
      ]
    ).pipe(delay(1000));
  }

  public eliminarLavadora(id: number): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }

  public aceptarPedido(id: number): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }

  public rechazarPedido(id: number): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }

  public terminarPedido(id: number): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }

  public obtenerPedidos(id: string): Observable<PedidosModel[]> {
    return of(
      [
        {
          id: 1,
          nombre: 'Julian',
          apellido: 'Yepes',
          telefono: '111 11 11',
          correo: 'ab@gmail.com',
          tiempo: '1 Hora',
          ganancia: '9.000',
          direccion: 'Calle 1',
          capacidad: '20 LB',
          marca: 'MABE',
          imagen: this.url,
        },
        {
          id: 2,
          nombre: 'Camila',
          apellido: 'Gonzalez',
          tiempo: '2 Horas',
          telefono: '111 11 11',
          correo: 'ab@gmail.com',
          ganancia: '16.000',
          direccion: 'Calle 2',
          capacidad: '40 LB',
          marca: 'LG',
          imagen: this.url,
        },
        {
          id: 3,
          nombre: 'Cristian',
          apellido: 'Rojas',
          telefono: '111 11 11',
          correo: 'ab@gmail.com',
          tiempo: '3 Horas',
          ganancia: '12.000',
          direccion: 'Calle 3',
          capacidad: '30 LB',
          marca: 'SAMSUNG',
          imagen: this.url,
        }
      ]
    ).pipe(delay(1000));
  }

  public consultarPedido(id: string): Observable<PedidosModel> {
    let pedido: PedidosModel;
    if (id === '1') {
      pedido = {
        id: 1,
        nombre: 'Julian',
        apellido: 'Yepes',
        telefono: '111 11 11',
        correo: 'ab@gmail.com',
        tiempo: '1 Hora',
        ganancia: '9.000',
        direccion: 'Calle 1',
        capacidad: '20 LB',
        marca: 'MABE',
        imagen: this.url,
      };
    } else if (id === '2') {
      pedido = {
        id: 2,
        nombre: 'Camila',
        apellido: 'Gonzalez',
        tiempo: '2 Horas',
        telefono: '111 11 11',
        correo: 'ab@gmail.com',
        ganancia: '16.000',
        direccion: 'Calle 2',
        capacidad: '40 LB',
        marca: 'LG',
        imagen: this.url,
      };
    } else {
      pedido = {
        id: 3,
        nombre: 'Cristian',
        apellido: 'Rojas',
        telefono: '111 11 11',
        correo: 'ab@gmail.com',
        tiempo: '3 Horas',
        ganancia: '12.000',
        direccion: 'Calle 3',
        capacidad: '30 LB',
        marca: 'SAMSUNG',
        imagen: this.url,
      };
    }
    return of(pedido).pipe(delay(2000));
  }
}
