migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3sp4aaw33lkswn")

  // remove
  collection.schema.removeField("govegmhy")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3sp4aaw33lkswn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "govegmhy",
    "name": "create",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
