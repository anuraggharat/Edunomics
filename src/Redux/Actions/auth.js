import {LOGIN_FAILURE,LOGIN_SUCCESS,REGISTER_FAILURE,REGISTER_SUCCESS} from '../Constants'
import axios from 'axios'



//user register
export const registerUser=(user)=>async dispatch=>{

    const body = JSON.stringify(user)
    const headers ={
        Accept:"application/json",
        "Content-Type":"application/json"
    }
    try {
        const res=await axios.post('http://wenestor.rachitpahwa.codes/api/user/signup',body,{headers:headers})
        console.log(res)
        // dispatch({
        //     type:REGISTER_SUCCESS,
        //     payload:res
        // })   
        // dispatch(loadUser())
    } 
    catch (error) {
        console.log(error)
        // dispatch({
        //     type:REGISTER_FAILURE
        // })
        
    }
}








//user login
export const loginUser=(email,password)=>async(dispatch)=>{
   
    const body=JSON.stringify({email,password})
    try {
        const res=await api.post('user/login')

        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
//load the user then
        //dispatch(loadUser())
    } 
    catch (error) {
        console.log(error)
        dispatch({
            type:LOGIN_FAILURE
        })    
    }    
}