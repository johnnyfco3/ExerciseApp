const {client} = require('./mongo');
const collection = client.db(process.env.MONGO_DB).collection('track');

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

module.exports.Get = track_id => collection.findOne({_id: track_id});

module.exports.Add = function Add(track) {
    const track1 = await collection.insertOne(track);
    track_id = track1.insertedId;

    return { ...track };
}

module.exports.Update = function Update(track) {
    const oldObj = collection.findOne({_id: track_id});
    const newObj = { ...oldObj, ...track };
    const result = await collection.updateOne({oldObj}, {$set: newObj}, {upsert: true});
    return result;
}

module.exports.Delete = function Delete(track_id) {
    const track = collection.findOne({_id: track_id});
    const result = await collection.deleteOne({track});
    return result;
}