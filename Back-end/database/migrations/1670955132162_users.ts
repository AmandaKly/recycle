import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome',150).notNullable()
      table.string('login',60).notNullable().unique()
      table.string('senha',1000).notNullable()
      table.bigint('CNPJ').notNullable().unique()
      table.string('email', 1000).notNullable()
      table.bigint('telefone').notNullable()

      



      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.datetime('created_at')
      table.datetime('updated_at')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
