'use strict'

const Schema = use('Schema')

class SpacRentSchema extends Schema {
  up () {
    this.create('spac_rents', (table) => {
      table.increments()
      table.string("customerName");
      table.string("address");
      table.string("visibility");
      table.text("discription");
      table.string('contact_Number');
      table.string("location");
      table.timestamps()
    })
  }

  down () {
    this.drop('spac_rents')
  }
}

module.exports = SpacRentSchema
