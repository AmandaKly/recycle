import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Material from 'App/Models/Material'
import Ponto from 'App/Models/Ponto'


export default class MateriaisController {
   
    public async index({ response }:HttpContextContract) {
        const materiais = await Material.query()
        
        return response.ok(materiais)
    }

    public async findbycategoria({request, response}:HttpContextContract) {
        const filtro = request.only(['tipo_material'])
        const materiais = await Material.query().whereILike('tipo_material', '%' + filtro.tipo_material + '%')
        return response.ok(materiais)
    }

    async store({request, response, params, auth}:HttpContextContract) {
        if (auth.use('api').user != null){
        const body = request.body()
        const pontoId = params.id

        const ponto = await Ponto.findOrFail(pontoId)
        try {
        
        const materiais = await Material.create(body)
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
