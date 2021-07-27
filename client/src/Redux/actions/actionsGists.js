import axios from "axios";

//URLS
import {GISTS_URL} from "../../Config/constans"

// names_Actions
export const GET_GISTS= "GET_GISTS";
export const GET_GISTS_ID= "GET_GISTS_ID";

/* =============================== ACTIONS ===============================*/

export const getGist=()=>{
    return function (dispach){
        return axios.get(GISTS_URL).then((res)=>{
            dispach({
                type: GET_GISTS,
                payload: res.data,
            })
        })
    }
}

export const getGistId=(id)=>{
    return function (dispach){
        return axios.get(GISTS_URL+id).then((res)=>{
            dispach({
                type: GET_GISTS_ID,
                payload: res,
            })   
        })
    }
}