import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ponto from 'App/Models/Ponto'
import User from 'App/Models/User'
export default class PontosController {

    public async index({ response }:HttpContextContract) {
        const pontos = await Ponto.query().preload('materiais')

        return response.ok(pontos)
    }


    public async show({params}: HttpContextContract) {
        const pontos = await Ponto.findOrFail(params.id)

        return {
            data: pontos,
        }
    }


    async store({request, params, response}:HttpContextContract) {
        const body = request.body()
        const userId = params.id

        await User.findOrFail(userId)

        body.user_id = userId

        const ponto = await Ponto.create(body)

        response.status(201)

        return {
            message: "Ponto adicionado com sucesso",
            data: ponto,
        }
    }

   
    async destroy ({ params, response }: HttpContextContract) {
        const pontos = await Ponto.findOrFail(params.id)
        try {
            await pontos.delete()
            return response.ok(pontos)
        } catch (e) {
            return response.badRequest(e)
        }
    }

    async update ({ params, request, response }: HttpContextContract) {
        const pontos = await Ponto.findOrFail(params.id)
        pontos.merge(request.only(['nome','endereco_ponto','cep','dia_semana','horario','descricao_ponto']))
        try {
            await pontos.save()
            return response.ok(pontos)
        } catch (e) {
            return response.badRequest(e)
        }
    }


}

