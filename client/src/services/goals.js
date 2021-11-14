import { api } from "./myFetch";

/*const list = [
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
*/
export function GetAll() { return api('goals'); }

export function Get(goal_id) { return api('goals/' + goal_id); }

export function GetGoalWall(handle) {
    return api('goals/wall/' + handle);
}
export function Add(goal) {
     return { ...goal };
}


export function Update(goal_id, goal) {
    return {goal_id, goal};
}

export function Delete(goal_id) {
    return goal_id;
}