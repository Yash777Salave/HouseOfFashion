import { baseAPI } from ".";


export const UserAPI = baseAPI.injectEndpoints({
    endpoints:(b)=>({
        getUser:b.query<User,{seller_id:number}>({
            query:(params)=>{
                return {
                url:'/api-seller/user_info',
                method:'GET',
                params
            }
        }
        })
    })
})

export const {useGetUserQuery} = UserAPI;

interface User{
    id:number;
    name:string;
    email:string;
    phone_no:number;
}