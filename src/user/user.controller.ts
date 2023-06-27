import { Controller,Get,Post,Param, Body,HttpCode,Header } from '@nestjs/common';
import { UserService } from './user.service';
import { UserTypeBody } from 'src/dto/user.dto';
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get(":id")
    getUserById(@Param() id:{id:string}){
        console.log("user id is ",id)
        return this.userService.getUser(id.id)
    }

    @Post("/add")
    @HttpCode(200) // change status code
    // @Header("Content-Type","application/json")
    addUser(@Body() user: UserTypeBody){
        console.log("user plain data",user)
        return this.userService.addNewUser(user)
    }
   
}
