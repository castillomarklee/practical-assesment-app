import React from 'react';
import './style.scss'; 

class SearchBar extends React.Component {   
    state = {
        term: ''    
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.searchFunc(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return(
            <div className="ui segment search-bar-container">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search by email</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;