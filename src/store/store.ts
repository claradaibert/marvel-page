import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/slice";
import themeSlice from "./theme/slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { store };
