import React from 'react';
import '../App/App.css'


const Card = (props) => {

    const { id, name, logo } = props.item

    return (
        <>
            <div
                onClick={() => props.goToCloset(name, id)}
                style={{ backgroundImage: `url("${logo}")`, backgroundSize: 'cover' }}
                className='card hvr-float'>

            </div>
            <div style={{ textAlign: 'center' }}>
                {props.editMode &&
                    <i className="fas fa-times-circle deleteIcon" onClick={() => props.handleDelete(id)}></i>
                }
            </div>
        </>
    )
}

export default Card