import axios from "axios";



export const api = axios.create({
  baseURL: "http://localhost:8080",
  // headers:
  // {
  //   "Content-Type": "application",
  // }
})

//moviesApi
// export const moviesApi = {
//   nowPlaying: () => api.get("movie/now_playing"),
//   upcoming: () => api.get("movie/upcoming"),
//   popular: () => api.get("movie/popular"),
//   movieDetail: (id) =>
//       api.get(`movie/${id}`, {
//         params: {
//           append_to_response: "videos",
//         },
//       }),
//   search: (term) =>
//       api.get("movie/search", {
//         params: {
//           query: encodeURIComponent(term),
//         },
//       }),
// };


//tvApi
// export const tvApi = {
//   topRated: () => api.get("tv/top_rated"),
//   popular: () => api.get("tv/popular"),
//   airingToday: () => api.get("tv/airing_today"),
//   showDetail: (id) =>
//       api.get(`tv/${id}`, {
//         params: {
//           append_to_response: "videos",
//         },
//       }),
//   search: (term) =>
//       api.get("search/tv", {
//         params: {
//           query: encodeURIComponent(term),
//         },
//       }),
// };

