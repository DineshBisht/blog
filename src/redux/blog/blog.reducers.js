import { BLOG_LIST_SUCCESS } from "./blog.types";

export const blogLists = (state=[],action)=>{
    switch(action.type) {
        case BLOG_LIST_SUCCESS:
            return action.postLists;
        default:
            return state
    }   
}
