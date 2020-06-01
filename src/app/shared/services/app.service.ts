import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Constants} from '../constants/constants';
import {Observable} from 'rxjs';
import {ResponseLoginModel} from '../models/response-login.model';
import {ListWashingMachineModel} from '../models/list-washing-machine.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private URL_BASE = '';
  private URL_LOGIN = `${this.URL_BASE}${Constants.ENDPOINTS.LOGIN}`;
  private URL_CREATE = `${this.URL_BASE}${Constants.ENDPOINTS.CREATE}`;
  private URL_LIST_WASHING_MACHINE = `${this.URL_BASE}${Constants.ENDPOINTS.LIST_WASHING_MACHINE}`;
  private URL_LIST_WASHING_MACHINE_COMPANY = `${this.URL_BASE}${Constants.ENDPOINTS.LIST_WASHING_MACHINE_COMPANY}`;

  constructor(private http: HttpClient) {
  }

  public login(user: string, password: string): Observable<ResponseLoginModel> {
    const params = new HttpParams();
    params.append('usuario', user);
    params.append('password', password);
    return this.http.get<ResponseLoginModel>(this.URL_LOGIN, {params});
  }

  public createUser(
    name: string,
    lastName: string,
    cellNumber: string,
    address: string,
    email: string,
    password: string): Observable<boolean> {
    return this.http.post<boolean>(this.URL_CREATE, {
      nombre: name,
      apellido: lastName,
      celular: cellNumber,
      direccion: address,
      correo: email,
      password,
    });
  }

  public createCompany(
    name: string,
    cellNumber: string,
    address: string,
    email: string,
    password: string): Observable<boolean> {
    return this.http.post<boolean>(this.URL_CREATE, {
      nombre: name,
      celular: cellNumber,
      direccion: address,
      correo: email,
      password,
    });
  }

  public getLavadorasCliente(): Observable<ListWashingMachineModel[]> {
    return this.http.get<ListWashingMachineModel[]>(this.URL_LIST_WASHING_MACHINE);
  }

  public getLavadorasEmpresa(name: string): Observable<boolean> {
    return this.http.get<boolean>(this.URL_LIST_WASHING_MACHINE_COMPANY);
  }
}
