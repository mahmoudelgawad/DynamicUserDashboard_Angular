import { User } from "./user-model";

export interface ResponseObject{
    page:number;
    per_page:number;
    total:number;
    data:User[];
}