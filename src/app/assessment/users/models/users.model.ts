export class users {
    id!:number;
    fname?:string;
    lname?:string;
    clients?:clients[];
    email?:string;
    offices?:offices[];
    contact?:string;
}
export class clients {
    id?:number;
    clientname?:string;
}
export class offices {
    id?:number;
    officename?:string;
}