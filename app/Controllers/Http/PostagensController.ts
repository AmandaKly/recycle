// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import User from 'App/Models/User'
// import Ponto from 'App/Models/Ponto'
// export default class PostagensController {
       
        // async index({ response, }) {
        //         const posts = await Ponto.all()

        //         return posts
        //     }
        
        
        // async store({request, response, auth}:HttpContextContract) {
        //         if (auth.use('api').user != null) {
        //             try {
        //                 const data = {
        //                     user_id: auth.use('api').user?.id,
        //                     post: request.input('post')
        //                 }
        //                 const point = await Ponto.create(data)
        //                 return response.created(point)
        //             } catch (e) {
        //                 //mensagem de erro para o usuário
        //                 return response.badRequest(e)
        //             }
        //         } else return response.unauthorized('tá fazendo o quê aqui?')
        //         }        
        
        
        //     async delete({response, params}:HttpContextContract) {
        //         //  bouncer,
        //         // await bouncer.authorize('deletePost', post)
        //         try {
        //             const post = await Post.findOrFail(params.id)
            
        //             post.isDeleted = true
        //             await post.save()
        //             return response.ok(post)
        
        //         } catch (e) {
        //             return response.badRequest(e)
        //         }
        //     }


        // async update ({ params, request, response }: HttpContextContract) {
        //         const usuario = await User.findOrFail(params.id)
        //         usuario.merge(request.only(['nome','login','papel']))
        //         if (request.input('senha')) {
        //             usuario.senha = request.input('senha')
        //         }
        //         try {
        //             await usuario.save()
        //             return response.ok(usuario)
        //         } catch (e) {
        //             return response.badRequest(e)
        //         }
        //     }
        
        
        // async listUsers({  auth }:HttpContextContract) {
        //         const userId = auth.use('api').user?.id
        //         //aqui não tem await
        //         const q = User.query()
        //             .orderBy('login','asc')
        //         if (userId) q.whereNot('id',userId)
        //         //o await daqui realiza a busca
        //         const users = await q
        
        //         return view.render('twitter/users', {
        //             users
        //         })
        //     }    
        // }
        
