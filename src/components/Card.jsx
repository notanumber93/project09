import React from 'react';

const Card = () => {
    return (

        <div className="card mb-3" style={{width: "18rem"}}>
            <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" className="card-img-top" alt="img"></img>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;