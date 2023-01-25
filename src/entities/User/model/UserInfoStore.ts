import create from 'zustand';

interface IAuthState {
    auth: boolean;

    setAuth(auth: boolean): void;

    role: string;

    setRole(role: string): void;

    userName: string;

    setUserName(userName: string): void;
}

const useUserInfoStore = create<IAuthState>((set) => ({
    auth: false,
    setAuth: (auth) => set(() => ({ auth })),

    role: '',
    setRole: (role) => set(() => ({ role })),

    userName: '',
    setUserName: (userName) => set(() => ({ userName })),
}));

export { useUserInfoStore };
