import { atom } from "recoil";


type AuthModalState ={
    isOpen: boolean;
    type: 'login' | 'forgotPassword';
};

const initialAuthModalState: AuthModalState = {
    isOpen: false,
    type: 'login',
};

export const AuthModalState = atom<AuthModalState>({
    key: 'authModalState',
    default: initialAuthModalState,
})