



import Almacenmovimientos from "../models/almacenmovimientos.model";
import User from '../models/user.model';
import Almacenpt from '../models/almacenpt.model';
import Categorias from '../models/categorias.model';
import Cierres from "../models/cierres.model";
import Roles from '../models/roles.model';
import Cliente from '../models/cliente.model';
import Departamento from '../models/departamento.model';
//import Usertypes from '../models/user-types.model';
import Horashombre from "../models/horashombre.model";
import Lineas from "../models/lineas.model";
//import Transactions from '../models/transactions';
//import Accounts from '../models/accounts';
import Listaprecios from "../models/listaprecios.model";
import Materiales from "../models/materiales.model";
import Articulos from "../models/articulos.model";
import Ordendetalle from "../models/ordendetalle.model";
import Ordentrabajo from "../models/ordentrabajo.model";
import Plandetalle from "../models/plandetalle.model";
import Preciosxcliente from "../models/preciosxcliente.model";
import Tipocliente from "../models/tipocliente.model";
import Tipomovimientos from "../models/tipomovimientos.model";
import Ventas from "../models/ventas.model";
import Ventasdetalle from "../models/ventasdetalle.model";
import Equipos from "../models/equipos.model";
import Programas from "../models/programas.model";
import Grupotrabajo from "../models/grupotrabajo.model";
import Planes from "../models/planes.model";
import Bom from "../models/bom.model";
import Bomdetalle from "../models/bomdetalle.model";
import Ordentipo from "../models/ordentipo.model";
import OrdenStatus from "../models/ordenstatus.model";
import Recursohumano from "../models/recursohumano.model";
import Avisos from "../models/avisos.model";
import Avisostipo from "../models/avisotipo.model";
import AvisoStatus from "../models/avisostatus.model";
import Progsemanal from "../models/progsemanal.model";
import Progsemanaorden from "../models/progsemanorden.model";
import Confirmacion from "../models/confirmacion.model";
import Employee from "../models/employee.model";
import Divisiones from "../models/divisiones.model";
import Manuales from "../models/manuales.model";
import Evidencias from "../models/evidencias.model";
import Ubicaciones from "../models/ubicaciones.model";


export const createAssosiations = () => {  

  Categorias.hasMany(Articulos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Articulos.belongsTo(Categorias,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

  Lineas.hasMany(Articulos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Articulos.belongsTo(Lineas,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

  Tipocliente.hasMany(Cliente,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Cliente.belongsTo(Tipocliente,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

  Cliente.hasMany(Preciosxcliente,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Preciosxcliente.belongsTo(Cliente,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

  Cliente.hasMany(Ventas,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Ventas.belongsTo(Cliente,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


  Articulos.hasMany(Almacenpt,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Almacenpt.belongsTo(Articulos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

  Articulos.hasMany(Listaprecios,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Listaprecios.belongsTo(Articulos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

  Articulos.hasMany(Preciosxcliente,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Preciosxcliente.belongsTo(Articulos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

  Articulos.hasMany(Almacenmovimientos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Almacenmovimientos.belongsTo(Articulos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


  Articulos.hasMany(Ventasdetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Ventasdetalle.belongsTo(Articulos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

  Ventas.hasMany(Ventasdetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Ventasdetalle.belongsTo(Ventas,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


  

 

  Departamento.hasMany(Horashombre,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Horashombre.belongsTo(Departamento,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

  Tipomovimientos.hasMany(Almacenmovimientos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
  Almacenmovimientos.belongsTo(Tipomovimientos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

  


  /*  //Services.  
  

*/
Categorias.hasMany(Equipos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Equipos.belongsTo(Categorias,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Departamento.hasMany(Equipos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Equipos.belongsTo(Departamento,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Ubicaciones.hasMany(Equipos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Equipos.belongsTo(Ubicaciones,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Ubicaciones.hasMany(Departamento,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Departamento.belongsTo(Ubicaciones,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Lineas.hasMany(Equipos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Equipos.belongsTo(Lineas,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Divisiones.hasMany(Equipos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Equipos.belongsTo(Divisiones,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Equipos.hasMany(Bom,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Bom.belongsTo(Equipos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Equipos.hasOne(Manuales,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Manuales.belongsTo(Equipos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Bom.hasMany(Bomdetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Bomdetalle.belongsTo(Bom,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Materiales.hasMany(Bomdetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Bomdetalle.belongsTo(Materiales,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Planes.hasMany(Plandetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Plandetalle.belongsTo(Planes,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Materiales.hasMany(Plandetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Plandetalle.belongsTo(Materiales,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Grupotrabajo.hasMany(Plandetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Plandetalle.belongsTo(Grupotrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Equipos.hasMany(Planes,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Planes.belongsTo(Equipos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Planes.hasMany(Programas,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Programas.belongsTo(Planes,{foreignKey:{allowNull:false},onDelete:'CASCADE'});



Materiales.hasMany(Plandetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Plandetalle.belongsTo(Materiales,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Planes.hasMany(Ordentrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Ordentrabajo.belongsTo(Planes,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Avisostipo.hasMany(Avisos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Avisos.belongsTo(Avisostipo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
AvisoStatus.hasMany(Avisos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Avisos.belongsTo(AvisoStatus,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Equipos.hasMany(Avisos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Avisos.belongsTo(Equipos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Ordentrabajo.hasOne(Avisos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Avisos.belongsTo(Ordentrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Grupotrabajo.hasOne(Avisos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Avisos.belongsTo(Grupotrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Ordentipo.hasMany(Ordentrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Ordentrabajo.belongsTo(Ordentipo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


OrdenStatus.hasMany(Ordentrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Ordentrabajo.belongsTo(OrdenStatus,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Equipos.hasMany(Ordentrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Ordentrabajo.belongsTo(Equipos,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Ordentrabajo.hasMany(Ordendetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Ordendetalle.belongsTo(Ordentrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Ordentrabajo.hasOne(Evidencias,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Evidencias.belongsTo(Ordentrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Materiales.hasMany(Ordendetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Ordendetalle.belongsTo(Materiales,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Grupotrabajo.hasMany(Ordendetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Ordendetalle.belongsTo(Grupotrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Grupotrabajo.hasMany(Recursohumano,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Recursohumano.belongsTo(Grupotrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});





Lineas.hasMany(Programas,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Programas.belongsTo(Lineas,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Planes.hasMany(Programas,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Programas.belongsTo(Planes,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Grupotrabajo.hasMany(Programas,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Programas.belongsTo(Grupotrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Categorias.hasMany(Lineas,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Lineas.belongsTo(Categorias,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Ordendetalle.hasMany(Progsemanal,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Progsemanal.belongsTo(Ordendetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Ordentrabajo.hasMany(Progsemanaorden,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Progsemanaorden.belongsTo(Ordentrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Grupotrabajo.hasMany(Progsemanaorden,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Progsemanaorden.belongsTo(Grupotrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});


Ordendetalle.hasMany(Confirmacion,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Confirmacion.belongsTo(Ordendetalle,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Employee.hasMany(Confirmacion,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Confirmacion.belongsTo(Employee,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

Grupotrabajo.hasMany(Employee,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
Employee.belongsTo(Grupotrabajo,{foreignKey:{allowNull:false},onDelete:'CASCADE'});




}

