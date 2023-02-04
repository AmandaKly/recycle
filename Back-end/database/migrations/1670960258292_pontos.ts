import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pontos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
    
      table
      .integer('user_id')
      .unsigned()
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      table.string('nome',150).notNullable()
      table.bigint('cep').notNullable()
      table.string('endereco_ponto', 500).notNullable()
      table.string('dia_semana', 100)
      table.string('horario')
      table.string('descricao', 400)

      
      
      // table.string('link',1000).notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.datetime('created_at')
      table.datetime('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

