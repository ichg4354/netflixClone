import axios from "axios"

const MVDB_KEY = "9431e6650823ef1fe3e7c6b65c15123d"


const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3/${path}`, {
        ...params,
        api_key: MVDB_KEY
    })

export const movieApi = {
    nowPlaying: () => makeRequest('/movie/now_playing'),
    popular: () => makeRequest('/movie/popular'),
    upcomming: () => makeRequest('/movie/upcoming', { "region": "ko" }),
    search: (query) => makeRequest('/search/movie', { query: query }),
    movie: (id) => makeRequest(`/movie/${id}`),
    discover: () => makeRequest('/discover/movie')
}

export const tvApi = {
    today: () => makeRequest('/tv/airing_today'),
    thisWeek: () => makeRequest('tv/on_the_air'),
    topRated: () => makeRequest('/tv/top_rated'),
    popular: () => makeRequest('/tv/popular'),
    search: (query) => makeRequest('/search/tv', { query }),
    show: (id) => makeRequest(`/tv/${id}`)
}



