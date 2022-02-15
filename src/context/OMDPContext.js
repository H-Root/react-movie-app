import { createContext, useState } from "react";
import axios from "axios";

const OMDPContext = createContext();

export const OMDPProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [movieData, setMovieData] = useState("");
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(0);

  const isError = (data) => {
    if (data.status !== 200) {
      setError({ isError: true, msg: data.statusText });
      setTimeout(() => {
        setError({ isError: false });
      }, 3000);
    } else {
      if (data.data.Response === "False") {
        setError({ isError: true, msg: data.data.Error });
        setTimeout(() => {
          setError({ isError: false });
        }, 3000);
        return true;
      } else {
        return false;
      }
    }
  };

  const handleOMDPSearch = async (pageParam) => {
    setLoading(true);
    if (navigator.onLine) {
      if (pageParam) {
        await axios
            .get(
              `https://www.omdbapi.com/?apikey=${
                process.env.REACT_APP_OMDB_API_KEY
              }&s=${search.split(" ").join("+")}&page=${pageParam}`
            )
            .then((response) => {
              setActive(pageParam)
              console.log(response);
              if (isError(response)) {
                setData("");
                setLoading(false);
              } else {
                setData(response);
              }
              return response;
            })
            .catch((error) => {
              setError({ isError: true, msg: error });
              setData("");
            });
      } else {
        setActive(1)
        setData("");
        if (search.length !== 0) {
          await axios
            .get(
              `https://www.omdbapi.com/?apikey=${
                process.env.REACT_APP_OMDB_API_KEY
              }&s=${search.split(" ").join("+")}`
            )
            .then((response) => {
              console.log(response);
              if (isError(response)) {
                setData("");
                setLoading(false);
              } else {
                setData(response);
              }
              return response;
            })
            .catch((error) => {
              setError({ isError: true, msg: error });
              setData("");
            });
        } else {
          setError({ isError: true, msg: "🤓 Please Enter A Valid Name" });
          setTimeout(() => {
            setError({ isError: false });
          }, 3000);
        }
      }
    } else {
      setError({isError: true, msg: "🕵️ Check Your Network Connection"})
      setTimeout(() => {
        setError({isError: false})
      }, 3000)
    }
    setLoading(false);
  };

  const handleOMDBMovieDetails = async (movieId) => {
    setMovieData("");
    // setLoading(true);
    if (navigator.onLine) {
      await axios.get(`https://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${movieId}`).then((data) => {
        setMovieData(data.data)
        console.log(data);
        setShow(true)
      }).catch((err) => {
        console.log(err);
      })
    } else {
      setError({isError: true, msg: "🕵️ Check Your Network Connection"})
      setTimeout(() => {
        setError({isError: false})
      })
    }
    // setLoading(false)
  }

  return (
    <OMDPContext.Provider
      value={{ setSearch, handleOMDPSearch, handleOMDBMovieDetails, setShow, show, search, data, loading, error, movieData, active }}
    >
      {children}
    </OMDPContext.Provider>
  );
};

export default OMDPContext;
