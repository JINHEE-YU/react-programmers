import { PayloadAction } from '@reduxjs/toolkit';
// import { Repo } from 'types/Repo';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
// import { QuestionFormSaga } from './saga';
import { QuestionFormState, RepoErrorType } from './types';

export const initialState: QuestionFormState = {
  username: 'react-boilerplate',
  // repositories: [],
  loading: false,
  error: null,
};

// const slice = createSlice({
//   name: 'QuestionForm',
//   initialState,
//   reducers: {
//     changeUsername(state, action: PayloadAction<string>) {
//       state.username = action.payload;
//     },
//     loadRepos(state) {
//       state.loading = true;
//       state.error = null;
//       state.repositories = [];
//     },
//     reposLoaded(state, action: PayloadAction<Repo[]>) {
//       const repos = action.payload;
//       state.repositories = repos;
//       state.loading = false;
//     },
//     repoError(state, action: PayloadAction<RepoErrorType>) {
//       state.error = action.payload;
//       state.loading = false;
//     },
//   },
// });

// export const { actions: QuestionFormActions, reducer } = slice;

// export const useQuestionFormSlice = () => {
//   useInjectReducer({ key: slice.name, reducer: slice.reducer });
//   useInjectSaga({ key: slice.name, saga: QuestionFormSaga });
//   return { actions: slice.actions };
// };
