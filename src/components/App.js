import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";


//functional component
// const App = () => {
//     return <div className="ui container" style={{marginTop: '10px'}}>
//         <SearchBar />
//     </div>
// };

// class component
class App extends React.Component {
    state = {images: [] };

   onMySearchSubmit = async term =>{
       const response = await axios
           .get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization:
                    'Client-ID 2WLCoqH7U8jBo-CG_NdF_8YCJi2gx1Yz_KgnMZoUqyo'
            }
        });
       this.setState({images: response.data.results});
   }


    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onMySearchSubmit}/>
            Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;