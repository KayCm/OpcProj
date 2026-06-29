import {R_POST} from "../../Services/NetRequestService";
import {useState} from "react";


export const LoginViewModel = () => {


    const [loginEmail,setLoginEmail] = useState(null)
    const [loginPhone,setLoginPhone] = useState(null)
    const [loginPassword,setLoginPassword] = useState(null)
    const [loginModel,setLoginModel] = useState('mail')
    const [agree,setAgree] = useState(false)

    const loginAct = async () => {

        let url = '/open-api/mobile/member/login'
        let params = {
            "email": loginEmail,
            "password": loginPassword
        }
        const res = await R_POST(url, params)

        console.log(res)

    }



    return {
        loginEmail,
        setLoginEmail,
        loginPhone,
        setLoginPhone,
        loginPassword,
        setLoginPassword,
        loginModel,
        setLoginModel,
        loginAct,

    }



}
