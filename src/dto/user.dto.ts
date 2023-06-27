import {IsEmail,IsNumber,IsString} from "class-validator"
export class UserTypeBody {

    @IsString()
    name: string;

    @IsNumber()
    age: number;
    
    @IsEmail()
    email:string;
}