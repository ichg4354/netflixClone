import axios from "axios";

const MVDB_KEY = "9431e6650823ef1fe3e7c6b65c15123d";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}?api_key=${MVDB_KEY}`, {
    ...params,
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing", null),
  popular: () => getAnything("/movie/popular"),
  upcomming: () => getAnything("/movie/upcoming", { region: "ko" }),
  search: (query) => getAnything("/search/movie", { query: query }),
  movie: (id) => getAnything(`/movie/${id}`),
  discover: () => getAnything("/discover/movie"),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: (query) => getAnything("/search/tv", { query }),
  show: (id) => getAnything(`/tv/${id}`),
};
