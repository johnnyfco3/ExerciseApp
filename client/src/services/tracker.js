import { api } from "./myFetch";


export function GetAll() { return api('track'); }

export function Get(track_id) { return api('track/' + track_id); }

export function GetTrackWall(handle) {
    return api('track/wall/' + handle);
}

export function Add(track) {
     return { ...track };
}

export function Update(track_id, track) {
    return track, track_id;
}

export function Delete(track_id) {
    return api('track/' + track_id, {}, "DELETE");
}