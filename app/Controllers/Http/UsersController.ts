import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
    async index ({ response }: HttpContextContract) {
        const usuarios = await User.query().preload('pontos')
            .orderBy('created_at', 'desc')
            

            const r = usuarios.map(u => u.serialize({
                fields: {
                    omit: ['senha', 'password']
              }
            }))
            
            return response.ok(r)
    }

     /**
     * Precisa editar para não aparecer a senha do usuário
     * @param param0 
     */
    async show({response, params}: HttpContextContract) {
        const usuarios = await User.findOrFail(params.id)

        await usuarios.load('pontos')

        return response.ok(usuarios)
    }


    async destroy ({ params, response }: HttpContextContract) {
        const usuario = await User.findOrFail(params.id)
        try {
            await usuario.delete()
            return response.ok(usuario)
        } catch (e) {
            return response.badRequest(e)
        }
    }

    /**
     * Método que armazena os dados do formulário de cadastro
     * @param param0 
     */
    async store ({ request, response }: HttpContextContract) {
        const dados = request.only(['nome','login','senha','CNPJ','tipo_empresa','email','telefone'])
        try {
            // console.log(dados)
            // console.log(request.all())
            const usuario = await User.create(dados)
            return response.created(usuario)

        } catch (e) {
            return response.badRequest(e)
        
        }
    }

    /**
     * Armazena as alterações do formulário no BD
     * @param param0 
     * alterado de 'nome','login','tipoEmpresa'
     */
    async update ({ params, request, response }: HttpContextContract) {
        const usuario = await User.findOrFail(params.id)
        usuario.merge(request.only(['email','telefone']))
        if (request.input('senha')) {
            usuario.senha = request.input('senha')
        }
        try {
            await usuario.save()
            return response.ok(usuario)
        } catch (e) {
            return response.badRequest(e)
        }
    }
}
