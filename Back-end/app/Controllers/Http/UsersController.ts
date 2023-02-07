import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
export default class UsersController {
    async index ({ response }: HttpContextContract) {
        const usuarios = await User.query().preload('pontos', (pontosQuery) => {pontosQuery.preload('materiais')})
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
        try {
        await usuarios.load('pontos')

        return response.ok(usuarios)}
        catch (e) {
            return response.badRequest(e)
        } 
    }

    async getTipoEmpresa({response, auth}:HttpContextContract) {
        if (auth.use('api').user != null){
            const id = auth.use('api').user?.id
            const usuario = await User.query().from('users').select('tipo_empresa').where({id})
            return response.ok(usuario)
        }
    }


    async destroy ({ params, response, auth }: HttpContextContract) {
        if (auth.use('api').user != null)
        {const usuario = await User.findOrFail(params.id)
        try {
            await usuario.delete()
            return response.ok(usuario)
        } catch (e) {
            return response.badRequest(e)
        } 
    } else return response.unauthorized('Usuário não está autorizado.')
    }

    /**
     * Método que armazena os dados do formulário de cadastro
     * @param param0 
     */
    async store ({ request, response,}: HttpContextContract) {
        const body = request.body()
        try {
            const usuario = await User.create(body)
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
    async update ({ params, request, response, auth }: HttpContextContract) {
        if (auth.use('api').user != null)
        {
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
        }} else return response.unauthorized('Usuário não está autorizado.')
    }
}
