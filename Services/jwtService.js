import {JWT_SECRET} from "../config";
import jwt from 'jsonwebtoken';

class jwtService{
    static sign(payload , expiry ='60s' , secret=JWT_SECRET){
        return jwt.sign(payload ,secret , {expiresIn: expiry})
    }
  //this verify is out custom method
    static verify(token , secret=JWT_SECRET){

        //this verify  is jwt method 
        return jwt.verify(token ,secret )
    }
}
export default jwtService;
