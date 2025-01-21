/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1840250792")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3306545694",
    "hidden": false,
    "id": "relation1844683459",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "orderedTickets",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1840250792")

  // remove field
  collection.fields.removeById("relation1844683459")

  return app.save(collection)
})
