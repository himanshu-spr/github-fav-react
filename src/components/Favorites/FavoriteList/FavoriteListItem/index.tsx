import React, { useCallback } from "react";
import { FavoriteListItemProps } from "../../../../interfaces";
import "./FavoriteListItem.css";
import { useDispatch } from "react-redux";
import { removeRepository } from "../../../../redux";

const FavoriteListItem = ({ favorite }: FavoriteListItemProps) => {
  const dispatch = useDispatch();

  const removeHandler = useCallback(() => {
    dispatch(removeRepository(favorite));
  }, [dispatch, favorite]);

  return (
    <>
      <tr key={favorite.id}>
        <td className="fav-image-data">
          <img src={favorite.avatar} alt={favorite.full_name} />
        </td>
        <td className="fav-name-data">{favorite.full_name}</td>
        <td className="fav-description-data">{favorite.description}</td>
        <td className="fav-stars-data">{favorite.stars}</td>
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
