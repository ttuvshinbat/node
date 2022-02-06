
import React, { useEffect, useState } from "react";
function App() {
  const [first, setfirst] = useState()
  let dName = "";
  useEffect(() => {
    fetch("http://localhost:3001/server")
      .then(response => response.json())
    // .then(data => setfirst(data))
  })
  console.log(first)


  return (
    <div>
      <p> hi</p>
      <p></p>
    </div>

  )
}
export default App;