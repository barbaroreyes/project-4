import React from 'react'
import ReactPlayer from 'react-player'
const Landinpage = ({movie}) => {
  return (
    <div>
      
    {movie.map((item,i)=>{
   return(<div key={i}>
           <h1>{item.name}</h1>
          <div>
          <ReactPlayer
           controls
           url={item.url}
           />
          </div>

   </div>)
    })}
    </div>
  )
}

export default Landinpage
