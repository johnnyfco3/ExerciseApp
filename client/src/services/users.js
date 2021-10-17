const list = [
    { 
        firstName: 'Johnny',
        lastName: 'Tejada',
        handle: '@johnnyfco',
        pic: '',
        password: 'yo',
        isAdmin: true,
        emails: [
            "tejadaj6@newpaltz.edu"
        ],
        following: [ { handle: '@vp', isApproved: true }],
        get name(){ return this.firstName + ' ' + this.lastName },
    },
    { 
        firstName: 'Kamala',
        lastName: 'Harris',
        handle: '@vp',
        pic: 'data:image/jpeg;base64,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',
        password: 'Her',
        isAdmin: true,
        emails: [
            "vp@wh.com"
        ],
    },

];

export function GetAll() { return list; }
export function Get(user_id) { return list[user_id]; }
export function GetByHandle(handle) { return ({ ...list.find( x => x.handle == handle ), password: undefined }); } 
export function Add(user) {
    if(!user.firstName){
        throw { code: 422, msg: "First Name is required" }
    }
     list.push(user);
     return { ...user, password: undefined };
}


export function Update(user_id, user) {
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
    //list[user_id] = newObj ;
    return { ...oldObj, password: undefined };
}

export function Delete(user_id) {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}

export function Login(handle, password){
    console.log({ handle, password})
    const user = list.find(x=> x.handle == handle);
    if(!user) throw { code: 401, msg: "Sorry there is no user with that handle" };

    if( ! (password == user.password) ){
        throw { code: 401, msg: "Wrong Password" };
    }

    const data = { ...user, password: undefined };

    return { user: data };
}