import { api } from "./myFetch";

export function Follow(follower, followee) {
    return api('friends/' + follower, followee)
}

export function UnFollow(follower, followee) {
    return api('friends/' + follower, followee)  
}

export function Approve(follower, followee, shouldApprove) {
    return api('friends/' + follower, followee, shouldApprove) 
}