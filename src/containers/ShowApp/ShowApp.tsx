import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectShows, selectShowsFetchLoading} from "../../store/showsSlice";
import {fetchShows} from "../../store/showsThunks";
import {Link, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Show from "../../components/Show";

const ShowApp = () => {
  const dispatch= useAppDispatch();
  const shows = useAppSelector(selectShows);
  const fetchLoading = useAppSelector(selectShowsFetchLoading);
  const [showName, setShowName] = useState<string>('');

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShowName(value)
    dispatch(fetchShows(value));
  };

  return (
    <>
    <div className="p-1 ps-2 bg-primary text-white rounded-3 mt-2">
      <h2>TV Shows</h2>
    </div>
      <div className="input-group mb-3 mt-2">
        <span className="input-group-text">Search for TV show:</span>
        <input type="text" value={showName} className="form-control" onChange={onTextFieldChange}/>
      </div>
      <div className="border border-1 ">
        <ul>
          {shows.map((show) => (
            <li key={show.id}><Link to={"/shows/" + show.id}>{show.name}</Link></li>
          ))}
        </ul>
      </div>
      <Routes>
        <Route path="/" element={(
          <Home/>
        )}/>
        <Route path="/shows/:id" element={(
          <Show/>
        )}/>
      </Routes>
    </>
  );
};

export default ShowApp;