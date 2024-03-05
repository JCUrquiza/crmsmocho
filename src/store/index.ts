import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebar/sidebarSlice';

export const store = configureStore({
    reducer: {
        sedebar: sidebarReducer,
    }
});

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer type: { posts: PostsState, comments: CommentState, users: UsersState }
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
