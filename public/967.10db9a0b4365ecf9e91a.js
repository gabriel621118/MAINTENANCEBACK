"use strict";(self.webpackChunkgemis=self.webpackChunkgemis||[]).push([[967],{7967:(b,f,n)=>{n.r(f),n.d(f,{VentasModule:()=>V});var c=n(8583),h=n(4330),r=n(665),t=n(7716),d=n(7490),u=n(6940);function m(a,i){if(1&a&&(t.TgZ(0,"option",5),t._uU(1),t.qZA()),2&a){const o=i.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij("",o.cliente_nombre," ")}}function s(a,i){if(1&a&&(t.TgZ(0,"option",5),t._uU(1),t.qZA()),2&a){const o=i.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij("",o.descripcion," ")}}function p(a,i){if(1&a){const o=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"input",17),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"input",17),t.qZA(),t.TgZ(7,"td"),t.TgZ(8,"button",18),t.NdJ("click",function(){const v=t.CHM(o).index;return t.oxw().borrarPasatiempo(v)}),t._uU(9," Borrar "),t.qZA(),t.qZA(),t.qZA()}if(2&a){const o=i.index;t.xp6(2),t.hij(" ",o+1," "),t.xp6(2),t.Q6J("formControlName",o),t.xp6(2),t.Q6J("formControlName",o)}}let _=(()=>{class a{constructor(o,e,l){this.fb=o,this.conexion=e,this.conexion2=l,this.Articulos=[],this.Clientes=[],this.forma=this.fb.group({nombre:[null,[r.kI.required]],selectcliente:[null],selectarticulos:[null]}),this.crearFormulario(),this.cargarDataAlFormulario(),this.crearListeners()}Lista_Articulos(){this.conexion.Obtener_Articulos().subscribe(o=>{this.Articulos=o.data,console.log("esta es el array",o)})}Lista_Clientes(){this.conexion2.Obtener_Clientes().subscribe(o=>{this.Clientes=o.data,console.log("esta es el array",o)})}ngOnInit(){this.Lista_Articulos(),this.Lista_Clientes()}get pasatiempos(){return this.forma.get("pasatiempos")}get nombreNoValido(){var o,e;return(null===(o=this.forma.get("nombre"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("nombre"))||void 0===e?void 0:e.touched)}get apellidoNoValido(){var o,e;return(null===(o=this.forma.get("apellido"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("apellido"))||void 0===e?void 0:e.touched)}get correoNoValido(){var o,e;return(null===(o=this.forma.get("correo"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("correo"))||void 0===e?void 0:e.touched)}get usuarioNoValido(){var o,e;return(null===(o=this.forma.get("usuario"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("usuario"))||void 0===e?void 0:e.touched)}get distritoNoValido(){var o,e;return(null===(o=this.forma.get("direccion.distrito"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("direccion.distrito"))||void 0===e?void 0:e.touched)}get ciudadNoValido(){var o,e;return(null===(o=this.forma.get("direccion.ciudad"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("direccion.ciudad"))||void 0===e?void 0:e.touched)}get pass1NoValido(){var o,e;return(null===(o=this.forma.get("pass1"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("pass1"))||void 0===e?void 0:e.touched)}get pass2NoValido(){var o,e;return(null===(o=this.forma.get("pass1"))||void 0===o?void 0:o.value)!==(null===(e=this.forma.get("pass2"))||void 0===e?void 0:e.value)}crearFormulario(){this.forma=this.fb.group({nombre:["",[r.kI.required,r.kI.minLength(5)]],apellido:["",[r.kI.required,r.kI.minLength(5)]],selectcliente:[""],selectarticulos:[""],correo:["",[r.kI.required,r.kI.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],pass1:["",r.kI.required],pass2:["",r.kI.required],direccion:this.fb.group({distrito:["",r.kI.required],ciudad:["",r.kI.required]}),pasatiempos:this.fb.array([])},{})}crearListeners(){var o;null===(o=this.forma.get("nombre"))||void 0===o||o.valueChanges.subscribe(console.log)}cargarDataAlFormulario(){this.forma.reset({})}agregarPasatiempo(){this.pasatiempos.push(this.fb.control("1"))}borrarPasatiempo(o){this.pasatiempos.removeAt(o)}guardar(){if(console.log(this.forma),this.forma.invalid)return Object.values(this.forma.controls).forEach(o=>{o instanceof r.cw?Object.values(o.controls).forEach(e=>e.markAsTouched()):o.markAsTouched()});this.forma.reset({nombre:"Sin nombre"})}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(r.qu),t.Y36(d.N),t.Y36(u.Y))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-cuentasxcobrar"]],decls:52,vars:11,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col-2","col-form-label"],[1,"col-8"],["formControlName","selectcliente","Class","select-css"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["formControlName","selectarticulos","Class","select-css",3,"change"],[1,"row"],[1,"col"],[1,"table"],[1,"thead-dark"],["formArrayName","pasatiempos"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary","mt-3","mb-5","btn-block",3,"click"],[1,"input-group","col"],["type","submit",1,"btn","btn-outline-primary","btn-block"],["type","text",1,"form-control",3,"formControlName"],[1,"btn","btn-danger",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"p"),t._uU(1,"cuentasxcobrar works!"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"form",0),t.NdJ("ngSubmit",function(){return e.guardar()}),t.TgZ(4,"div"),t.TgZ(5,"div",1),t.TgZ(6,"label",2),t._uU(7,"Seleccionar Cliente"),t.qZA(),t.TgZ(8,"div",3),t.TgZ(9,"select",4),t.TgZ(10,"option",5),t._uU(11,"Escoge una Opcion"),t.qZA(),t.YNc(12,m,2,2,"option",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"label",2),t._uU(15,"Seleccionar Articulo"),t.qZA(),t.TgZ(16,"div",3),t.TgZ(17,"select",7),t.NdJ("change",function(){return e.agregarPasatiempo()}),t.TgZ(18,"option",5),t._uU(19,"Escoge una Opcion"),t.qZA(),t.YNc(20,s,2,2,"option",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",8),t.TgZ(22,"div",9),t.TgZ(23,"table",10),t.TgZ(24,"thead",11),t.TgZ(25,"tr"),t.TgZ(26,"th"),t._uU(27,"Item"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Articulo"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Cantidad"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"Borrar"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"tbody",12),t.YNc(35,p,10,3,"tr",13),t.qZA(),t.qZA(),t.TgZ(36,"button",14),t.NdJ("click",function(){return e.agregarPasatiempo()}),t._uU(37," + Agregar "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"div",1),t.TgZ(39,"label",2),t._uU(40,"\xa0"),t.qZA(),t.TgZ(41,"div",15),t.TgZ(42,"button",16),t._uU(43," Guardar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(44,"hr"),t.TgZ(45,"pre"),t._uU(46),t._UZ(47,"br"),t._uU(48),t.qZA(),t.TgZ(49,"pre"),t._uU(50),t.ALo(51,"json"),t.qZA()),2&o&&(t.xp6(3),t.Q6J("formGroup",e.forma),t.xp6(7),t.Q6J("value",0),t.xp6(2),t.Q6J("ngForOf",e.Clientes),t.xp6(6),t.Q6J("value",0),t.xp6(2),t.Q6J("ngForOf",e.Articulos),t.xp6(15),t.Q6J("ngForOf",e.pasatiempos.controls),t.xp6(11),t.hij("  Estado del formulario: ",e.forma.valid,"\n  "),t.xp6(2),t.hij("\n  Status: ",e.forma.status,"\n"),t.xp6(2),t.hij("\n  ",t.lcZ(51,9,e.forma.value),"\n\n"))},directives:[r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,r.YN,r.Kr,c.sg,r.CE,r.Fj],pipes:[c.Ts],styles:[""]}),a})();var g=n(2340),Z=n(1841);let T=(()=>{class a{constructor(o){this.http=o,this.rutaserver=g.N.url_serve}Obtener_Ventas(){return this.http.get(`${this.rutaserver}/ventas`)}Grabar_Ventas(o){return this.http.post(`${this.rutaserver}/ventas`,o)}Actualiza_Ventas(o){return this.http.put(`${this.rutaserver}/ventas/${o.id}`,o)}}return a.\u0275fac=function(o){return new(o||a)(t.LFG(Z.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var C=n(3635);function q(a,i){if(1&a&&(t.TgZ(0,"option",8),t._uU(1),t.qZA()),2&a){const o=i.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij("",o.cliente_nombre," ")}}function N(a,i){if(1&a&&(t.TgZ(0,"option",8),t._uU(1),t.qZA()),2&a){const o=i.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij("",o.descripcion," ")}}function x(a,i){if(1&a){const o=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"input",18),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"input",18),t.qZA(),t.TgZ(7,"td"),t.TgZ(8,"button",19),t.NdJ("click",function(){const v=t.CHM(o).index;return t.oxw().borrarPasatiempo(v)}),t._uU(9," Borrar "),t.qZA(),t.qZA(),t.qZA()}if(2&a){const o=i.index;t.xp6(2),t.hij(" ",o+1," "),t.xp6(2),t.Q6J("formControlName",o),t.xp6(2),t.Q6J("formControlName",o)}}const U=[{path:"nota",component:(()=>{class a{constructor(o,e,l,v,A,y){this.fb=o,this.router=e,this.conexion=l,this.modalService=y,this.idnotavta=0,this.Ventas=[],this.Articulos=[],this.Clientes=[],this.crearFormulario(),this.cargarDataAlFormulario(),this.crearListeners(),this.forma=this.fb.group({nombre:["",[r.kI.required]],descripcion:[null,[r.kI.required]],selectlin:[null],selectcatego:[null],pasatiempos:this.fb.array([]),Arreglo:this.fb.array([])},{})}Lista_Ventas(){this.conexion.Obtener_Ventas().subscribe(o=>{this.Ventas=o.data,console.log("esta es el array",o)})}Lista_Clientes(){this.conexion.Obtener_Ventas().subscribe(o=>{this.Clientes=o.data,console.log("esta es el array",o)})}Lista_Articulos(){this.conexion.Obtener_Ventas().subscribe(o=>{this.Articulos=o.data,console.log("esta es el array",o)})}ngOnInit(){this.Lista_Ventas()}get pasatiempos(){return this.forma.get("pasatiempos")}get nombreNoValido(){var o,e;return(null===(o=this.forma.get("nombre"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("nombre"))||void 0===e?void 0:e.touched)}get apellidoNoValido(){var o,e;return(null===(o=this.forma.get("apellido"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("apellido"))||void 0===e?void 0:e.touched)}get correoNoValido(){var o,e;return(null===(o=this.forma.get("correo"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("correo"))||void 0===e?void 0:e.touched)}get usuarioNoValido(){var o,e;return(null===(o=this.forma.get("usuario"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("usuario"))||void 0===e?void 0:e.touched)}get distritoNoValido(){var o,e;return(null===(o=this.forma.get("direccion.distrito"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("direccion.distrito"))||void 0===e?void 0:e.touched)}get ciudadNoValido(){var o,e;return(null===(o=this.forma.get("direccion.ciudad"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("direccion.ciudad"))||void 0===e?void 0:e.touched)}get pass1NoValido(){var o,e;return(null===(o=this.forma.get("pass1"))||void 0===o?void 0:o.invalid)&&(null===(e=this.forma.get("pass1"))||void 0===e?void 0:e.touched)}get pass2NoValido(){var o,e;return(null===(o=this.forma.get("pass1"))||void 0===o?void 0:o.value)!==(null===(e=this.forma.get("pass2"))||void 0===e?void 0:e.value)}crearFormulario(){this.forma=this.fb.group({nombre:["",[r.kI.required,r.kI.minLength(5)]],selectlin:[null],selectcatego:[null],pasatiempos:this.fb.array([])},{})}crearListeners(){var o;null===(o=this.forma.get("nombre"))||void 0===o||o.valueChanges.subscribe(console.log)}cargarDataAlFormulario(){}agregarPasatiempo(){this.pasatiempos.push(this.fb.control(""))}borrarPasatiempo(o){this.pasatiempos.removeAt(o)}guardar(){if(console.log(this.forma),this.forma.invalid)return Object.values(this.forma.controls).forEach(o=>{o instanceof r.cw?Object.values(o.controls).forEach(e=>e.markAsTouched()):o.markAsTouched()});this.forma.reset({nombre:"Sin nombre"})}guardarNotavta(){this.forma.value.precioactual=this.forma.value.precio,console.log("este el valor del precio actual",this.forma.value.precioactual),this.forma.valid&&(console.log(this.forma.value),this.conexion.Grabar_Ventas(this.forma.value).subscribe(o=>{console.log(o),this.Lista_Ventas()}))}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(r.qu),t.Y36(h.gz),t.Y36(T),t.Y36(u.Y),t.Y36(d.N),t.Y36(C.FF))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-generar-nota-venta"]],decls:51,vars:11,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col-2","col-form-label"],[1,"col-8"],["formControlName","selectcliente","Class","select-css"],["disabled","disabled",3,"value"],[3,"value",4,"ngFor","ngForOf"],["formControlName","selectarticulos","Class","select-css",3,"change"],[3,"value"],[1,"row"],[1,"col"],[1,"table"],[1,"thead-dark"],["formArrayName","pasatiempos"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary","mt-3","mb-5","btn-block",3,"click"],[1,"input-group","col"],["type","submit",1,"btn","btn-outline-primary","btn-block"],["type","text",1,"form-control",3,"formControlName"],[1,"btn","btn-danger",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"p"),t._uU(1,"generar-nota-venta works!"),t.qZA(),t.TgZ(2,"form",0),t.NdJ("ngSubmit",function(){return e.guardar()}),t.TgZ(3,"div"),t.TgZ(4,"div",1),t.TgZ(5,"label",2),t._uU(6,"Seleccionar Cliente"),t.qZA(),t.TgZ(7,"div",3),t.TgZ(8,"select",4),t.TgZ(9,"option",5),t._uU(10,"Escoge una Opcion"),t.qZA(),t.YNc(11,q,2,2,"option",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",1),t.TgZ(13,"label",2),t._uU(14,"Seleccionar Articulo"),t.qZA(),t.TgZ(15,"div",3),t.TgZ(16,"select",7),t.NdJ("change",function(){return e.agregarPasatiempo()}),t.TgZ(17,"option",8),t._uU(18,"Escoge una Opcion"),t.qZA(),t.YNc(19,N,2,2,"option",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",9),t.TgZ(21,"div",10),t.TgZ(22,"table",11),t.TgZ(23,"thead",12),t.TgZ(24,"tr"),t.TgZ(25,"th"),t._uU(26,"Item"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Articulo"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Cantidad"),t.qZA(),t.TgZ(31,"th"),t._uU(32,"Borrar"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"tbody",13),t.YNc(34,x,10,3,"tr",14),t.qZA(),t.qZA(),t.TgZ(35,"button",15),t.NdJ("click",function(){return e.agregarPasatiempo()}),t._uU(36," + Agregar "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"div",1),t.TgZ(38,"label",2),t._uU(39,"\xa0"),t.qZA(),t.TgZ(40,"div",16),t.TgZ(41,"button",17),t._uU(42," Guardar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(43,"hr"),t.TgZ(44,"pre"),t._uU(45),t._UZ(46,"br"),t._uU(47),t.qZA(),t.TgZ(48,"pre"),t._uU(49),t.ALo(50,"json"),t.qZA()),2&o&&(t.xp6(2),t.Q6J("formGroup",e.forma),t.xp6(7),t.Q6J("value",0),t.xp6(2),t.Q6J("ngForOf",e.Clientes),t.xp6(6),t.Q6J("value",0),t.xp6(2),t.Q6J("ngForOf",e.Articulos),t.xp6(15),t.Q6J("ngForOf",e.pasatiempos.controls),t.xp6(11),t.hij("  Estado del formulario: ",e.forma.valid,"\n  "),t.xp6(2),t.hij("\n  Status: ",e.forma.status,"\n"),t.xp6(2),t.hij("\n  ",t.lcZ(50,9,e.forma.value),"\n\n"))},directives:[r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,r.YN,r.Kr,c.sg,r.CE,r.Fj],pipes:[c.Ts],styles:[""]}),a})()},{path:"cuentaxcobrar",component:_}];let V=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[c.ez,h.Bz,h.Bz.forChild(U),r.UX,r.u5]]}),a})()},7490:(b,f,n)=>{n.d(f,{N:()=>d});var c=n(8239),h=n(2340),r=n(7716),t=n(1841);let d=(()=>{class u{constructor(s){this.http=s,this.rutaserver=h.N.url_serve}Obtener_Articulos(){return this.http.get(`${this.rutaserver}/articulos`)}ObtenerArticulosPromise(){var s=this;return(0,c.Z)(function*(){return(yield s.http.get(`${s.rutaserver}/articulos`).toPromise()).data})()}Grabar_Articulos(s){return this.http.post(`${this.rutaserver}/articulos`,s)}}return u.\u0275fac=function(s){return new(s||u)(r.LFG(t.eN))},u.\u0275prov=r.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},8239:(b,f,n)=>{function c(r,t,d,u,m,s,p){try{var _=r[s](p),g=_.value}catch(Z){return void d(Z)}_.done?t(g):Promise.resolve(g).then(u,m)}function h(r){return function(){var t=this,d=arguments;return new Promise(function(u,m){var s=r.apply(t,d);function p(g){c(s,u,m,p,_,"next",g)}function _(g){c(s,u,m,p,_,"throw",g)}p(void 0)})}}n.d(f,{Z:()=>h})}}]);