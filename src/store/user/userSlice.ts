import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    id: number;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    celular: string;
    correo: string;
    titulo: string;
    puestoNombre: string;
    sucursalId: number;
    sucursalNombre: string;
}

const initialState: UserState = {
    id: 0,
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    celular: '',
    correo: '',
    titulo: '',
    puestoNombre: '',
    sucursalId: 0,
    sucursalNombre: ''
}

const userSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        saveDataUser(state, action: PayloadAction<UserState>) {
            return {
                ...state,
                ...action.payload
            }
        },
        getDataUser(state) {
            return state;
        }
    }
});

export const { saveDataUser, getDataUser } = userSlice.actions;

export default userSlice.reducer;
