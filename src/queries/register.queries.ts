import axios from "axios"

interface userRegisterInput{
    username: string,
    name:string,
    password:string,
    workspace:string,
    termsOfService: boolean
}

interface userLoginInput{
    username: string,
    password:string
}

export const register = async(value: userRegisterInput) =>{
    const registerPostBody = {
        username: value.username,
        name: value.name,
        password: value.password,
        workspace: value.workspace
    }

    try{
        const response = await axios.post("https://husqr.up.railway.app/register", registerPostBody)
    }catch(error){
        console.error(error)
    }

}

export const Login = async(values:userLoginInput) => {
    try{
        const response = await axios.post("https://husqr.up.railway.app/login", values)
        console.log(response.data)
    }catch(error){
        console.error(error)
    }

}