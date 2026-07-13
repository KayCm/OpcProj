import {R_POST} from "../../Services/NetRequestService";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {logout, updateToken, updateUserInfo} from "../../Redux/persistedReducer";

export const LoginViewModel = () => {

    const dispatch =  useDispatch()

    const [loginEmail,setLoginEmail] = useState(null)
    const [loginPhone,setLoginPhone] = useState(null)
    const [loginPassword,setLoginPassword] = useState(null)
    const [loginModel,setLoginModel] = useState('mail')
    const [agree,setAgree] = useState(false)

    const loginAct = async () => {

        let url = '/open-api/mobile/member/login'
        let params = {
            "email": '123@456.com',
            "password": '123456'
        }

        console.log(params)
        const res = await R_POST(url, params)

        console.log(res)

        if (res?.code == 200 && res?.token) {
            dispatch(updateToken(res))

            getUserInfo()
        }else{

        }

    }


    const getUserInfo = async () => {
        let url = '/open-api/mobile/member/getMemberInfo'
        const res = await R_POST(url, {})
        if (res?.code == 200 && res?.data){
            dispatch(updateUserInfo(res?.data))
        }else{
            dispatch(logout(null));
        }
        console.log('userInfo:',res)
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
        agree,
        setAgree
    }



}
