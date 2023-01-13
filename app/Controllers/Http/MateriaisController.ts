import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Material from 'App/Models/Material'
import Ponto from 'App/Models/Ponto'

export default class MateriaisController {
   
    public async index({ response }:HttpContextContract) {
        const materiais = await Material.query()

        return response.ok(materiais)
    }

    public async store({request, response, params, auth}:HttpContextContract) {
        if (auth.use('api').user != null){
        const body = request.body()
        const pontoId = params.id

        const ponto = await Ponto.findOrFail(pontoId)
        try {
        
        const materiais = await Material.create(body)
// colocar isso aqui em pontos
        if (ponto){
            materiais.related('pontos').attach([pontoId])
        }

        response.status(201)

        return {
            message: "Material adicionado com sucesso",
            data: materiais,
        }
        } catch (e) {
            return response.badRequest(e)
        } 
    }   else return response.unauthorized('Usuário não está autorizado.')
    }

    public async destroy({params, response, auth}:HttpContextContract) {
        if (auth.use('api').user != null){
        const materiais = await Material.findOrFail(params.id)
        try {
            await materiais.delete()
            return response.ok(materiais)
        } catch (e) {
            return response.badRequest(e)
        }
    }   else return response.unauthorized('Usuário não está autorizado.')
    }

   
}
