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
            continent: "All",
            taste: "All",
            sorte: "Alphabetical"
        };
    }

    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        if (item.continent === this.state.continent || this.state.continent === "All") {
            if (item.taste === this.state.taste || this.state.taste === "All") {
                return item.name.toLowerCase().search(this.state.search) !== -1;
            }
        }
    }

    sortItem = (item) => {
        if (this.state.sorter === true) {
            a.name.localeCompare(b.name);
        }
    }

    // An event handling method for when an item in dropdown is selected
   selectDropdown = (eventKey) => {
        document.getElementById("continentDropdown").title = eventKey;

        this.setState({
            continent: eventKey
        })
   }

       // An event handling method for when an item in dropdown is selected
    selectDropdownTaste = (eventKey) => {
        document.getElementById("continentDropdown").title = eventKey;

        this.setState({
            taste: eventKey
        })
   }

    render() {
        return (
            <div className="filtered-list">
                <div class="searcher">
                <DropdownButton class="continentDropdown" id="continentDropdown" title={this.state.continent}>
                    <MenuItem eventKey="All" onSelect={this.selectDropdown}>All</MenuItem>
                    <MenuItem eventKey="The Americas" onSelect={this.selectDropdown}>The Americas</MenuItem>
                    <MenuItem eventKey="Europe" onSelect={this.selectDropdown}>Europe</MenuItem>
                    <MenuItem eventKey="Africa" onSelect={this.selectDropdown}>Africa</MenuItem>
                    <MenuItem eventKey="Asia/Pacific Region" onSelect={this.selectDropdown}>Asia/Pacific Region</MenuItem>
                    <MenuItem eventKey="Europe" onSelect={this.selectDropdown}>Europe</MenuItem>
                </DropdownButton>

                
                <DropdownButton class="tasteDropdown" id="tasteDropdown" title={"Taste"}>
                    <MenuItem eventKey="All" onSelect={this.selectDropdownTaste}>All</MenuItem>
                    <MenuItem eventKey="Sweet" onSelect={this.selectDropdownTaste}>Sweet</MenuItem>
                    <MenuItem eventKey="Savory" onSelect={this.selectDropdownTaste}>Savory</MenuItem>
                </DropdownButton>

                <DropdownButton class="sortDropdown" id="sortDropdown" title={this.state.sorte}>
                    <MenuItem eventKey="Yes" onSelect={this.selectDropdownTaste}>All</MenuItem>
                    <MenuItem eventKey="No" onSelect={this.selectDropdownTaste}>Sweet</MenuItem>
                    <MenuItem eventKey="Savory" onSelect={this.selectDropdownTaste}>Savory</MenuItem>
                </DropdownButton>

                <input type="text" placeholder="Type in a pancake name..." onChange={this.onSearch} />
                </div>

                
                
                <List className="list" items={this.props.items.filter(this.filterItem).sort(this.sortItem)} />
            </div>
        )
    }
}

export default FilteredList;