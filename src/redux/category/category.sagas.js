import {put,takeLatest} from 'redux-saga/effects';
import {categoryLists} from './category.actions';
import api from '../../api';
import {CATEGORY_REQUEST } from './category.types';
export  function* categoryListRequest(){
    const categories = yield api.category;
    yield put(categoryLists(categories));
}

export function* category(){

    yield takeLatest(CATEGORY_REQUEST,categoryListRequest);
}