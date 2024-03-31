import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
    tickets: boolean
}

const initialState: ModalState = {
    tickets: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalTickets(state) {
            state.tickets = true;
        },
        closeModalTickets(state) {
            state.tickets = false;
        },
        resetModalTickets(state, action: PayloadAction<boolean>) {
            state.tickets = action.payload
        }
    }
});

export const {openModalTickets, closeModalTickets, resetModalTickets} = modalSlice.actions;

export default modalSlice.reducer;
