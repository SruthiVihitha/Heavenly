import { useState } from "react";
import background from "./background/background";
const App = () => {
  let heroData =[
    {text1:"Tranquil Escapes",text2:"Unwind Revive"},
    {text1:"SwiftFix Solutions",text2:"Mend Maintain Modernize"},
    {text1:"Sparkle Squad",text2:"Shine Sanitize Simplify"},
  ]
  const [heroCount,setHeroCount]= useState(2);
  const[playStatus,setPlayStatus]= useState(false);
  return (
    <div>
      <background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

export default App
