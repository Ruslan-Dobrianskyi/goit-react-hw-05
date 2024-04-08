import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";

export const fetchTrendingMovies = async () => {
  const response = await axios.get("3/trending/movie/day", {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGEwODE0Y2QyZjM5NmU5YjgwODMzNzg1OWUwNzdkNiIsInN1YiI6IjY2MTNjYmUzOWJjZDBmMDE3ZDJiMTA2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J5IX6H7c2U3TMjJzGl6ZMVsjy0B_9UopAsij4oWm-NA",
    },
    params: {
      api_key: "4f6d9f7f4d0b6f0c6d9f7f4d",
    },
  });
  return response.data;
};

// const options = {
//   headers: {
//     // Замість api_read_access_token вставте свій токен
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGEwODE0Y2QyZjM5NmU5YjgwODMzNzg1OWUwNzdkNiIsInN1YiI6IjY2MTNjYmUzOWJjZDBmMDE3ZDJiMTA2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J5IX6H7c2U3TMjJzGl6ZMVsjy0B_9UopAsij4oWm-NA",
//   },
// };

// axios
//   .get("3/trending/movie/day", options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
