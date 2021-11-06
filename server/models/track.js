const list = [
    { 
        cBench: "",
        cIBench: "",
        cOPress: "",
        cDeadlift: "",
        gBench: "",
        gIncline: "",
        gOPress: "",
        gDeadlift: "",
        cBSquats: "",
        cSSquats: "",
        cGBridges: "",
        gBSquats: "",
        gSSquats: "",
        gGBridges: "",
        cMiles: "",
        gMiles: "",
        user_handle: "johnnyfco",
        isPublic: false,
    },
    { 
        cBench: "",
        cIBench: "",
        cOPress: "",
        cDeadlift: "",
        gBench: "",
        gIncline: "",
        gOPress: "",
        gDeadlift: "",
        cBSquats: "",
        cSSquats: "",
        cGBridges: "",
        gBSquats: "",
        gSSquats: "",
        gGBridges: "",
        cMiles: "",
        gMiles: "",
        user_handle: "vp",
        isPublic: false,
    },
];

module.exports.GetAll = function GetAll() { return list; }

module.exports.Get = function Get(track_id) { return list[track_id]; }

module.exports.Add = function Add(track) {
     list.push(track);
     return { ...track };
}

module.exports.Update = function Update(track) {
    const oldObj = list[track_id];
    const newObj = { ...oldObj, ...track }
    list[track_id] = newObj ;
    return newObj;
}

module.exports.Delete = function Delete(track_id) {
    const track = list[track_id];
    list.splice(track_id, 1);
    return track;
}