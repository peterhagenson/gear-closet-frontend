type RegisterUser = {
    email: string; 
    password: string;
    firstName: string;
    lastName: string;
}

type LoginUser = {  
    email: string;
    password: string;
}

export type {RegisterUser, LoginUser};
