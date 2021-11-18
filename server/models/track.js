const { ObjectId } = require('bson');
const {client} = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('track');
module.exports.collection = collection

const list = [
    { 
        cBench: "225",
        cIBench: "185",
        cOPress: "95",
        cDeadlift: "",
        gBench: "",
        gIncline: "225",
        gOPress: "",
        gDeadlift: "",
        cBSquats: "225",
        cSSquats: "",
        cGBridges: "",
        gBSquats: "",
        gSSquats: "",
        gGBridges: "",
        cMiles: "",
        gMiles: "",
        user_handle: "johnnyfco",
        isPublic: false,
    }
];

const addOwnerPipeline = [
    {"$lookup" : {
        from: "users",
        localField: 'user_handle',
        foreignField: 'handle',
        as: 'user',
    }},
    {$unwind: "$user"},
    { $project: { "owner.password": 0}}
];

module.exports.GetAll = function GetAll() { return collection.find().toArray(); }

module.exports.Get = track_id => collection.findOne({_id: new ObjectId(track_id) });

module.exports.GetTrackWall = function GetTrackWall(handle) {
    return collection.aggregate(addOwnerPipeline).match({ user_handle: handle }).toArray;
}

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

module.exports.Seed = async ()=>{
    for (const x of list) {
        await this.Add(x)
    }
}