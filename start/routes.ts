/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
// Route.get('/', 'UserController.index').as('index').middleware('auth')

Route.group(() => {
   
        
    Route.group(() => {
    Route.get('/', 'UsersController.index')
        .as('usuarios.index')

    // Route.get('/:id', 'UsersController.show')
    //     .where('id', /^[0-9]+$/)
    //     .as('usuarios.show')
    Route.post('/', 'UsersController.store')
        .as('usuarios.store')

    Route.patch('/:id', 'UsersController.update')
        .where('id', /^[0-9]+$/)
        .as('usuarios.update').middleware('auth')
    
        Route.delete('/:id', 'UsersController.destroy')
        .where('id', /^[0-9]+$/)
        .as('usuarios.destroy').middleware('auth')

    Route.post('/:id/pontos', 'PontosController.store')
        .where('id', /^[0-9]+$/)
        .as('pontos.store').middleware('auth')
        
    }).prefix('/usuario')


    Route.group(() => {
    Route.post('/login','AuthController.login')
        .as('auth.login')
    Route.post('/logout','AuthController.logout')
        .as('auth.logout').middleware('auth')
    }).prefix('/auth')
    
    Route.group(() =>{
    Route.get('/', 'PontosController.index')
       .as('pontos.index')
    Route.get('/:id', 'PontosController.show')
       .where('id', /^[0-9]+$/)
       .as('pontos.show')
    Route.delete('/:id', 'PontosController.destroy')
       .where('id', /^[0-9]+$/)
       .as('pontos.destroy').middleware('auth')
    Route.patch('/:id', 'PontosController.update')
        .where('id', /^[0-9]+$/)
        .as('pontos.update').middleware('auth')

    Route.post('/:id/materiais', 'MateriaisController.store')
        .where('id', /^[0-9]+$/)
        .as('materiais.store').middleware('auth')
    }).prefix('/pontos')

    Route.group(() =>{
        Route.get('/', 'MateriaisController.index')
        Route.post('/listar', 'MateriaisController.findbycategoria')
        Route.delete('/:id', 'MateriaisController.destroy')
           .where('id', /^[0-9]+$/)
           .as('materiais.destroy').middleware('auth')
        Route.patch('/:id', 'MateriaisController.update')
            .where('id', /^[0-9]+$/)
            .as('materiais.update').middleware('auth')
        }).prefix('/materiais')

}).prefix('/api')




Route.group(() =>{
    
}).prefix('/postagem')
    .middleware('auth')
    .where('id', /^[0-9]+$/)
    .where('idComment', /^[0-9]+$/)