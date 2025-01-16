import React from "react";

function CharacterCard({ name, gender, birthYear }) {
    return (
        <div className="card">
            <div className="card-header">{name}</div>
            <div className="card-body">
                <p>Gender: {gender}</p>
                <p>Birth Year: {birthYear}</p>
            </div>
        </div>
    );
}

export default CharacterCard;
