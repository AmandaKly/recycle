import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Material from 'App/Models/Material'
import Ponto from 'App/Models/Ponto'

export default class MateriaisController {
   
    public async index({ response }:HttpContextContract) {
        const materiais = await Material.query()
        // const resultado = await Material.query().select('id, nome').where('nome', 'like', "USUARIO_DIGITOU%")

        return response.ok(materiais)
    }


    public async store({request, response, params}:HttpContextContract) {
 
        const body = request.body()
        const pontoId = params.id

        const ponto = await Ponto.findOrFail(pontoId)
        
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
    }

    public async destroy({params, response}:HttpContextContract) {
        const materiais = await Material.findOrFail(params.id)
        try {
            await materiais.delete()
            return response.ok(materiais)
        } catch (e) {
            return response.badRequest(e)
        }
    }

   
}
