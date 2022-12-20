import{api} from '../api';
import{CODE_KEY,Config} from'../../Config/index';
import {URL} from '../../Utility/Url';



export const SigninAction=api.injectEndpoints({
    reducerPath:'SigninAction',
    endpoints:(builder)=>({
        createPost:builder.mutation({
            query:(grandType)=>{
                console.log(grandType);
                debugger
                return{
                    url:URL,
                    method:'POST',
                    headers:{
                        
                        'Content_Type':'application/form-data',
                       'Accept':'*/*',
                    },
                    body:JSON.stringify(grandType),
                }
            }
        })
    })
})


export const { useCreatePostMutation }=SigninAction