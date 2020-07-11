import React from 'react'

const CharacterItem = ({ item }) => {

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.image} alt="" />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.actor}
                        </li>
                        <li>
                            <strong>House:</strong> {item.house}
                        </li>
                        <li>
                            <strong>Origin:</strong> {item.origin}
                        </li>
                        <li>
                            <strong>First Seen:</strong> {item.first_seen}
                        </li>
                        <li>
                            <strong>Father:</strong> {item.father}
                        </li>
                        <li>
                            <strong>Age:</strong> {item.age?.age}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
