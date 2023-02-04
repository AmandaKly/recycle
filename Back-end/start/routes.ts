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

Route.group(() => {
   
        
    Route.group(() => {
        // Essa rota serve para listar toodos os usuários cadastrados.
    Route.get('/', 'UsersController.index')
        .as('usuarios.index')

        // Essa rota serve para cadastrar um usuário.
    Route.post('/', 'UsersController.store')
        .as('usuarios.store')

        // Essa rota serve para atualizar dados de um usuário cadastrado.
    Route.patch('/:id', 'UsersController.update')
        .where('id', /^[0-9]+$/)
        .as('usuarios.update').middleware('auth')
    
        // Essa rota serve para deletar um usuário.
        Route.delete('/:id', 'UsersController.destroy')
        .where('id', /^[0-9]+$/)
        .as('usuarios.destroy').middleware('auth')

        // Essa rota serve para criar um ponto de coleta ('/usuario/pontos')
    Route.post('/:id/pontos', 'PontosController.store')
        .where('id', /^[0-9]+$/)
        .as('pontos.store').middleware('auth')

    Route.get('/tipoEmpresa', 'UsersController.getTipoEmpresa')
        .where('id', /^[0-9]+$/)
        .as('tipoEmpresa.index').middleware('auth')
        
        // ATENÇÃO! TODAS AS ROTAS PARA USUÁRIO DEVEM INICIAR ANTES COM O PREFIXO /usuario
    }).prefix('/usuario')


    Route.group(() => {
        // Essa rota serve para fazer login.
    Route.post('/login','AuthController.login')
        .as('auth.login')
        // Essa rota serve para sair da conta.
    Route.post('/logout','AuthController.logout')
        .as('auth.logout').middleware('auth')
    }).prefix('/auth')
    
    Route.group(() =>{
        // Essa rota serve para listar todos os pontos de coletas.
    Route.get('/', 'PontosController.index')
       .as('pontos.index')

       // Essa rota serve para listar tum ponto de coleta específico.
    Route.get('/:id', 'PontosController.show')
       .where('id', /^[0-9]+$/)
       .as('pontos.show')

        // Essa rota serve para listar os ceps conforme que o usuario digitar.
    Route.post('/listar/cep', 'PontosController.findbycep')

        // Essa rota serve para listar os pontos conforme que o usuario digitar.
    Route.post('/listar/nome', 'PontosController.findbynomeponto')

        // Essa rota serve para listar os pontos conforme que o usuario digitar.
    Route.post('/listar/endereco', 'PontosController.findbyendereco')

       // Essa rota serve para deletar um ponto de coleta.
    Route.delete('/:id', 'PontosController.destroy')
       .where('id', /^[0-9]+$/)
       .as('pontos.destroy').middleware('auth')

       // Essa rota serve para atualizar um ponto de coleta.
    Route.patch('/:id', 'PontosController.update')
        .where('id', /^[0-9]+$/)
        .as('pontos.update').middleware('auth')

        // Essa rota serve para criar materiais para um de coleta. (use a rota '/pontos/materiais')
    Route.post('/:id/materiais', 'MateriaisController.store')
        .where('id', /^[0-9]+$/)
        .as('materiais.store').middleware('auth')

        // ATENÇÃO! TODAS AS ROTAS PARA PONTOS DEVEM INICIAR ANTES COM O PREFIXO /pontos
    }).prefix('/pontos')


    Route.group(() =>{
        // Essa rota serve para listar todos os materiais.
        Route.get('/', 'MateriaisController.index')

        // Essa rota serve para listar os materiais conforme que o usuario digitar.
        Route.post('/listar/material', 'MateriaisController.findbycategoria')

        // Essa rota serve para deletar um material.
        Route.delete('/:id', 'MateriaisController.destroy')
           .where('id', /^[0-9]+$/)
           .as('materiais.destroy').middleware('auth')

        // Essa rota serve para editar um material.
        Route.patch('/:id', 'MateriaisController.update')
            .where('id', /^[0-9]+$/)
            .as('materiais.update').middleware('auth')

            // ATENÇÃO! TODAS AS ROTAS PARA MATERIAIS DEVEM INICIAR ANTES COM O PREFIXO /materiais
        }).prefix('/materiais')

}).prefix('/api')

