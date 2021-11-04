const bcrypt = require('bcrypt');

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
    },

];

module.exports.GetAll = function GetAll() { return list; }

module.exports.Get =  user_id => list[user_id];

module.exports.GetByHandle = function GetByHandle(handle) { return ({ ...list.find( x => x.handle == handle ), password: undefined }); } 

module.exports.Add = function Add(user) {
    if(!user.firstName){
        return Promise.reject( { code: 422, msg: "First Name is required" })
    }

    bcrypt.hash(user.password, process.env.SALT_ROUNDS)
    .then(hash =>{
        user.password = hash;

        list.push(user);
        return { ...user, password: undefined };
    });
}

module.exports.Update = function Update(user_id, user) {
    const oldObj = list[user_id];
    if(user.firstName){
        oldObj.firstName = user.firstName;
    }
    if(user.lastName){
        oldObj.lastName = user.lastName;
    }
    if(user.handle){
        oldObj.handle = user.handle;
    }
    if(user.pic){
        oldObj.pic = user.pic;
    }
    if(user.age){
        oldObj.age = user.age;
    }
    if(user.height){
        oldObj.height = user.height;
    }
    if(user.weight){
        oldObj.weight = user.weight;
    }
    //list[user_id] = newObj ;
    return { ...oldObj, password: undefined };
}

module.exports.Delete = function Delete(user_id) {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}

module.exports.Login = function Login(handle, password){
    console.log({ handle, password})
    const user = list.find(x=> x.handle == handle);
    if(!user) return Promise.reject( { code: 401, msg: "Sorry there is no user with that handle" });

    return bcrypt.compare(password, user.password)
        .then(result =>{
            if( ! result ){
                throw { code: 401, msg: "Wrong Password" };
            }

            const data = { ...user, password: undefined };

            return { user: data };
        });
}