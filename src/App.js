import ReactPlayer from "react-player";
import './App.css';

function App() {
  return (
    <div className="App">
     <ReactPlayer 
     with='480px' 
     height='240px'
      controls 
      url='hhttps://www.twitch.tv/videos/1050358400'
      onReady={() => console.log('on ready')}
      onStart={() => console.log('onStart')}
      onPause={() => console.log('onPause')}
      onEnded={() => console.log('onEnded')}
      onError={() => console.log('onError')}
      />
    </div>
  );
}

export default App;
