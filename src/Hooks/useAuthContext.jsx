import { useContext } from "react"
import { CarContextAuth } from "../../public/UseContext/CarContext"


const useAuthContext = () => {
  const globalData= useContext(CarContextAuth)
  return globalData
}

export default useAuthContext