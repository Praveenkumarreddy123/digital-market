import { DataService } from '../services/data.service';
export class User {
    username: string;
    password: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phonenumber?: string;
    city?: string;
    pincode?: string;
    public service: DataService;
    constructor() {
        console.log(this.service.loginUser(this.username, this.password));
    }
    login() {
        // this.service.loginUser(this.username, this.password).subscribe((data) => {
        //     console.log(data);
        // });
    }
}
