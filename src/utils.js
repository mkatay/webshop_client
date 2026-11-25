import axios from "axios";


 const baseUrl='http://localhost:8000/'

export const getCategories=async ()=>{
    try {
        const resp=await axios.get(baseUrl+'categories')
        return resp.data
    } catch (error) {
        console.log(error);
        
    }

}

export const getProductsByCateg=async (categId)=>{
    try {
        const resp=await axios.get(baseUrl+`products/${categId}`)
        return resp.data
    } catch (error) {
        console.log(error);
        
    }

}