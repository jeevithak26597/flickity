export class UserModel {
    id: number;
    name: string;
    mail: string;
    phoneNo: number;
    password: string;
    role: string;
    skills: Array<string>;
    totalpoints:number;
    monthlypoints: number;
    user_location: string;
    
    constructor(id: number, name: string, mail: string, phoneNo: number, role: string, 
        location: string, skillArr: Array<string>, password: string) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.phoneNo = phoneNo;
        this.role = role;
        this.user_location = location;
        this.skills = skillArr;
        this.totalpoints = 0;
        this.monthlypoints = 0;
        this.password = password;
    }
}
