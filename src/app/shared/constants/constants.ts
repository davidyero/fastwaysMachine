export class Constants {
  static readonly ENDPOINTS = {
    LOGIN: '/login',
    CREATE: '/crear-usuario',
    LIST_WASHING_MACHINE: '/lista-lavadoras-cliente',
    LIST_WASHING_MACHINE_COMPANY: '/lista-lavadoras-empresa',
  };

  static readonly APP_CONSTANTS = {
    ROLES: {
      USER: 'Usuario',
      COMPANY: 'Empresa'
    }
  };

  static readonly URLS = {
    PRINCIPAL: '',
    REGISTER_USER: 'registro-cliente',
    REGISTER_COMPANY: 'registro-empresa',
    LIST_USER: 'listado-lavadoras-cliente',
    ACCOUNT_USER: 'cuenta-cliente',
    MODIFY_USER: 'modificar-cliente',
    ORDER_STATE: 'estado-de-pedido',
    ACCOUNT_COMPANY: 'cuenta-empresa',
    SERVICES_USER: 'mis-servicios-cliente',
    MODIFY_COMPANY: 'modificar-empresa',
    SERVICES_COMPANY: 'mis-servicios-empresa',
    REGISTER_LAVADORA: 'registro-lavadora',
    LIST_COMPANY: 'listado-lavadoras-empresa',
    SERVICE: 'lista-de-pedidos',
    BILL_COMPANY: 'factura-empresa',
  };
}
