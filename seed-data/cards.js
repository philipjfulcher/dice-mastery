var pouchdb = require('pouchdb');
var cardsData = require('./cards.json');

var db = new pouchdb('http://162.243.166.217:5984/cards');

db.bulkDocs(cardsData)
.then(() => {
    console.info('Data seeded');
})
.catch((err) => console.error(err));
