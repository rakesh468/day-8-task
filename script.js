class user{
    constructor(firstname,lastname,address,mobile){
        this.firstname=firstname;
        this.lastname=lastname;
        this.address=address;
        this.mobile=mobile;
    }
}
const user1=new user("rakesh","kumar",{city:"chennai",state:"tamil nadu"},"8887766554")
console.log(user1);
