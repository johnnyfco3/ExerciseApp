import { GetByHandle } from "./users";

const list = [
    { 
        src: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/01/man-weight-lifting-training-workout-gym.jpg?quality=82&strip=1&resize=640%2C360",
        alt: "Placeholder image",
        caption: "Lorem Ipsom",
        time: Date(),
        user_handle: "@johnnyfco",
        category: "Back/Biceps",
        isPublic: true,
    },
    { 
        src: "https://post.healthline.com/wp-content/uploads/2019/10/Female_Male_Rope_Workout_1200x628-facebook.jpg",
        alt: "Placeholder image",
        caption: "jdkjfkjfkf",
        time: Date(),
        user_handle: "@johnnyfco",
        category: "Chest/Triceps",
        isPublic: true,
    },
];

const listWithOwner = ()=> list.map(x => ({ 
    ...x, 
    user: GetByHandle(x.user_handle) 
}) );

export function GetAll() {
    return listWithOwner();
}

export function GetWall(handle) {
    return listWithOwner().filter(post=> post.user_handle == handle);
}

export function GetFeed(handle) { return listWithOwner()
    .filter(post=> GetByHandle(handle).following.some(f=> f.handle == post.user_handle && f.isApproved) );     }


export function Get(post_id) { return list[post_id]; }
export function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
     list.push(post);
     return { ...post };
}
export function Update(post_id, post) {
    const oldObj = list[post_id];
    const newObj = { ...oldObj, ...post }
    list[post_id] = newObj ;
    return newObj;
}
export function Delete(post_id) {
    const post = list[post_id];
    list.splice(post_id, 1);
    return post;
} 