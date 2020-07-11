import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ items, isLoading }) => {


    // console.log(JSON.stringify(item1));
    
    return isLoading ? (<h1 className="center">Loading...</h1>) : (<section className="cards">
        {items.map(item => (

            <CharacterItem key={item._id} item={item}></CharacterItem>
))}
    </section>)
}

export default CharacterGrid
