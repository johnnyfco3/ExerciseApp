const { GetByHandle } = require("./users");
const {client} = require('./mongo');
const collection = client.db(process.env.MONGO_DB).collection('posts');

const list = [
    { 
        src: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/01/man-weight-lifting-training-workout-gym.jpg?quality=82&strip=1&resize=640%2C360",
        alt: "Placeholder image",
        caption: "Lorem Ipsom",
        time: Date(),
        user_handle: "johnnyfco",
        category: "Back/Biceps",
        isPublic: true,
    },
    { 
        src: "https://post.healthline.com/wp-content/uploads/2019/10/Female_Male_Rope_Workout_1200x628-facebook.jpg",
        alt: "Placeholder image",
        caption: "jdkjfkjfkf",
        time: Date(),
        user_handle: "johnnyfco",
        category: "Chest/Triceps",
        isPublic: true,
    },
    { 
        src: "https://post.healthline.com/wp-content/uploads/2019/10/Female_Male_Rope_Workout_1200x628-facebook.jpg",
        alt: "Placeholder image",
        caption: "kgjjfhfkfhfhgfhghggh",
        time: Date(),
        user_handle: "vp",
        category: "Legs",
        isPublic: true,
    },
];

const listWithOwner = ()=> list.map(x => ({ 
    ...x, 
    user: GetByHandle(x.user_handle) 
}) );

module.exports.GetAll = function GetAll() {
    return collection.find().toArray();
}

module.exports.GetWall = function GetWall(handle) {
    return listWithOwner().filter(post=> post.user_handle == handle);
}

module.exports.GetFeed = function GetFeed(handle) { return listWithOwner()
    .filter(post=> GetByHandle(handle).following.some(f=> f.handle == post.user_handle && f.isApproved) );     }


module.exports.Get = post_id => collection.findOne({_id: post_id});

module.exports.Add = async function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
    post.time = Date();
    const post1 = await collection.insertOne(post);
    post_id = post1.insertedId;

    return { ...post };
}

module.exports.Update = async function Update(post_id, post) {
    const oldObj = collection.findOne({_id: post_id});
    const newObj = { ...oldObj, ...post };
    const result = await collection.updateOne({oldObj}, {$set: newObj}, {upsert: true});
    return result;
}

module.exports.Delete = async function Delete(post_id) {
    const post = collection.findOne({_id: post_id});
    const result = await collection.deleteOne({post});
    return result;
} 

module.exports.Search = q => list.filter(x => x.caption.includes(q));