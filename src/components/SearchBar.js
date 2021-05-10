import React from 'react';

function SearchBar(props) {
    return (
        <div className="form-group">
            <label>Filter Badges</label>
            <input type="text" name="searchBar"
                className="form-control"
                placeholder="Search"
                value={props.value}
                onChange={props.onChange} />
        </div>
    )
}

export default SearchBar;