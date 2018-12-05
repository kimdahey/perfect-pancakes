import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {

    constructor(props) {
        super(props);
        // TODO add new key/value pair in the state to keep track of type
        // The state is just a list of key/value pair (like a hashmap)
        this.state = {
            search: "",
            continent: "All"
        };
    }

    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        if (item.continent === this.state.continent || this.state.continent === "All") {
            return item.name.toLowerCase().search(this.state.search) !== -1;
        }
    }

    // An event handling method for when an item in dropdown is selected
   selectDropdown = (eventKey) => {
        document.getElementById("continentDropdown").title = eventKey;

        this.setState({
            continent: eventKey
        })
   }

    render() {
        return (
            <div className="filtered-list">
                <div class="searcher">
                <input type="text" placeholder="Type in a pancake name..." onChange={this.onSearch} />
                
                <DropdownButton class="continentDropdown" id="continentDropdown" title={"Continent"}>
                    <MenuItem eventKey="All" onSelect={this.selectDropdown}>All</MenuItem>
                    <MenuItem eventKey="The Americas" onSelect={this.selectDropdown}>The Americas</MenuItem>
                    <MenuItem eventKey="Europe" onSelect={this.selectDropdown}>Europe</MenuItem>
                    <MenuItem eventKey="Africa" onSelect={this.selectDropdown}>Africa</MenuItem>
                    <MenuItem eventKey="Asia/Pacific Region" onSelect={this.selectDropdown}>Asia/Pacific Region</MenuItem>
                    <MenuItem eventKey="Europe" onSelect={this.selectDropdown}>Europe</MenuItem>
                </DropdownButton>
                </div>
                
                <List className="list" items={this.props.items.sort((a, b) => a.name.localeCompare(b.name)).filter(this.filterItem)} />
            </div>
        )
    }
}

export default FilteredList;