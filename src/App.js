import React , {useState,useEffect} from 'react';
import ReactPlayer from "react-player";
import './App.css';

function App() {
  const [movie , setMovie] = useState([])
  const url= 'https://chknksciok.execute-api.us-east-2.amazonaws.com/dev-3'
  const getMovies = () => {
    fetch(url + '/player/')
    .then(response => response.json())
    .then((data)=>{
     setMovie(data.body)
     console.log(data.body)
    })
   
  }
  useEffect(()=>{
    getMovies()
  },[])

  return (
    <div className="App">
      {movie.map((item,i)=>{
        return (<>
        
        <ReactPlayer 
     with='480px' 
     height='240px'
      controls 
      url={item.url}
      onReady={() => console.log('on ready')}
      onStart={() => console.log('onStart')}
      onPause={() => console.log('onPause')}
      onEnded={() => console.log('onEnded')}
      onError={() => console.log('onError')}
      />
        </>)
      })}
    
    </div>
  );
}

export default App;
