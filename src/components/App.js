import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


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
       const response = await unsplash.get('/search/photos', {
            params: {query: term},
       });
       this.setState({images: response.data.results});
   };


    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onMySearchSubmit} />
            <ImageList images={this.state.images} />

            </div>
        );
    }
}

export default App;