import React , {useState,useEffect} from 'react';
import {Switch,Route,Link} from 'react-router-dom'
import ReactPlayer from "react-player";
import LandingPage from "./components/landinpage"
import Amplify  from 'aws-amplify';
import awsconfi from './aws-exports';
import {AmplifySignOut,withAuthenticator} from '@aws-amplify/ui-react';
import './App.css';

Amplify.configure(awsconfi)
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
      <AmplifySignOut/>
      <h2>content</h2>
      {/* <Switch>
        <Route exact path ='/'>
          <LandingPage/>
       </Route>
       <Route exact path ='/home'>
         categories </Route>
         
         <Route path ='/home/category'>
         category
       </Route>
       
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
    </Switch> */}
    </div>
  );
}

export default withAuthenticator( App);
