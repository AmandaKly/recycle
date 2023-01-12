import { DateTime } from 'luxon'
import { 
  BaseModel,
  column,
  manyToMany,
  ManyToMany,
 } from '@ioc:Adonis/Lucid/Orm'
import Ponto from 'App/Models/Ponto'

export default class Material extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public tipo_material: string

 
  @manyToMany(() => Ponto)
  public pontos: ManyToMany<typeof Ponto>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
