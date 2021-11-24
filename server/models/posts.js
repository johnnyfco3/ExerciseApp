const Users = require( "./users");
const { ObjectId } = require('bson');
const {client} = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('posts');
module.exports.collection = collection

const list = [
    { 
        src: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/01/man-weight-lifting-training-workout-gym.jpg?quality=82&strip=1&resize=640%2C360",
        alt: "Placeholder image",
        caption: "Lorem Ipsom",
        time: Date(),
        user_handle: "johnnyfco",
        category: "Back/Biceps",
        isPublic: true
    },
    { 
        src: "https://post.healthline.com/wp-content/uploads/2019/10/Female_Male_Rope_Workout_1200x628-facebook.jpg",
        alt: "Placeholder image",
        caption: "jdkjfkjfkf",
        time: Date(),
        user_handle: "johnnyfco",
        category: "Chest/Triceps",
        isPublic: true
    },
    { 
        src: "https://post.healthline.com/wp-content/uploads/2019/10/Female_Male_Rope_Workout_1200x628-facebook.jpg",
        alt: "Placeholder image",
        caption: "kgjjfhfkfhfhgfhghggh",
        time: Date(),
        user_handle: "vp",
        category: "Legs",
        isPublic: true
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

const addOwnerPipeline2 = [
    {"$lookup" : {
        from: "users",
        localField: 'user_handle',
        foreignField: 'handle',
        as: 'user',
    }},
    {$unwind: "$user"},
    { $project: { "owner.password": 0}}
];

module.exports.GetAll = function GetAll() {
    return collection.aggregate(addOwnerPipeline).toArray();
}

module.exports.GetFeed_ = function GetFeed_(handle) {
    //  The "SQL" way to do things
    const query = Users.collection.aggregate([
        {$match: { handle }},
        {"$lookup" : {
            from: "posts",
            localField: 'following.handle',
            foreignField: 'user_handle',
            as: 'posts'
        }},
        {$unwind: '$posts'},
        {$replaceRoot: { newRoot: "$posts" } },
    ].concat(addOwnerPipeline));
    return query.toArray();

}

module.exports.GetFeed = async function (handle) {
    //  The "MongoDB" way to do things. (Should test with a large `following` array)
    const user = await Users.collection.findOne({ handle });
    if(!user){
        throw { code: 404, msg: 'No such user'};
    }
    const targets = user.following.filter(x=> x.isApproved).map(x=> x.handle).concat(handle)
    const query = collection.aggregate([
        {$match: { user_handle: {$in: targets} } },
     ].concat(addOwnerPipeline));
    return query.toArray();
}

module.exports.GetWall = function GetWall(handle) {
    return collection.aggregate(addOwnerPipeline2).match({ user_handle: handle }).toArray();
}

module.exports.Get = function Get(post_id) { return collection.findOne({_id: new ObjectId(post_id) }); }

module.exports.Add = async function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
    post.time = Date();
    const response = await collection.insertOne(post);
    post_id = response.insertedId;
    return { ...post };
}

module.exports.Update = async function Update(post_id, post) {
    const result = await collection.findOneAndUpdate(
        {_id: new ObjectId(post_id)},
        {$set: post},
        {returnDocument: 'after'}
    );

    return result.value;
}

module.exports.Delete = async function Delete(post_id) {
    const result = await collection.findOneAndDelete({_id: new ObjectId(post_id)});
    return result.value;
} 

module.exports.Search = q => collection.find({ caption: new RegExp(q,"i") }).toArray();

module.exports.Seed = async ()=>{
    for (const x of list) {
        await this.Add(x)
    }
}