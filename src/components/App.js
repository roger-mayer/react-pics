import React from "react";

import SearchBar from "./SearchBar";

//functional component
// const App = () => {
//     return <div className="ui container" style={{marginTop: '10px'}}>
//         <SearchBar />
//     </div>
// };

// class component
class App extends React.Component {
    onMySearchSubmit(term){
        console.log(term);
    }


    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onMySearchSubmit}/>
            </div>
        );
    }
}

export default App;