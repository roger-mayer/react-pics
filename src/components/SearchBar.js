import React from "react";

class SearchBar extends React.Component {
  state = {term: ''};


    onMyFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);  //prop passed from component
    };

    render() {
        return (
            <div className="ui segment">
                {/*runs onMyFormSubmit when user submits form*/}
                <form onSubmit={this.onMyFormSubmit} className="ui form" action="">
                    <div className="field">
                        <label>Image Search</label>
                    <input type="text"
                           value={this.state.term}
                           onChange={(e) =>
                               this.setState({term: e.target.value})}
                    />
                    </div>
                </form>
        </div>
        );
    }
}

export default SearchBar;


