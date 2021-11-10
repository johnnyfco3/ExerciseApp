const {client} = require('./mongo');
const collection = client.db(process.env.MONGO_DB).collection('goals');

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
        isPublic: false,
    },
    { 
        mon: "",
        tues: "",
        weds: "",
        thurs: "",
        fri: "",
        sat: "",
        sun: "",
        categoryM: "",
        categoryT: "",
        categoryW: "",
        categoryTH: "",
        categoryF: "",
        categorySA: "",
        categoryS: "",
        user_handle: "vp",
        isPublic: false,
    },
];

module.exports.GetAll = function GetAll() { return collection.find().toArray(); }

module.exports.Get = goal_id => collection.findOne({_id: goal_id});

module.exports.GetGoalWall = function GetGoalWall(handle) {
    return list.find(goal=> goal.user_handle == handle);
}

module.exports.Add = async function Add(goal) {
     const goal1 = await collection.insertOne(goal);
     goal_id = goal1.insertedId;

     return { ...goal };
}


module.exports.Update = async function Update(goal_id, goal) {
    const oldObj = collection.findOne({_id: goal_id});
    const newObj = { ...oldObj, ...goal }
    const result = await collection.updateOne({oldObj}, {$set: newObj}, {upsert: true});
    return result;
}

module.exports.Delete = function Delete(goal_id) {
    const goal = collection.findOne({_id: goal_id});
    const result = await collection.deleteOne({goal});
    return result;
}