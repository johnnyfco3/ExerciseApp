import { api } from "./myFetch";

/*const list = [
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
        followers: [ 
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
        followers: [ 
            { 
                handle: 'johnnyfco', isApproved: true 
            }
        ],
    },

];
*/

export function GetAll() { return api('users'); }
export function Get(user_id) { return api('users/' + user_id); }
export function GetByHandle(handle) { return ({ ...list.find( x => x.handle == handle ), password: undefined }); }
export function Add(user) {
     return { ...user, password: undefined };
}


export function Update(user_id, user) {
    return { user_id, user };
}

export function Delete(user_id) {
    return user_id;
}