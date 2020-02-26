import {CATEGORY_LIST} from './category.types';
export const categoryLists = (state=[],action)=>{
    
    switch(action.type){
        case CATEGORY_LIST:
            return action.categoryLists
            
        default:
            return state ;

    }
}

