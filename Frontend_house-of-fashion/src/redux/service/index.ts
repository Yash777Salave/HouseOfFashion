import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

interface UserPresentParam{
email:string;
password:string;
}

export const baseAPI= createApi({
    reducerPath:'baseAPI',
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8080"}),
    endpoints:(builder)=>({
        isUserPresent: builder.mutation<UserPresentResp,UserPresentParam>({
            query:(body)=>({
               url: "/api/user/ispresent",
               method:'POST',
               body
        })
        })
    })
})

export const { useIsUserPresentMutation}=baseAPI;

interface UserPresentResp{
    id:number;
    name:string;
    email:string;
    phone_no:number;
}