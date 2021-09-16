//peticiones http

import { init } from './js/archivos-page'

init();

// import * as CRUD from './js/crud-provider';

// CRUD.getUsuario(2).then(console.log);

// CRUD.crearUsuario({
//     name: 'Carlos',
//     job: 'Carpintero'
// }).then( console.log );

// CRUD.actualizarUsuario( 1, {
//     name: 'melissa',
//     job:  'developer'
// }).then(console.log);

// CRUD.eliminarUsuario( 1 ).then( console.log );



// import { init } from "./js/usuarios-page";
// init();

// import { obtenerUsuarios } from "./js/http-provider";

// obtenerUsuarios().then(console.log);






// import { init } from "./js/page-chiste";

// init()
// const url = 'https://api.chucknorris.io/jokes/random';

// // fetch(url).then( resp => {

// // 	resp.json().then({id, value} => {
// // 		console.log(id);
// // 		console.log(value);
// // 	});

// // });

// fetch(url).then( resp => resp.json() )
// 	.then( ({id, value }) =>{
// 			console.log(id, value);
// 		});
