import React,{useState,useEffect} from "react";
import './App.css';
import Gify from "./Gify";
function App() {
  const[names,setNames]=useState([]);
  const[search,setsearch]=useState("");
  const[query,setQuery]=useState(" ");
  const url=`https://api.giphy.com/v1/gifs/search?api_key=HJDKBoFCchXWvqBWumEBSbD9Bd5XbKw0&q=${query}&limit=25&offset=0&rating=g&lang=en`;
  const getSearch=e=>{
    setsearch(e.target.value)
  }
  const final=e=>
{
  e.preventDefault();
  setQuery(search)
}
  useEffect(()=>{
  gif();
   },[query])
   const gif=async()=>{
    try {
        const response=await fetch(url);
        const content=await response.json();
        console.log(content.data);
        setNames(content.data)
      }
   catch(error) {
      console.warn(error);
    }
  }
  return (
    <div className="App">
     <h1 className="title">Gif Generator</h1>
     <p className="para">Get the best & newest GIFs expressing your emotions </p>
     <form className="forms" onSubmit={final}>
     <input className="texts" type="text" placeholder="Search the gif" value={search} onChange={getSearch}></input>
   <center><button className="press" type="submit">Search</button></center>
     </form>
     {names.map((gi)=>(
       <Gify names={gi.title}
         image={gi.images.downsized.url}
       />
     ))}
    </div>
  );
}

export default App;
