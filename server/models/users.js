const bcrypt = require('bcrypt');
const {ObjectId} = require('bson');
const {client} = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('users');
module.exports.collection = collection;

const list = [
    { 
        firstName: 'Johnny',
        lastName: 'Tejada',
        age: '21',
        height: '6ft 2in',
        weight: '195',
        handle: 'johnnyfco',
        pic: 'https://www.igeeksblog.com/wp-content/uploads/2021/03/Can-you-check-who-viewed-your-Instagram-profile.jpg',
        password: 'yo',
        isAdmin: true,
        emails: [
            "tejadaj6@newpaltz.edu"
        ],
        following: [ 
            { 
                handle: 'vp', isApproved: true 
            }
        ],
        get name(){ return this.firstName + ' ' + this.lastName },
    },
    { 
        firstName: 'Kamala',
        lastName: 'Harris',
        age: '20',
        height: '5ft 4in',
        weight: '135',
        handle: 'vp',
        pic: 'https://www.finetoshine.com/wp-content/uploads/2020/07/instagram-profile-picture-aesthetic.jpg',
        password: 'Her',
        isAdmin: true,
        emails: [
            "vp@wh.com"
        ],
        following: [ 
            { 
                handle: 'johnnyfco', isApproved: true 
            }
        ],
    }
];

module.exports.GetAll = function GetAll() { return collection.find().toArray(); }

module.exports.Get =  user_id => collection.findOne({_id: new ObjectId(user_id)});

module.exports.GetByHandle = (handle) => collection.findOne({handle}).then(x=> ({ ...x, password: undefined}));

module.exports.Add = async function Add(user) {
    if(!user.firstName){
        return Promise.reject( { code: 422, msg: "First Name is required" })
    }

    const hash = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS)
    
    user.password = hash;

    const user2 = await collection.insertOne(user);
    user._id = user2.insertedId;

    return { ...user, password: undefined };
}

module.exports.Update = async function Update(user_id, user) {

    const result = await collection.findOneAndUpdate(
        {_id: new ObjectId(user_id)},
        {$set: user},
        {returnDocument: 'after'}
    );

    return { ...result.value, password: undefined };
}

module.exports.Delete = async function Delete(user_id) {
    const result = await collection.findOneAndDelete({_id: new ObjectId(user_id)});
    return result.value;
}

module.exports.Login = async function Login(handle, password){
    console.log({ handle, password})
    const user = await collection.findOne({handle});
    if(!user) return Promise.reject( { code: 401, msg: "Sorry there is no user with that handle" });

    const result = await bcrypt.compare(password, user.password)
        
    if( ! result ){
        throw { code: 401, msg: "Wrong Password" };
    }

    const data = { ...user, password: undefined };

    return { user: data };
}

module.exports.Seed = async ()=>{
    for (const x of list) {
        await module.exports.Add(x)
    }
}