import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ponto from 'App/Models/Ponto'
import User from 'App/Models/User'
export default class PontosController {

    public async index({ response }:HttpContextContract) {
        const pontos = await Ponto.query().preload('materiais')
        .orderBy('created_at', 'desc')

        return response.ok(pontos)
    }


    public async show({params}: HttpContextContract) {
        const pontos = await Ponto.findOrFail(params.id)

        return {
            data: pontos,
        }
    }

    public async findbycep({request, response}:HttpContextContract) {
        const filtro = request.only(['cep'])
        const cep = await Ponto.query().where('cep', filtro.cep)
        console.log(filtro)
        console.log(cep)
        
            return response.ok(cep)
        
    }

    public async findbynomeponto({request, response}:HttpContextContract) {
        const filtro = request.only(['nome'])
        
        const pontos = await Ponto.query().whereILike('nome', '%' + filtro.nome + '%')
        
        return response.ok(pontos)
    }

    public async findbyendereco({request, response}:HttpContextContract) {
        const filtro = request.only(['endereco_ponto'])
        
        const pontos = await Ponto.query().orWhereILike('endereco_ponto', '%' + filtro.endereco_ponto + '%')
        
        return response.ok(pontos)
    }

    async store({request, params, response, auth}:HttpContextContract) {
        if (auth.use('api').user != null){
        const body = request.body()
        const userId = params.id

        await User.findOrFail(userId)
        try {
        body.user_id = userId

        const ponto = await Ponto.create(body)

        response.status(201)

        return {
            message: "Ponto adicionado com sucesso",
            data: ponto,
        }

        } catch (e) {
            return response.badRequest(e)
        } 
    } else return response.unauthorized('Usuário não está autorizado.')
    }

   
    async destroy ({ params, response, auth }: HttpContextContract) {
        if (auth.use('api').user != null){
        const pontos = await Ponto.findOrFail(params.id)
        try {
            await pontos.delete()
            return response.ok(pontos)
        } catch (e) {
            return response.badRequest(e)
        }
    } else return response.unauthorized('Usuário não está autorizado.')
    }

    async update ({ params, request, response, auth }: HttpContextContract) {
        if (auth.use('api').user != null)
        {const pontos = await Ponto.findOrFail(params.id)
        pontos.merge(request.only(['nome','endereco_ponto','cep','dia_semana','horario','descricao_ponto']))
        try {
            await pontos.save()
            return response.ok(pontos)
        } catch (e) {
            return response.badRequest(e)
        }
    }
    }

}

