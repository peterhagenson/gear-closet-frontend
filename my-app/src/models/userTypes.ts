type RegisterUser = {
    email: string; 
    password: string;
    username: string;
}

type LoginUser = {  
    username: string;
    password: string;
}

type LoggedOnUser = {
    username: string;
    accessToken: string;
}

type AccessToken = {
    accessToken: string;
}

type Users = {
    users: Users[];
}

export type {RegisterUser, LoginUser, AccessToken, LoggedOnUser, Users};
