/* eslint-disable react/prop-types */
// import React from 'react'

import PlayGraph from "./PlayGraph";

const ListItem = (props) => {
  return (
    <div className="p-4 bg-slate-950 rounded-lg mt-5 hover:bg-slate-800 transition transform duration-500 hover:-translate-y-1 hover:scale-105">
      <ul className="grid align-middle lg:grid-cols-3 sm:grid-cols-1">
        <li>

        <li className="sm:justify-center">
          <img src={props.thumbnail} className="w-50 h-full rounded-2xl sm:justify-center" />
        </li>
        <li className="p-5 align-middle justify-center flex">
          <h2 className="text-2xl">{props.title}</h2>
        </li>
        </li>
        <li>
        <li className="p-5 text-md">
          Unique Plays
          <p className="font-thin">
            {props.unique_plays.toLocaleString("en-US")}
          </p>
        </li>
        <li className="p-5 text-md">
          Total Plays
          <p className="font-thin">
            {props.total_plays.toLocaleString("en-US")}
          </p>
        </li>
        </li> 
        <li>
            <PlayGraph data={props}/>
        </li> 
      </ul>
      <label htmlFor="file" className="text-sm font-thin">Progress</label>
        <progress className="progress progress-primary w-full" id="progress-bar" value={65} max={100}></progress>
    </div>
  );
};

export default ListItem;
