import React, { useRef,useEffect } from 'react';
import './App.css';
import useWebAnimations,{rotateInDownLeft} from "@wellyshen/use-web-animations";


function App() {
  // const element = useRef(null)
  const { ref, playState, getAnimation } = useWebAnimations({...rotateInDownLeft}) //this is done with animate.css
    // {                                      
//     keyframes: [                                         // this is done with hackermoon
//       {transform: 'translate(0,0)'},
//       {transform: 'translate(600px,0)'}
//     ],
//     timing: {
//       // delay: 500, // Start with a 500ms delay
//       duration: 1000, // Run for 1000ms
//       iterations: 15, // Repeat once
//       direction: "alternate", // Run the animation forwards and then backwards
//       easing: "ease-in-out", // Use a fancy timing function
//     },
//     onReady: ({ playState, animate, animation }) => {
//       // Triggered when the animation is ready to play (Google Chrome: available in v84+)
//       alert("Hey It's animation " + playState)
//     },
//     // onUpdate: ({ playState, animate, animation }) => {
//     // //   // Triggered when the animation enters the running state or changes state
        
//     // },
//     onFinish: ({ playState, animate, animation }) => {
//       // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
//       alert("Thanks for watching " + playState)
//     },
//     // More useful options...
//   });
//   const seek = (e) => {
//     const animation = getAnimation();
//     const time = (animation.effect.getTiming().duration / 100) * e.target.value;
//     animation.currentTime = time;
//   };
//  const updatePlaybackRate = (e) => {
//    getAnimation().updatePlaybackRate(e.target.value)
//  }
  return (
    <div>
      <h1 className="target" ref={ref} > Syed Ali Uz Zaman
    </h1>
        Current Animation {playState}
        <button onClick={() => getAnimation().pause()}>Pause</button>
        <button onClick={() => getAnimation().play()}>Play</button>
        <button onClick={() => getAnimation().reverse()}>Reverse</button>
        <button onClick={() => getAnimation().finish()}>Finished</button>
        <button onClick={() => getAnimation().cancel()}>Cancel</button>
        {/* <input type="range" onChange={seek} />
        <input type="number" defaultValue="1" onChange={updatePlaybackRate} /> */}

        
    </div>
  );
}

export default App;
