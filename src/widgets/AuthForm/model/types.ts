export interface IAuthFormProps {
    title: string;
}

export interface IAuthFormValues {
    email?: string;
    userName: string;
    password: string;
    repeatPassword?: string;
}