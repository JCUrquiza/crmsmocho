import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    celular: string;
    correo: string;
    titulo: string;
    puestoNombre: string;
    sucursalNombre: string;
}

const initialState: UserState = {
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    celular: '',
    correo: '',
    titulo: '',
    puestoNombre: '',
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
