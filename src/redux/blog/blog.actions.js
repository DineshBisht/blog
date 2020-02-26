import { BLOG_LIST_START, BLOG_LIST_SUCCESS } from "./blog.types"

export const blogListRequest = ()=>({
    type:BLOG_LIST_START
});

export const blogListSuccess = (postLists)=>({
    type:BLOG_LIST_SUCCESS,
    postLists
});