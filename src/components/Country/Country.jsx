import React from 'react';

const Country = ({country}) => {
    const {name, flags} = country;
    return (
        <div>
            <img src={flags.png} alt="" />
            <h3>{name.common}</h3>
            <button>Show Details</button>
        </div>
    );
};

export default Country;