import { Controller, Get, Post, Delete, Param, Req, Query, ConsoleLogger } from "@nestjs/common"
import { Request } from "express"
const Users = [{ id: 2, name: "sanju", age: 21 }]
type userType = {
    name: string,
    id: number,
    age: number
}

const getRandomId = () => {
    return Math.floor(Math.random() * 1000)
}


@Controller("user")
export class AppController {

    @Get(":id")
    getUser(@Param() id: { id: string }): string | userType {
        console.log(id)
        const findUser: userType[] = Users.filter(item => item.id === +id.id)
        console.log(findUser)
        return findUser[0] ? findUser[0] : "user not exist with this Id"
    }
    @Get("/a/:id")
    getUserById(@Req() req: Request): userType | string {
        const paramId = req.params.id
        console.log("params data", paramId)
        const findUser = Users.filter(item => item.id === +paramId)
        return findUser[0] ? findUser[0] : "User is not Exists with this id"
    }

    @Post("/add")
    addUser(@Req() req: Request) {
        const userData = req.body
        console.log(req);
        console.log(userData)
        if (!userData.name || !userData.age) {
            return "something missing"
        }
        const id = getRandomId()
        Users.push({ id: id, name: userData.name, age: userData.age })
        return `added successfull with id ${id}`
    }

    // @Get(":id")
    // getUser(@Param() id:string):string{
    //     console.log(id)
    //     return "this is Home pag e"
    // }
    // @Post()
    // addUser(@Req() request:Request):string{
    //     console.log(request)
    //     return "this is post method"
    // }

    // @Get("/a/:id")
    // getUserViaId(@Param() id: string){
    //     console.log(id)
    //     return "this is Sanju Kumar"
    // }
}
