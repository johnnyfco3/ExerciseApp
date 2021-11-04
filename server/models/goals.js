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
        isPublic: true,
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
        isPublic: true,
    },
];

module.exports.GetAll = function GetAll() { return list; }

module.exports.Get = function Get(goal_id) { return list[goal_id]; }

module.exports.GetGoalWall = function GetGoalWall(handle) {
    return list.find(goal=> goal.user_handle == handle);
}

module.exports.Add = function Add(goal) {
    if(!goal.mon){
        throw { code: 422, msg: "Monday note is required" }
    }
    if(!goal.tues){
        throw { code: 422, msg: "Tuesday note is required" }
    }
    if(!goal.weds){
        throw { code: 422, msg: "Wednesday note is required" }
    }
    if(!goal.thurs){
        throw { code: 422, msg: "Thursday note is required" }
    }
    if(!goal.fri){
        throw { code: 422, msg: "Friday note is required" }
    }
    if(!goal.sat){
        throw { code: 422, msg: "Saturday note is required" }
    }
    if(!goal.sun){
        throw { code: 422, msg: "Sunday note is required" }
    }
    if(!goal.categoryM){
        throw { code: 422, msg: "Monday category is required" }
    }
    if(!goal.categoryT){
        throw { code: 422, msg: "Tuesday category is required" }
    }
    if(!goal.categoryW){
        throw { code: 422, msg: "Wednesday category is required" }
    }
    if(!goal.categoryTH){
        throw { code: 422, msg: "Thursday category is required" }
    }
    if(!goal.categoryF){
        throw { code: 422, msg: "Friday category is required" }
    }
    if(!goal.categorySA){
        throw { code: 422, msg: "Saturday category is required" }
    }
    if(!goal.categoryS){
        throw { code: 422, msg: "Sunday category is required" }
    }
     list.push(goal);
     return { ...goal };
}


module.exports.Update = function Update(goal_id, goal) {
    const oldObj = list[goal_id];
    if(goal.mon){
        oldObj.mon = goal.mon;
    }
    if(goal.tues){
        oldObj.tues = goal.tues;
    }
    if(goal.weds){
        oldObj.weds = goal.weds;
    }
    if(goal.thurs){
        oldObj.thurs = goal.thurs;
    }
    if(goal.fri){
        oldObj.fri = goal.fri;
    }
    if(goal.sat){
        oldObj.sat = goal.sat;
    }
    if(goal.sun){
        oldObj.sun = goal.sun;
    }
    if(goal.categoryM){
        oldObj.categoryM = goal.categoryM;
    }
    if(goal.categoryT){
        oldObj.categoryT = goal.categoryT;
    }
    if(goal.categoryW){
        oldObj.categoryW = goal.categoryW;
    }
    if(goal.categoryTH){
        oldObj.categoryTH = goal.categoryTH;
    }
    if(goal.categoryF){
        oldObj.categoryF = goal.categoryF;
    }
    if(goal.categorySA){
        oldObj.categorySA = goal.categorySA;
    }
    if(goal.categoryS){
        oldObj.categoryS = goal.categoryS;
    }
    return { ...oldObj };
}

module.exports.Delete = function Delete(goal_id) {
    const goal = list[goal_id];
    list.splice(goal_id, 1);
    return goal;
}