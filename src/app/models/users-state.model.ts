import { User } from "./user-model";

export interface UsersState{
    isLoading:boolean;
    error:string | null;
    currentPage:number;
    userPerPage:number;
    totalUsers:number;
    users:User[];
    currentUserId:number;
}