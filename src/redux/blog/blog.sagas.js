import {takeLatest,put} from 'redux-saga/effects';
import { BLOG_LIST_START } from './blog.types';
import api from '../../api/';
import { blogListSuccess } from './blog.actions';
export function* blogListStart(){
    const postLists = yield api.postLists;
    yield put(blogListSuccess(postLists));
}

export function* blog(){
    yield takeLatest(BLOG_LIST_START,blogListStart);
}