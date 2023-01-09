import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'material_ponto'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('ponto_id')
        .unsigned()
        .references('pontos.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.integer('material_id')
        .unsigned()
        .references('materials.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.unique(['ponto_id','material_id'])
      /**
      * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
      * table.primary(['pontos_id','materiais_id'])
      */
      table.datetime('created_at')
      table.datetime('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
