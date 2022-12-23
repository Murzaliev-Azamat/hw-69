import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectSelectedShow} from "../store/showsSlice";
import {fetchOneShow} from "../store/showsThunks";

const Show = () => {
  const {id} = useParams();
  const dispatch= useAppDispatch();
  const show = useAppSelector(selectSelectedShow);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneShow(parseInt(id)));
    }
  }, [dispatch, id]);

  let info = null;

  if (show) {
    info = (
      <div>
        <img src={show.image} alt=""/>
        <h2>{show.name}</h2>
        <p>{show.description}</p>
      </div>
    )
  }

  return (
    <div className="d-flex">
      {info}
    </div>
  );
};

export default Show;