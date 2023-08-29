import { baseAPI } from ".";

interface SaveTSHirt{
    title:string;
    price:number;
    rating:number;
    type:string;
    seller_id:number;
    describe:string;
}

export const MenClothesAPI = baseAPI.injectEndpoints({
    endpoints:(b)=>({
        saveMenTShirt:b.mutation<SaveTSHirtResp,SaveTSHirt>({
            query:(body)=>{
                const {seller_id,...reqBody} = body;
                return {
                url:'/api-mens-clothes/t-shirt/save',
                method:'POST',
                body:reqBody,
                params:{seller_id}
            }
        }
        }),
        saveWomenClotes:b.mutation<SaveTSHirtResp,SaveTSHirt>({
            query:(body)=>{
                const {seller_id,...reqBody} = body;
                return {
                url:'/api-women-clothes/save',
                method:'POST',
                body:reqBody,
                params:{seller_id}
            }
        }
        }),
        saveKidClotes:b.mutation<SaveTSHirtResp,SaveTSHirt>({
            query:(body)=>{
                const {seller_id,...reqBody} = body;
                return {
                url:'/api-kid-clothes/save',
                method:'POST',
                body:reqBody,
                params:{seller_id}
            }
        }
        }),
        getClothesByType:b.query<ClothesByTypeResp[],{type:String}>({
            query:(params)=>{
                return {
                url:'/api-mens-clothes/type-all',
                method:'GET',
                params
            }
        }
        }),
        getWomenClothesByType:b.query<ClothesByTypeResp[],{type:String}>({
            query:(params)=>{
                return {
                url:'/api-women-clothes/type-all',
                method:'GET',
                params
            }
        }
        }),
        getKidClothesByType:b.query<ClothesByTypeResp[],{type:String}>({
            query:(params)=>{
                return {
                url:'/api-kid-clothes/type-all',
                method:'GET',
                params
            }
        }
        })
    })
})

export const {useSaveMenTShirtMutation,
    useGetClothesByTypeQuery,
    useSaveWomenClotesMutation,
    useSaveKidClotesMutation,
    useGetWomenClothesByTypeQuery,
    useGetKidClothesByTypeQuery} = MenClothesAPI;

interface SaveTSHirtResp{
    title:string;
    price:number;
    rating:number;
    type:string;
    id:number
}
export interface ClothesByTypeResp {
    id:     number;
    title:  string;
    describe:  string;
    price:  number;
    rating: number;
    type:   string;
}
