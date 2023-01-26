import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tipo_usuarios'

  public async up () {
    this.schema.alterTable('users', (table) => {
      table.enum('tipo_empresa',['empresa','coleta_seletiva'])
        .defaultTo('empresa')
        .notNullable()
    })
  }

  public async down () {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('tipo_empresa')
    })
  }
}
