import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SideState {
    sidebar: boolean
}

const initialState: SideState = {
    sidebar:  false,
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        openSidebar(state) {
            state.sidebar = true;
        },
        closeSidebar(state) {
            state.sidebar = false;
        },
        resetSidebar(state, action: PayloadAction<boolean>) {
            state.sidebar = action.payload
        }
    }
});

export const {openSidebar, closeSidebar, resetSidebar} = sidebarSlice.actions;

export default sidebarSlice.reducer;