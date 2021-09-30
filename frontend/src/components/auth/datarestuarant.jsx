import React from 'react';
import { useLocation } from 'react-router-dom';
import RestaurantForm from './restuarantquery.jsx';


const Data = () => {

    const location = useLocation();
    const { name, priceforTwo, rating, vegOrnonveg } = location.state;

    return (
        <div>
            <br />
            <div className="restuarant-data">
                <h1> Welcome to   {name} </h1>
                <h3>Cost For Two Person: {priceforTwo}</h3>
                <h3>Rating: {rating}</h3>
                <h3>Meal: {vegOrnonveg} </h3>
            </div>
            <br />
            <RestaurantForm />
        </div>
    )
}

export default Data;