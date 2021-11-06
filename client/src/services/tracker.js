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

export function GetAll() { return list; }

export function Get(track_id) { return list[track_id]; }

export function GetGoalWall(handle) {
    return list.find(track=> track.user_handle == handle);
}
export function Add(track) {
     list.push(track);
     return { ...track };
}

export function Update(track) {
    const oldObj = list[track_id];
    const newObj = { ...oldObj, ...track }
    list[track_id] = newObj ;
    return newObj;
}

export function Delete(track_id) {
    const track = list[track_id];
    list.splice(track_id, 1);
    return track;
}