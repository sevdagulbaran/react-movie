import React from 'react';


class SearchBar extends React.Component{

    state = {
        searchQuery: " "
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {

        return  (

            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5 mt-2">
                    <div className="col-12">
                        <input
                            //onChange={(event) => this.setState({searchQuery: event.target.value})}
                            onChange={this.props.searchMovieProp}
                            type="text" className="form-control"
                            placeholder="Seach a movie"

                        />
                    </div>
                </div>
            </form>
        )
    }
}
export default SearchBar;