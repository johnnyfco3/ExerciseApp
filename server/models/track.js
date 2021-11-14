const {client} = require('./mongo');
const { ObjectId } = require('bson');

const collection = client.db(process.env.MONGO_DB).collection('track');
module.exports.collection = collection

const list = [
    { 
        cBench: "",
        cIBench: "",
        cOPress: "",
        cDeadlift: "",
        gBench: "",
        gIncline: "",
        gOPress: "",
        gDeadlift: "",
        cBSquats: "",
        cSSquats: "",
        cGBridges: "",
        gBSquats: "",
        gSSquats: "",
        gGBridges: "",
        cMiles: "",
        gMiles: "",
        user_handle: "johnnyfco",
        isPublic: false,
    },
    { 
        cBench: "",
        cIBench: "",
        cOPress: "",
        cDeadlift: "",
        gBench: "",
        gIncline: "",
        gOPress: "",
        gDeadlift: "",
        cBSquats: "",
        cSSquats: "",
        cGBridges: "",
        gBSquats: "",
        gSSquats: "",
        gGBridges: "",
        cMiles: "",
        gMiles: "",
        user_handle: "vp",
        isPublic: false,
    },
];

module.exports.GetAll = function GetAll() { return collection.find().toArray(); }

module.exports.Get = track_id => collection.findOne({_id: new ObjectId(track_id) });

module.exports.Add = function Add(track) {
    const response = await collection.insertOne(track);
    track_id = response.insertedId;
    return { ...track };
}

module.exports.Update = function Update(track_id, track) {
    const result = await collection.findOneAndUpdate(
        {_id: new ObjectId(track_id)},
        {$set: track},
        {returnDocument: 'after'}
    );

    return result.value;
}

module.exports.Delete = function Delete(track_id) {
    const result = await collection.findOneAndDelete({_id: new ObjectId(track_id)});
    return result.value;
}