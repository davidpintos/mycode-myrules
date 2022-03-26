import { useEffect, useState } from "react";

import { MemoizedMovie, Movie } from "./movie";

const MemoExample = () => {

  const [, setToggle] = useState(true);
  
  useEffect(() => {
    
    const id = setInterval(() => {
      setToggle(toggle => !toggle);
    }, 3000);
    
    return () => clearInterval(id);

  }, []);

  return(
    <div className="padre">
      <h1>{"Probando React.memo()"}</h1>
      <Movie
        title="Heat" 
        releaseDate="December 15, 1995"
        memo={false}
      />

      <MemoizedMovie 
        title="Heat" 
        releaseDate="December 15, 1995" 
        memo={true}
      />
    </div>
  )
}

export default MemoExample