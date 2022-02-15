import { useContext } from "react"
import OMDPContext from "../../context/OMDPContext"

const Details = () => {
    const {setShow, movieData} = useContext(OMDPContext)
    
    return (
      <div className="bg-base-300 p-4">
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <div className="max-h-56 h-full flex items-center justify-center overflow-hidden">
                <img className="h-full flex-1" src={movieData.Poster} alt={movieData.Title} />
            </div>
            <div>
                <h2 className="text-xl font-bold mb-3">
                    {movieData.Title}
                </h2>
                <div>
                    <span className="font-semibold text-base">Year: </span>{movieData.Year}
                </div>
                <div>
                    <span className="font-semibold text-base">Language: </span>{movieData.Language}
                </div>
                <div>
                    <span className="font-semibold text-base">Rated: </span>{movieData.Rated}
                </div>
                <div>
                    <span className="font-semibold text-base">Released: </span>{movieData.Released}
                </div>
                <div>
                    <span className="font-semibold text-base">Runtime: </span>{movieData.Runtime}
                </div>
                <div>
                    <span className="font-semibold text-base">Genre: </span>{movieData.Genre}
                </div>
                <div>
                    <span className="font-semibold text-base">Director: </span>{movieData.Director}
                </div>
                <div>
                    <span className="font-semibold text-base">Actors: </span>{movieData.Actors}
                </div>
                <div>
                    <span className="font-semibold text-base">Plot: </span>{movieData.Plot}
                </div>
                
            </div>
          </div>
          <div className="flex flex-row justify-end mt-4">
            <button className="btn btn-ghost" onClick={() => setShow(false)}>Close</button>
          </div>
      </div>
    )
}

export default Details