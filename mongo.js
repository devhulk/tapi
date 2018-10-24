const mongodb = require('mongodb');


let seedData = [
{
    id: '1',
    buyer: 'Debby Boone',
    seller: 'You Light Up My Life',
    price: '10'
},
{
    id: '2',
    buyer: 'Debby Boone',
    seller: 'You Light Up My Life',
    price: '10'
},
{
    id: '3',
    buyer: 'Debby Boone',
    seller: 'You Light Up My Life',
    price: '10'
}
];


let uri = 'mongodb://devhulk:change01@ds141043.mlab.com:41043/p2pdb';

mongodb.MongoClient.connect(uri, function(err, client) {
    if(err) throw err;

    let db = client.db('p2pdb')
    let songs = db.collection('transactions');

    songs.insert(seedData, function(err, result) {
        if(err) throw err;
    })
    client.close(function(err) {
        if(err) throw err;
    })
})

