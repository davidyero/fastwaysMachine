import {ServiciosClienteModel} from './servicios-cliente.model';

export interface ServiciosPorMesModel {
  enero?: ServiciosClienteModel[];
  febrero?: ServiciosClienteModel[];
  marzo?: ServiciosClienteModel[];
  abril?: ServiciosClienteModel[];
  mayo?: ServiciosClienteModel[];
  junio?: ServiciosClienteModel[];
  julio?: ServiciosClienteModel[];
  agosto?: ServiciosClienteModel[];
  septiembre?: ServiciosClienteModel[];
  octubre?: ServiciosClienteModel[];
  noviembre?: ServiciosClienteModel[];
  diciembre?: ServiciosClienteModel[];
}
