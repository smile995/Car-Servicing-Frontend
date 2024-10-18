import React from 'react'
import TopBanner from '../../Components/Top_Banner/TopBanner'
import { useLoaderData } from 'react-router-dom'

const Details = () => {
const service= useLoaderData()
console.log(service);

  
  return (
    <div>
      <TopBanner title={"Service Details"} path={"Home/Service/Details"}/>
    </div>
  )
}

export default Details