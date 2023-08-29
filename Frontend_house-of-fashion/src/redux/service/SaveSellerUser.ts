import { baseAPI } from ".";

interface SaveUSer{
    email:string;
    name:string;
    phone_no:string;
    password:string;
}
interface UserPresentParam{
    email:string;
    password:string;
    }

export const SaveUserAPI = baseAPI.injectEndpoints({
    endpoints:(b)=>({
        saveSellerUser:b.mutation<SaveUSer,SaveUSer>({
            query:(body)=>({
                url:'/api-seller/user/save',
                method:'POST',
                body
            })
        }),
        isSellerUserPresent: b.mutation<UserPresentResp,UserPresentParam>({
            query:(body)=>({
               url: "/api-seller/user/ispresent",
               method:'POST',
               body
        })
        })
    })
})

export const {useSaveSellerUserMutation,useIsSellerUserPresentMutation} = SaveUserAPI;

interface UserPresentResp{
    id:number;
    name:string;
    email:string;
    phone_no:number;
}