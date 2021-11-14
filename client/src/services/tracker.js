import { api } from "./myFetch";

/*const list = [
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
*/

export function GetAll() { return api('track'); }

export function Get(track_id) { return api('track/' + track_id); }

export function Add(track) {
     return { ...track };
}

export function Update(track_id, track) {
    return track, track_id;
}

export function Delete(track_id) {
    return track_id;
}