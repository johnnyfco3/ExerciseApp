import { api } from "./myFetch";

/*const list = [
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
*/

export function GetAll() {
    return api('posts');
}

export function GetWall(handle) {
    return api('posts/wall/' + handle);
}

export function GetFeed(handle) { 
    return api('posts/feed/' + handle);
}

export function Get(post_id) { return api('posts/' + post_id); }
export function Add(post) {
     return { ...post };
}
export function Update(post_id, post) {
    return {post_id, post};
}
export function Delete(post_id) {
    return api('posts/' + post_id, {}, "DELETE");
} 