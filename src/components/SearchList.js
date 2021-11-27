import React from 'react';
import Card from './Card';

function SearchList(props) {
    const {filteredPersons} = props;
    const filtered = filteredPersons.map(person => <Card key={person.id} person={person}/>);
    return (
        <div>
            {filtered}
        </div>
    );
}

export default SearchList;