'use strict'

const Schema = use('Schema')

class TagSchema extends Schema {
  up () {
    this.create('tags', (table) => {
      table.increments()
      table.string('name', 40)
      table.timestamps()
    })

    this.create('article_tag', (table) => {
      table.increments()
      table.integer('article_id').unsigned().references('id').inTable('articles').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamps()

    })
  }

  down () {
    this.drop('aeticle_tag')
    this.drop('tags')
  }
}

module.exports = TagSchema
