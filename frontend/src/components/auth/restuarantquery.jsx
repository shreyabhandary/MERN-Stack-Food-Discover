import React, { useState } from 'react';
import axios from 'axios';
const Form = () => {
    const [User, setUser] = useState({
        name: 'Hee',
        mobileNo: 0,
        query: 0
    });

    
    const onSubmit = (e) => {
        e.preventDefault();
    
        axios.post('http://localhost:5000/submitQuery', User)
            .then(res =>{
                if(res.data === 'Remarks Updated') alert('Remarks completed');
                else alert('Submitted');
            })
            .catch(err => console.log('Error: ' + err))

    }
    return (
        <div className="query">
            <h4>QUERIES IF ANY</h4>
            <br />
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name"> Name</label>
                    <input className="form-control form-control-lg" id="name" type="text" required
                        onChange={(e) =>
                            setUser({ ...User, name: e.target.value })} />
                </div>

                
                <br />
                <div className="form-group">
                    <label htmlFor="mobileNo"> Mobile No</label>
                    <input className="form-control form-control-lg" id="mobileNo" type="number"  required
                        onChange={(e) =>
                            setUser({ ...User, mobileNo: parseInt(e.target.value) })} />
                </div>

                <br />
                <div className="form-group">
                    <label htmlFor="query">Remarks</label>
                    <input className="form-control form-control-lg" id="query" placeholder="If any" type="text" required
                        onChange={(e) =>
                            setUser({ ...User, query: e.target.value })} />
                </div>

                <br />
                <div className="form-group">
                    <input className="btn btn-success" type="submit" value="Submit" />
                </div>
                <br />
            </form>
        </div>
    )
}

export default Form;