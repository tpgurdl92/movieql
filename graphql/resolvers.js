import {getMovieInfo,getDetail,getTvshowInfo,getTvshowDetail,search }from "./db"

const resolvers = {
    Query: {
        getMovieInfo:()=>getMovieInfo(),
        getDetail:(_,{id})=>getDetail(id),
        getTvshowInfo:()=>getTvshowInfo(),
        getTvshowDetail:(_,{id})=>getTvshowDetail(id),
        search:(_,{keyword})=>search(keyword),
    },
    
}


export default resolvers;