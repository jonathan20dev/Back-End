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
    return pool.request().execute('get_factura')
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
    return pool.request().execute('get_abono')
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


  //routes that consult in the FrontEnd
  routes() { 
    //GETS
    this.router.get("/sucursal", this.get_Sucursal);
    this.router.get("/factura", this.get_Factura);
    this.router.get("/cliente", this.get_Cliente);
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

    //POST
    this.router.post("/cliente", this.create_Client);
  }
}



const surveyedRouter = new SurveyedRouter();
surveyedRouter.routes();

export default surveyedRouter.router;
