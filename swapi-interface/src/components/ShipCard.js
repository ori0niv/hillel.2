import React from "react";

function ShipCard({ name, model, manufacturer }) {
    return (
        <div className="card">
            <div className="card-header">{name}</div>
            <div className="card-body">
                <p>Model: {model}</p>
                <p>Manufacturer: {manufacturer}</p>
            </div>
        </div>
    );
}

export default ShipCard;
