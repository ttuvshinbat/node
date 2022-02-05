
import React, {useEffect, useState} from "react";
function app (){
const [first, setfirst] = useState()

useEffect(() => {
  fetch("http://localhost:3001/server")
  .then(response => response.json())
  .then(data => console.log(data))
})


    return(
        <div>
        <p> hi</p>
        </div>

    )
}
export default app;