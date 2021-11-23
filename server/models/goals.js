const { ObjectId } = require('bson');
const {client} = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('goals');
module.exports.collection = collection

const list = [
    { 
        mon: "Incline Bench, Flat Bench, Overhead Press, DB flat bench, DB incline press",
        tues: "Lats Pull down, Seated Rows, Pull ups, Bent over rows, Bicep curls, Shoulder raise",
        weds: "Squats, Seated quads push, Hamstring pulls",
        thurs: "Incline Bench, Flat Bench, Overhead Press, DB flat bench, DB incline press",
        fri: "Lats Pull down, Seated Rows, Pull ups, Bent over rows, Bicep curls, Shoulder raise",
        sat: "Rest",
        sun: "Rest",
        categoryM: "Chest/Triceps",
        categoryT: "Back/Biceps",
        categoryW: "Legs",
        categoryTH: "Chest/Triceps",
        categoryF: "Back/Biceps",
        categorySA: "Rest",
        categoryS: "Rest",
        user_handle: "johnnyfco",
        isPublic: false
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

module.exports.GetAll = function GetAll() { return collection.aggregate(addOwnerPipeline).toArray(); }

module.exports.GetGoalWall = function GetGoalWall(handle) {
    return collection.aggregate(addOwnerPipeline).match({ user_handle: handle }).toArray();
}

module.exports.Get = function Get(goal_id) {collection.findOne({_id: new ObjectId(goal_id) }); }

module.exports.Add = async function Add(goal) {
     const response = await collection.insertOne(goal);
     goal_id = response.insertedId;

     return { ...goal };
}


module.exports.Update = async function Update(goal_id, goal) {
    const result = await collection.findOneAndUpdate(
        {_id: new ObjectId(goal_id)},
        {$set: goal},
        {returnDocument: 'after'}
    );

    return {...result.value};
}

module.exports.Delete = async function Delete(goal_id) {
    const result = await collection.findOneAndDelete({_id: new ObjectId(goal_id)});
    return result.value;
}

module.exports.Seed = async ()=>{
    for (const x of list) {
        await this.Add(x)
    }
}