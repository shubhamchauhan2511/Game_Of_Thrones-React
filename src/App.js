import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../src/components/ui/Header'
import CharacterGrid from '../src/components/characters/CharacterGrid'
import Search from '../src/components/ui/Search'
import Axios from 'axios';

const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {

      // console.log('https://api.got.show/api/show/characters');
      const result = await Axios(`https://api.got.show/api/show/characters?name=${query}`)
      // const result = await Axios(`https://api.got.show/api/general/characters/${query}`)
      // console.log(result.data);
      // console.log(JSON.stringify(result.data));
      // setNames(result.data)
      // console.log(result.data.show);
      // setItems(result.data.show)

      setItems(result.data)
      setIsLoading(false)

    }
    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
