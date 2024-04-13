export interface Usuario {
    id: number;
    username:string;
    password?: string;
    roles?: string;
    permissions?: string;
    active?: string;
    email?:string;
    
}
