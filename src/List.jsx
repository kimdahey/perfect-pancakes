import React, { Component } from 'react';
import Pancake from './Pancake.jsx';

/*
    The list component will take the list of items passed in as a property
    and create an HTML list with those item. In this example, we are passing in the
    filtered produce list, but this component can be used for other types of items
    as long as it has a name.
*/
class List extends Component {
    renderList() {
        /*
            Javascript map will let you iterate and modify each item in a list.
            In this example, we are changing each item
            (ex. {name: "Apple", type: "Fruit"}) into a HTML list element.
        */

        const items = this.props.items.map(item => {
            return <li key={item.name}><Pancake item={item} /></li>
        });

        return items;
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default List;