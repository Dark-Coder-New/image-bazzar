import React, {useState} from "react";
import axios from "axios";

const SearchBar = ({addImages}) => {

     let [searchTerm, setSearchTerm] = useState("")
    

    //   console.log(images)

     function handleSubmit(){
         
        axios.get("https://api.unsplash.com/search/photos",{
            params:{
                client_id: "-q2BAJ5oBAyOogcofzlg3r8gt0MEGjcThY2isji7pyM",
                query: searchTerm
            }
        })
        .then(response =>  addImages(response.data.results))
        .catch(error => console.log(error))

     }

    return(
        <div>
              <input type="text" placeholder="Search for images" 
                onChange={e =>setSearchTerm(e.target.value)}
              />
              <button onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default SearchBar;