import KitchenSinkExample from "../Components/Cards";
import { useState } from "react";
function Home() {
  const [data, setdata] = useState('')
  function handlename(evt){
    console.log(evt.target.value)
    setdata(evt.target.value)
  }

  function handleemail(evt){
    console.log(evt.target.value)
    setdata(evt.target.value)
  }

  function handlechange(evt){
   console.log(evt.target.value)
    setdata(evt.target.value)
  }
    return (
      <div className="Home">
        <KitchenSinkExample data="Manisha"/>
        <form action="#">
          <label>Name</label>
          <input onChange={handlename} type="text" name="name"></input>
          <lable>email</lable>
          <input onChange={handleemail} type="email" name="password"></input>
          <label>phone number</label>
          <input type="number" name="phone no."></input>
          <input onClick={handlechange} type="submit" name="submit"></input>
        </form>

        <p>{data}</p>
      </div>
    );
  
  }
  
  
  export default Home;