
// -q2BAJ5oBAyOogcofzlg3r8gt0MEGjcThY2isji7pyM
// https://api.unsplash.com/
// ?client_id=YOUR_ACCESS_KEY
// GET /search/photos

import React,{useState} from "react";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";

const App = () => {

    let [images, setImages] = useState([])

    console.log("App.js",images)

  return(
    <div>
          <SearchBar  addImages={setImages}/>
          <ImageList  images={images} />
    </div>
  )
}

export default App;

