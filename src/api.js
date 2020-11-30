const base_url = "https://api.themoviedb.org/3/"
const api_key = 'api_key=829ba48c054bc241692ca990d4f013de'

const getCurrentMonth = () =>{
    const month = new Date().getMonth()+1;
    if (month<10){
        return `0${month}`;
    }else{
        return month;
    }
}

const getCurrentDay= () =>{
    const day = new Date().getDate();
    if(day<10){
        return `0${day}`;
    }else{
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth= getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_movies = `movies?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_movies = `movies?dates=${currentDate}, ${nextYear}&ordering=-added&page_sie=10`
const new_movies = `movies?dates=${lastYear}, ${currentDate}&ordering=-released&page_size=10`

export const popularMoviesURL = ()=> `${base_url}discover/movie?${api_key}${popular_movies}`
export const upcomingMoviesURL= ()=> `${base_url}${api_key}${upcoming_movies}`
export const newMoviesURL= ()=> `${base_url}${api_key}${new_movies}`

export const movieDetailURL=(movie_id)=>`${base_url}${api_key}movies/${movie_id}`

export const movieScreenshotURL=(movie_id)=>`${base_url}${api_key}movies/${movie_id}/screenshots`

export const searchMovieURL=(movie_name)=>`${base_url}${api_key}movies?search=${movie_name}&page_size=10`