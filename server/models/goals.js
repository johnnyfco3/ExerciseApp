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

module.exports.GetAll = function GetAll() { return list; }

module.exports.Get = function Get(goal_id) { return list[goal_id]; }

module.exports.GetGoalWall = function GetGoalWall(handle) {
    return list.find(goal=> goal.user_handle == handle);
}

module.exports.Add = function Add(goal) {
     list.push(goal);
     return { ...goal };
}


module.exports.Update = function Update(goal_id, goal) {
    const oldObj = list[goal_id];
    const newObj = { ...oldObj, ...goal }
    list[goal_id] = newObj ;
    return newObj;
}

module.exports.Delete = function Delete(goal_id) {
    const goal = list[goal_id];
    list.splice(goal_id, 1);
    return goal;
}