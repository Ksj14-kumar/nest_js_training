import { Injectable } from '@nestjs/common';
import { UserTypeBody } from 'src/dto/user.dto';


let Users = []

@Injectable()
export class UserService {
    getUser(id: string) {
        const user = Users.filter(item => item.id === +id)
        return user[0] ? user[0] : "user is not exits with this id"
    }
    addNewUser(user: UserTypeBody) {
        console.log("user data comes via body",user)
        const randomId = Math.floor(Math.random() * 10000)
        Users.push({ id: randomId, name: user.name, age: user.age,email:user.email })
        return `successfull added user in db with id ${randomId}`
    }
}
