import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';
import Toggle from "react-toggle-component";
import "react-toggle-component/styles.css"

class FilteredList extends Component {

    constructor(props) {
        super(props);
        // TODO add new key/value pair in the state to keep track of type
        // The state is just a list of key/value pair (like a hashmap)
        this.state = {
            continent: "All",
            taste: "All",
            alphabetical: true
        };
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        if (item.continent === this.state.continent || this.state.continent === "All") {
            if (item.taste === this.state.taste || this.state.taste === "All") {
                return item.name.toLowerCase().search(this.state.search) !== -1;
            }
        }
    }

    generateList = () => {
        
    }

    // An event handling method for when an item in continent dropdown is selected
   selectDropdown = (eventKey) => {
        document.getElementById("continentDropdown").title = eventKey;

        this.setState({
            continent: eventKey
        })
   }

    // An event handling method for when an item in taste dropdown is selected
    selectDropdownTaste = (eventKey) => {
        document.getElementById("continentDropdown").title = eventKey;

        this.setState({
            taste: eventKey
        })
    }

    render() {
        let lister;

        if (this.state.alphabetical) {
            lister = <List className="list" items={this.props.items.filter(this.filterItem).sort((a, b) => a.name.localeCompare(b.name))} />;
        } else {
            lister = <List className="list" items={this.props.items.filter(this.filterItem)} />;
        }

        return (
            <div className="filtered-list">
                <div class="searcher">
                <DropdownButton className="continentDropdown" id="continentDropdown" title={"Continent of Origin: " + this.state.continent}>
                    <MenuItem eventKey="All" onSelect={this.selectDropdown}>All</MenuItem>
                    <MenuItem eventKey="The Americas" onSelect={this.selectDropdown}>The Americas</MenuItem>
                    <MenuItem eventKey="Europe" onSelect={this.selectDropdown}>Europe</MenuItem>
                    <MenuItem eventKey="Africa" onSelect={this.selectDropdown}>Africa</MenuItem>
                    <MenuItem eventKey="Asia/Pacific Region" onSelect={this.selectDropdown}>Asia/Pacific Region</MenuItem>
                    <MenuItem eventKey="Europe" onSelect={this.selectDropdown}>Europe</MenuItem>
                </DropdownButton>
                
                <p></p>

                <DropdownButton label="Taste: " className="tasteDropdown" id="tasteDropdown" title={"Taste: " + this.state.taste}>
                    <MenuItem eventKey="All" onSelect={this.selectDropdownTaste}>All</MenuItem>
                    <MenuItem eventKey="Sweet" onSelect={this.selectDropdownTaste}>Sweet</MenuItem>
                    <MenuItem eventKey="Savory" onSelect={this.selectDropdownTaste}>Savory</MenuItem>
                </DropdownButton>
                
                <p></p>
                <Toggle label="Alphabetical Sorting: " checked={this.state.alphabetical} onToggle={value => { this.setState( { alphabetical : !this.state.alphabetical } )}}/>

                </div>
                
                {lister}
                
            </div>
        )
    }
}

export default FilteredList;