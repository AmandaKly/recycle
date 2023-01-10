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

    Route.get('/:id', 'UsersController.show')
        .where('id', /^[0-9]+$/)
        .as('usuarios.show')
    Route.post('/', 'UsersController.store')
        .as('usuarios.store')
    Route.patch('/:id', 'UsersController.update')
        .where('id', /^[0-9]+$/)
        .as('usuarios.update')
    Route.delete('/:id', 'UsersController.destroy')
        .where('id', /^[0-9]+$/)
        .as('usuarios.destroy')

    Route.post('/:id/pontos', 'PontosController.store')
        .where('id', /^[0-9]+$/)
        .as('pontos.store')
        
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
       .as('pontos.destroy')
    Route.patch('/:id', 'PontosController.update')
        .where('id', /^[0-9]+$/)
        .as('pontos.update')

    Route.post('/:id/materiais', 'MateriaisController.store')
        .where('id', /^[0-9]+$/)
        .as('materiais.store')
    }).prefix('/pontos')

    Route.group(() =>{
        Route.get('/', 'MateriaisController.index')
           .as('materiais.index')
        Route.get('/:id', 'MateriaisController.show')
           .where('id', /^[0-9]+$/)
           .as('materiais.show')
        //    Route.post('/', 'MateriaisController.store')
        //    .as('materiais.store')
        Route.delete('/:id', 'MateriaisController.destroy')
           .where('id', /^[0-9]+$/)
           .as('materiais.destroy')
        Route.patch('/:id', 'MateriaisController.update')
            .where('id', /^[0-9]+$/)
            .as('materiais.update')
        }).prefix('/materiais')

}).prefix('/api')





// }).prefix('/postagem')
//     .middleware('auth')
//     .where('id', /^[0-9]+$/)
//     .where('idComment', /^[0-9]+$/)