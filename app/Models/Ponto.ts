import { DateTime } from 'luxon'
import { 
  BaseModel, 
  column,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
 } from '@ioc:Adonis/Lucid/Orm'
import Material from 'App/Models/Material'
import User from 'App/Models/User'

export default class Ponto extends BaseModel {
 
  @column({ isPrimary: true })
  public id: number

  @manyToMany(() => Material)
  public materiais: ManyToMany<typeof Material>

  @column()
  public userId: number

  @belongsTo(() => User)
  public users: BelongsTo<typeof User>

  @column()
  public nome: string

  @column()
  public endereco_ponto: string

  @column()
  public cep: number
  
  @column()
  public dia_semana: string

  @column()
  public horario: string

  @column()
  public descricao_ponto: string

  // @column()
  // public link: string
  
  // @column()
  // public coordenada: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}


