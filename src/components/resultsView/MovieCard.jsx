import { useContext} from "react"
import OMDPContext from "../../context/OMDPContext"

const MovieCard = ({movie}) => {
  const { handleOMDBMovieDetails } = useContext(OMDPContext)

  return (
    <div onClick={() => handleOMDBMovieDetails(movie.imdbID)} className="flex cursor-pointer flex-col justify-between p-2 bg-base-content text-gray-800 shadow-sm shadow-gray-200 min-w-full">
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold">
          {movie.Title}
        </h1>
        <div className="flex flex-row justify-between items-center">
          <div>
            Year: {movie.Year}
          </div>
          <div>
            Type: {movie.Type}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard