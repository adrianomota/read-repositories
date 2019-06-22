import { all, takeLatest } from 'redux-saga/effects';

import { addRepository } from './repositories';

import { Types as RepositoryTypes } from '../ducks/repositories';

export default function* rootSaga() {
  yield all([takeLatest(RepositoryTypes.ADD_REQUEST, addRepository)]);
}
