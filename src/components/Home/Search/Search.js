import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Search = () => {
    return (
        <>
            <InputGroup className="mb-3">

                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
            </InputGroup>
        </>
    );
};

export default Search;