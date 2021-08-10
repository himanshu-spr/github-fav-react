import React, { useCallback } from "react";
import { FavoriteListItemProps } from "../../../../interfaces";
import "./FavoriteListItem.css";
import { useDispatch } from "react-redux";
import { removeRepository } from "../../../../redux";
import useRepository from "../../../../hooks/useRepository";

const FavoriteListItem = ({ favorite }: FavoriteListItemProps) => {
  const dispatch = useDispatch();
  const { status, data, error } = useRepository(favorite);

  const removeHandler = useCallback(() => {
    dispatch(removeRepository(favorite));
  }, [dispatch, favorite]);

  if (status === "loading") {
    return <p className="loading">Loading...</p>;
  }

  if (status === "error" && error) {
    return <p className="error">{error.message}</p>;
  }

  if (!data) return null;

  return (
    <>
      <tr key={data.id}>
        <td className="fav-image-data">
          <img src={data.avatar} alt={data.full_name} />
        </td>
        <td className="fav-name-data">{data.full_name}</td>
        <td className="fav-description-data">{data.description}</td>
        <td className="fav-stars-data">{data.stars}</td>
        <td>
          <button className="remove-button" onClick={removeHandler}>
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default React.memo(FavoriteListItem);
