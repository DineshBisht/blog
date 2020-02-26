import { combineReducers }   from 'redux';
import {categoryLists} from './redux/category/category.reducers';
import {blogLists} from './redux/blog/blog.reducers';
export default combineReducers({
    categoryLists,
    blogLists
})