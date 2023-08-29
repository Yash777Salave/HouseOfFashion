import { baseAPI } from ".";

interface SaveUSer{
    email:string;
    name:string;
    phone_no:number;
    password:string;
}

export const SaveUserAPI = baseAPI.injectEndpoints({
    endpoints:(b)=>({
        saveBuyerUser:b.mutation<SaveUSer,SaveUSer>({
            query:(body)=>({
                url:'/api/user/save',
                method:'POST',
                body
            })
        })
    })
})

export const {useSaveBuyerUserMutation} = SaveUserAPI;