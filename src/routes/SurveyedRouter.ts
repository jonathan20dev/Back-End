import { Router, Request, Response } from "express";
import { config } from "../config/config";
var mssql = require('mssql');

class SurveyedRouter {
  router: Router;

  constructor() {
    this.router = Router();
  }



  async get_Sucursal(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_sucursal')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }


  async get_Factura(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('sp_getFacturas')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Cliente(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_clientes')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Actividad(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_actividad')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }


  async get_Auditor(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_auditor')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Auditoria(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_auditoria')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Abono(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('sp_getAbonos')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Direccion_Cliente(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_direccion_cliente')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Telefono(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_telefono')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Notas_Credito(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_notas_credito')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Notas_Debito(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_notas_debito')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Cantones(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_canton')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Provincias(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_provincia')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Moneda(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_moneda')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_CuentasxCobrar(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_cuentasxcobrar')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }

  async get_Distrito(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
    return pool.request().execute('get_distrito')
    }).then((result: { recordset: any; }) => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    mssql.close();
    }).catch((err: any) => {
    res.status(500).send({ message: `${err}`})
    mssql.close();
    });
  }


  async get_ModsAuditorias(req: Request, res: Response){
    let { idAuditoria } = req.params; 
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
      return pool.request()
      .input('idAuditoria', mssql.INT, idAuditoria)
      .execute('sp_getModsAuditorias')
      }).then((result: { recordset: any; }) => {
        let rows = result.recordset; 
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).json(rows);
        mssql.close();
      }).catch((err: any) => {
        res.status(500).send({ message: `${err}`})
        mssql.close();
      });
  }

  async get_abonoAux(req: Request, res: Response){
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
      return pool.request()
      .execute('sp_getAbono')
      }).then((result: { recordset: any; }) => {
        let rows = result.recordset; 
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).json(rows);
        mssql.close();
      }).catch((err: any) => {
        res.status(500).send({ message: `${err}`})
        mssql.close();
      });
  }

  //CREATE
  
  async create_Client(req: Request, res: Response){
    let {cedula, nombre, email, codigoActividad, telefono, codDistrito, detalledir} = req.body;
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
      return pool.request()
      .input('cedula', mssql.VARCHAR(11), cedula)
      .input('nombre', mssql.VARCHAR(50), nombre)
      .input('email', mssql.VARCHAR(50), email)
      .input('codigoActividad', mssql.INT, codigoActividad)
      .input('telefono', mssql.VARCHAR(20), telefono) 
      .input('codDistrito', mssql.INT, codDistrito) 
      .input('detalledir', mssql.VARCHAR(100), detalledir)
      .execute('sp_crearCliente')
      }).then((result: { recordset: any; }) => {
        let rows = result.recordset
        console.log("ROWS "+rows)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(201).json(rows);
        mssql.close();
      }).catch((err: any) => {
        res.status(500).send({ message: `${err}`})
        mssql.close();
      });
  }

  async create_Sucursal(req: Request, res: Response){
    let {nombre} = req.body;
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
      return pool.request()
      .input('nombre', mssql.VARCHAR(50), nombre)
      .execute('sp_crearSucursal')
      }).then((result: { recordset: any; }) => {
        let rows = result.recordset
        console.log("ROWS "+rows)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(201).json(rows);
        mssql.close();
      }).catch((err: any) => {
        res.status(500).send({ message: `${err}`})
        mssql.close();
      });
  }

  async create_Actividad(req: Request, res: Response){
    let {nombre} = req.body;
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
      return pool.request()
      .input('nombre', mssql.VARCHAR(50), nombre)
      .execute('sp_crearActividad')
      }).then((result: { recordset: any; }) => {
        let rows = result.recordset
        console.log("ROWS "+rows)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(201).json(rows);
        mssql.close();
      }).catch((err: any) => {
        res.status(500).send({ message: `${err}`})
        mssql.close();
      });
  }

  async create_Telefono(req: Request, res: Response){
    let {cliente, numero} = req.body;
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
      return pool.request()
      .input('cliente', mssql.VARCHAR(11), cliente)
      .input('numero', mssql.VARCHAR(15), numero)
      .execute('sp_crearTelefono')
      }).then((result: { recordset: any; }) => {
        let rows = result.recordset
        console.log("ROWS "+rows)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(201).json(rows);
        mssql.close();
      }).catch((err: any) => {
        res.status(500).send({ message: `${err}`})
        mssql.close();
      });
  }

  async create_Tel(req: Request, res: Response){
    let {cedula, telefono} = req.body;
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
      return pool.request()
      .input('cedula', mssql.VARCHAR(11), cedula)
      .input('telefono', mssql.VARCHAR(15), telefono)
      .execute('sp_crearTel')
      }).then((result: { recordset: any; }) => {
        let rows = result.recordset
        console.log("ROWS "+rows)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(201).json(rows);
        mssql.close();
      }).catch((err: any) => {
        res.status(500).send({ message: `${err}`})
        mssql.close();
      });
  }

  async create_Auditor(req: Request, res: Response){
    let {cedula, nombre} = req.body;
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
      return pool.request()
      .input('cedula', mssql.VARCHAR(11), cedula)
      .input('nombre', mssql.VARCHAR(15), nombre)
      .execute('sp_crearAuditor')
      }).then((result: { recordset: any; }) => {
        let rows = result.recordset
        console.log("ROWS "+rows)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(201).json(rows);
        mssql.close();
      }).catch((err: any) => {
        res.status(500).send({ message: `${err}`})
        mssql.close();
      });
  }

  async create_Auditoria(req: Request, res: Response){
    let {fechaCreacion,idAuditor,codigoCuenta} = req.body;
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
      return pool.request()
      .input('fechaCreacion', mssql.VARCHAR(35), fechaCreacion)
      .input('idAuditor', mssql.VARCHAR(11), idAuditor)
      .input('codigoCuenta', mssql.INT, codigoCuenta)
      .execute('sp_crearAuditoria')
      }).then((result: { recordset: any; }) => {
        let rows = result.recordset
        console.log("ROWS "+rows)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(201).json(rows);
        mssql.close();
      }).catch((err: any) => {
        res.status(500).send({ message: `${err}`})
        mssql.close();
      });
  }


  async create_Abono(req: Request, res: Response){
    let {factura,monto,formaPaga, docReferencia} = req.body;
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
      return pool.request()
      .input('factura', mssql.INT, factura)
      .input('monto', mssql.INT, monto)
      .input('formaPago',mssql.VARCHAR(10), formaPaga)
      .input('docReferencia', mssql.VARCHAR(50), docReferencia)
      .execute('sp_pagarAbono')
      }).then((result: { recordset: any; }) => {
        let rows = result.recordset
        console.log("ROWS "+rows)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(201).json(rows);
        mssql.close();
      }).catch((err: any) => {
        res.status(500).send({ message: `${err}`})
        mssql.close();
      });
  }




  /*
  async create_Factura(req: Request, res: Response){
    let {tipo, monto, impuesto, descuento, notas, actividad, sucursal, cliente} = req.body;
    new mssql.ConnectionPool(config).connect().then((pool:any) => {
      return pool.request()
      .input('tipo', mssql.VARCHAR(11), tipo)
      .input('monto', mssql.VARCHAR(50), nombre)
      .input('impuesto', mssql.VARCHAR(50), email)
      .input('codigoActividad', mssql.INT, codigoActividad)
      .input('telefono', mssql.VARCHAR(20), telefono) 
      .input('codDistrito', mssql.INT, codDistrito) 
      .input('detalledir', mssql.VARCHAR(100), detalledir)
      .execute('sp_crearCliente')
      }).then((result: { recordset: any; }) => {
        let rows = result.recordset
        console.log("ROWS "+rows)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(201).json(rows);
        mssql.close();
      }).catch((err: any) => {
        res.status(500).send({ message: `${err}`})
        mssql.close();
      });
  }
*/
  //routes that consult in the FrontEnd
  routes() { 
    //GETS

    this.router.get("/sucursal", this.get_Sucursal);
    this.router.get("/factura", this.get_Factura);
    this.router.get("/cliente", this.get_Cliente);
    this.router.post("/telefono", this.create_Tel);
    this.router.get("/actividad", this.get_Actividad);
    this.router.get("/auditor", this.get_Auditor);
    this.router.get("/auditoria", this.get_Auditoria);
    this.router.get("/abono", this.get_Abono);
    this.router.get("/direccion_cliente", this.get_Direccion_Cliente);
    this.router.get("/telefono", this.get_Telefono);
    this.router.get("/notas_credito", this.get_Notas_Credito);
    this.router.get("/notas_debito", this.get_Notas_Debito);
    this.router.get("/distritos", this.get_Distrito);
    this.router.get("/cantones", this.get_Cantones);
    this.router.get("/provincias", this.get_Provincias);
    this.router.get("/monedas", this.get_Moneda);
    this.router.get("/cuentasxcobrar", this.get_CuentasxCobrar);
    this.router.get("/auditoria/:idAuditoria", this.get_ModsAuditorias);
    //
    this.router.post("/auditoria", this.create_Auditoria);
    this.router.post("/auditor", this.create_Auditor);
    this.router.post("/cliente", this.create_Client);
    this.router.post("/sucursal", this.create_Sucursal);
    this.router.post("/actividad", this.create_Actividad);
    this.router.post('/abonoaux', this.create_Abono);
  }
}



const surveyedRouter = new SurveyedRouter();
surveyedRouter.routes();

export default surveyedRouter.router;
