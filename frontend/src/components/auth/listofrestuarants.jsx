import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class RestaurantsList extends React.Component {

    render() {
        const {  data, onRequestData } = this.props;

        return (
            <div>
                {data !== null ?
                    <div>
                        <h3>Welcome Foodie!!  </h3>
                        <table className="table table-striped">
                            <thead id="listrestuarant">
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Cost For 2 People</th>
                                    <th>Rating </th>
                                    <th>Meal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (function () {
                                        if (data === null) {
                                            const discover = document.querySelector('#explore');
                                            console.log(discover);
                                            discover.classList.add('d-none');
                                        }
                                    })()
                                }
                                {
                                    data.map(restaurant => {
                                        return (
                                            <tr key={data.indexOf(restaurant)}>
                                                <td>
                                                    <Link className="item" to={{ pathname: '/restaurant', state: {
                                                            name: restaurant.name,
                                                            place: restaurant.address,
                                                            priceforTwo: restaurant.priceforTwo,
                                                            rating: restaurant.rating,
                                                            vegOrnonveg: restaurant.vegOrnonveg
                                                        }
                                                    }} >
                                                        {restaurant.name}
                                                    </Link>
                                                </td>
                                                <td>{restaurant.address}</td>
                                                <td>{restaurant.priceforTwo}</td>
                                                <td>{restaurant.rating}</td>
                                                <td>{restaurant.vegOrnonveg}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    : <div>
                        <br />
                        <button id="explore" className="btn btn-primary btn-lg btn-block" onClick={onRequestData}>Discover Restuarants</button>
                        
                    </div>

                }
               

            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.fetching,
        data: state.data,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestData: () => dispatch({ type: 'API_CALL_REQUEST' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList)