import {CATEGORY_LIST, CATEGORY_REQUEST} from './category.types';
export const categoryLists = (categoryLists)=>({
   type:CATEGORY_LIST,
   categoryLists
})

export const categoryRequest = ()=>({
   type:CATEGORY_REQUEST
})

