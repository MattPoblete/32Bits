(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cd136f1"],{"51be":function(t,e,s){"use strict";var a=s("7b60"),i=s.n(a);i.a},"62ac":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-3"},[s("div",{staticClass:"row d-flex"},[s("div",{staticClass:"d-flex justify-content-between"},[s("h1",[t._v("Búsqueda:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"ms-auto me-1",attrs:{type:"text",placeholder:"Buscar por código"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),void 0!=t.resultadoBusqueda?s("div",{staticClass:"my-5 d-flex justify-content-center"},[s("div",{staticClass:"card rounded",staticStyle:{width:"18rem"}},[s("img",{staticClass:"card-img-top",attrs:{src:t.resultadoBusqueda.img,alt:"..."}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.resultadoBusqueda.nombre))]),s("div",{staticClass:"d-flex justify-content-between my-3"},[t._m(0),s("h5",{staticClass:"card-text text-success text-end"},[t._v("$"+t._s(t.resultadoBusqueda.precio)),s("small",[t._v(" clp")])])]),s("div",{staticClass:"d-flex justify-content-end mt-3"},[s("button",{staticClass:"btn btn-success end-1",attrs:{type:"button"},on:{click:function(e){t.vender(t.resultadoBusqueda.codigo),t.agregarVenta(t.resultadoBusqueda),t.totalVentas(t.resultadoBusqueda)}}},[t._v(" Comprar "),s("i",{staticClass:"fas fa-plus"})])])])])]):t._e()]),s("div",{staticClass:"d-flex justify-content-center"},[s("h2",{staticClass:"text-danger"},[t._v("¡Tenemos en total "+t._s(t.totalStock)+" unidades en stock!")])]),s("div",{staticClass:"mb-5 d-flex justify-content-center"},[s("h5",{staticClass:"text-muted"},[t._v("Entre "+t._s(t.totalJuegos)+" juegos distintos")])]),s("div",[s("router-view",{staticClass:"my-5 d-flex justify-content-center"})],1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h6",{staticClass:"card-subtitle mb-2 text-black-50"},[t._v("Digital key "),s("i",{staticClass:"fas fa-key"})])}],n=s("5530"),c=s("2f62"),o={computed:Object(n["a"])({},Object(c["c"])(["filtrarPorCodigo","cantidadDeJuegos","cantidadDeStock"]),{resultadoBusqueda:function(){return this.$store.getters.filtrarPorCodigo(this.input)},totalJuegos:function(){return this.$store.getters.cantidadDeJuegos},totalStock:function(){return this.$store.getters.cantidadDeStock}}),data:function(){return{input:""}},methods:Object(n["a"])({},Object(c["d"])(["restarPorCodigo"]),{},Object(c["b"])(["agregarVenta","totalVentas","actualizarStock","venderProducto"]),{nuevoStock:function(){this.actualizarStock()},vender:function(t){this.restarPorCodigo(t)}})},r=o,u=(s("51be"),s("2877")),d=Object(u["a"])(r,a,i,!1,null,"1ba0b0cd",null);e["default"]=d.exports},"7b60":function(t,e,s){}}]);
//# sourceMappingURL=chunk-1cd136f1.7a327f8a.js.map