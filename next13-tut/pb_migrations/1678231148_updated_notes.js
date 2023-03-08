migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3sp4aaw33lkswn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5nzrdky5",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3sp4aaw33lkswn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5nzrdky5",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
