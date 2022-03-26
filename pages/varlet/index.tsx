import React, { useEffect } from 'react';

const Varlet = (): JSX.Element => {

  useEffect(() => {
    console.log("hello");
  },[]);

  return (
    <div>
      hello
    </div>
  )
}

export default Varlet