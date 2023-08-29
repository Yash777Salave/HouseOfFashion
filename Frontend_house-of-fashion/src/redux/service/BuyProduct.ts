import { baseAPI } from ".";

interface SaveProduct{
    title:string;
    price:number;
    description:string;
    address:string;
    shipDate:string;
    userId:number;
}

export const SaveProductAPI = baseAPI.injectEndpoints({
    endpoints:(b)=>({
        saveBuyProduct:b.mutation<SaveProduct,SaveProduct>({
            query:(body)=>({
                url:'/api-buy/product',
                method:'POST',
                body
            })
        }),
        getAllBuyProduct:b.query<SaveProduct[],{userId:number}>({
            query:(params)=>({
                url:'/api-buy/all-products',
                method:'GET',
                params
            })
        })
    })
})

export const {useSaveBuyProductMutation,useGetAllBuyProductQuery} = SaveProductAPI;