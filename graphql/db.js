import fetch from 'node-fetch';



//new logic
const API_KEY="8a9fbe65aec1254d15f60d6cb5e54f4b";

const nowPlaying="https://api.themoviedb.org/3/movie/now_playing?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US&page=15";
const nowPopular="https://api.themoviedb.org/3/movie/popular?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US&page=15";
const topRated="https://api.themoviedb.org/3/movie/top_rated?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US&page=15";
const upcoming="https://api.themoviedb.org/3/movie/upcoming?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US&page=7";

const compImageURL="https://image.tmdb.org/t/p/w500";
const orgImageURL="https://image.tmdb.org/t/p/original"

const videoURL1="https://api.themoviedb.org/3/movie/"
const videoURL2="/videos?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US"

export const getMovieInfo = async() =>{
    let result = [];
    const nowPlayingM = await (await(await fetch(nowPlaying)).json()).results;
    const nowPopularM = await (await(await fetch(nowPopular)).json()).results;
    const topRatedM =  await (await(await fetch(topRated)).json()).results;
    const upcomingM =  await (await(await fetch(upcoming)).json()).results;
    console.log("i'm in");

    
    result.nowPlaying = nowPlayingM;
    result.nowPopular = nowPopularM;
    result.topRated = topRatedM;
    result.upcoming = upcomingM;
    result.compImageURL = compImageURL;
    result.orgImageURL = orgImageURL;
    
    return result;
}

export const getDetail = async(id) =>{
    console.log("id:"+id);
    const movieURL = "https://api.themoviedb.org/3/movie/"+id+"?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US";
    console.log(movieURL);
    const videoURL = videoURL1+id+videoURL2;
    const movie = await (await fetch(movieURL)).json()
    const video = await (await (await fetch(videoURL)).json()).results;
    console.log(movie);
    console.log(video);
    return {movie,
        video,
        compImageURL:compImageURL,
        orgImageURL:orgImageURL
    };
}



//TVSHOW
const tvOnTheAir ="https://api.themoviedb.org/3/tv/on_the_air?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US&page=1";
const tvPopular = "https://api.themoviedb.org/3/tv/popular?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US&page=1";
const tvTopRated = "https://api.themoviedb.org/3/tv/top_rated?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US&page=1";

export const getTvshowInfo = async() =>{
    let tvshow=[];
    const dataTvOnTheAir = await(await(await fetch(tvOnTheAir)).json()).results;
    const dataTvPopular = await(await(await fetch(tvPopular)).json()).results;;
    const dataTvTopRated = await(await(await fetch(tvOnTheAir)).json()).results;;

    tvshow.tvOnTheAir = dataTvOnTheAir;
    tvshow.tvPopular = dataTvPopular;
    tvshow.tvTopRated = dataTvTopRated;
    tvshow.compImageURL = compImageURL;
    tvshow.orgImageURL = orgImageURL;
    return tvshow;

}

export const getTvshowDetail = async(id) => {
    console.log("im getTvSHowDetail  " + id);
    const tvshowURL = "https://api.themoviedb.org/3/tv/"+id+"?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US";
    const videoURL = "https://api.themoviedb.org/3/tv/"+id+"/videos?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US"; 
    const tvShow = await (await fetch(tvshowURL)).json();
    const video = await (await (await fetch(videoURL)).json()).results;

    
    return {
        tvShow,
        video,
        compImageURL:compImageURL,
        orgImageURL:orgImageURL
    }

}

export const search = async(keyword) =>{

    console.log(keyword);
    const movieSearchURL = "https://api.themoviedb.org/3/search/movie?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US&query="+keyword+"&page=1&include_adult=true"
    const tvShowSearchURL = "https://api.themoviedb.org/3/search/tv?api_key=8a9fbe65aec1254d15f60d6cb5e54f4b&language=en-US&page=1&query="+keyword+"&include_adult=true";

    const movieList = await (await (await fetch(movieSearchURL)).json()).results;
    const tvShowList = await (await (await fetch(tvShowSearchURL)).json()).results;

    return {movieList,
            tvShowList,
            compImageURL:compImageURL,
            orgImageURL:orgImageURL};

}