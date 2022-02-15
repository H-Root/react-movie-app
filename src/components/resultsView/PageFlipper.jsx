import {FaCaretLeft, FaCaretRight} from "react-icons/fa"
import { useContext } from "react"
import OMDPContext from "../../context/OMDPContext"

const PageFlipper = () => {
  const { handleOMDPSearch, active, data } = useContext(OMDPContext)

  const handleBanner = (range) => {
      let temp = [];
      for (let index = 0; index < range; index++) {
        temp.push(index + 1)
      }
      return temp
  }

  return (
    <div className="flex flex-row items-center justify-center gap-3">
        <div className="p-1 flex items-center justify-center">
          <FaCaretLeft onClick={() => handleOMDPSearch(active - 1)} className={`cursor-pointer ${active === 1 ? "pointer-events-none text-red-500" : ""}`} size={20} />
        </div>
        <div className="flex flex-row items-center ">
          {handleBanner(Math.ceil(data.data.totalResults / 10)).map((ele, index) => {
            return <div
              key={ele}
              onClick={() => handleOMDPSearch(ele)} 
              className={`cursor-pointer w-7 sm:w-10 h-7 sm:h-10 border-[1px] border-white flex justify-center items-center ${index + 1 === active ? "bg-gray-500" : ""}`}>{ele}</div> 
          })}
        </div>
        <div className="p-1 flex items-center justify-center">
          <FaCaretRight onClick={() => handleOMDPSearch(active + 1)} className={`cursor-pointer ${active === Math.ceil(data.data.totalResults / 10) ? "pointer-events-none text-red-500" : ""}`} size={20} />
        </div>
      </div>
  )
}

export default PageFlipper