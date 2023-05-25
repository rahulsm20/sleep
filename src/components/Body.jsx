import {useState,useMemo} from 'react'
import ListItem from "./ListItem"
import data from '../assets/data.json'
const Body = () => {
  const [query,setQuery]=useState('')

  const filteredSounds = useMemo(() => {
    return data.filter((sound) => {
      return sound.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [query]);
  
  const list= filteredSounds.map((listitem)=>{
    return(
      <ListItem title={listitem.title} thumbnail={listitem.thumbnail} key={listitem.id} unique_plays={listitem.unique_plays} total_plays={listitem.total_plays}/>
    )
  })
  
  return (
    <div className="grid grid-cols-1 m-10 p-5">
      <h1 className='text-5xl mb-5 font-thin'>
      Dashboard
      </h1>
        <input placeholder="Search a sound" className="p-5 rounded-xl input w-50 bg-white text-black border-6 border-cyan-200"  value={query}
              onChange={(event) => {
              setQuery(event.target.value);
            }}/>
        <div className="grid lg:grid-cols-2  gap-10 sm:grid-cols-1">
        {list}
        </div>
    </div>
  )
}

export default Body