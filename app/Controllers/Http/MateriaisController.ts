import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Material from 'App/Models/Material'
export default class MateriaisController {
   
    public async index({ response }:HttpContextContract) {
        const materiais = await Material.query()

        return response.ok(materiais)
    }


    public async store({request, response}:HttpContextContract) {
        const body = request.body()

        const materiais = await Material.create(body)

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
