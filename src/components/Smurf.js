import React from 'react';

const Smurf = (props)=> {
    // const { smurf } = props;
    
    return(<div data-testid="smurf" className="card">
        <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
            <hr/>
            <p className="card-text"><b>Position:</b> {props.position}</p>
            <p className="card-text"><b>Nickname:</b> {props.nickname}</p>
            <p className="card-text"><b>Description:</b> {props.description}</p>
        </div>
    </div>);
}

export default Smurf;