import { api } from "./myFetch";

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
    return api('goals/' + goal_id, {}, "DELETE");
}