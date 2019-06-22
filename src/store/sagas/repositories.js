import { call, put, select } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as RepositoriesActions } from '../ducks/repositories';

export function* addRepository(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);
    const isRepoDuplicate = yield select(state => state.repositories.data.find(repo => repo.id === data.id));
    if (isRepoDuplicate) {
      yield put(RepositoriesActions.addRepositoryFailure('Repository already exist'));
    } else {
      yield put(RepositoriesActions.addRepositorySuccess(data));
    }
  } catch (err) {
    yield put(RepositoriesActions.addRepositoryFailure('Error in added repository'));
  }
}
