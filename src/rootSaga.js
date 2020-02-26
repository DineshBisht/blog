import { all,call } from "redux-saga/effects";
import { category } from "./redux/category/category.sagas";
import {blog} from './redux/blog/blog.sagas';
export function* rootSaga(){
    yield all([call(category),call(blog)]);
}