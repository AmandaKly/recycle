import { DateTime } from 'luxon'
import { 
  BaseModel, 
  column, 
  computed, 
  beforeSave,
  hasMany,
  HasMany, 
} from '@ioc:Adonis/Lucid/Orm'
import Ponto from 'App/Models/Ponto'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Ponto)
  public pontos: HasMany<typeof Ponto>

  @column()
  public nome: string

  @column()
  public login: string

  @column({ serializeAs: null })
  public senha: string
  
  @column()
  public CNPJ: string

  @column()
  public tipo_empresa: 'empresa'| 'coleta_seletiva'

  @column()
  public email: string

  @column()
  public telefone: number
  

  @computed({ serializeAs: null })
  public get password() {
    return this.senha
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.senha) {
      user.senha = await Hash.make(user.senha)
    }
  }
}
