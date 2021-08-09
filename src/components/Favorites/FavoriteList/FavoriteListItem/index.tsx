import React, { useCallback, useEffect, useState } from "react";
import { FavoriteListItemProps, Repository } from "../../../../interfaces";
import "./FavoriteListItem.css";
import { useDispatch } from "react-redux";
import { removeRepository } from "../../../../redux";
import { getFavData } from "../../../../clients/rest";

const FavoriteListItem = ({ favorite }: FavoriteListItemProps) => {
  const dispatch = useDispatch();
  const [favoriteData, setFavoriteData] = useState<Repository | null>(null);

  useEffect(() => {
    let mounted = true;
    async function getData() {
      const data = await getFavData(favorite);
      if (mounted) {
        setFavoriteData(data);
      }
    }
    getData();

    return () => {
      mounted = false;
    };
  }, []);

  const removeHandler = useCallback(() => {
    dispatch(removeRepository(favorite));
  }, [dispatch, favorite]);

  return (
    favoriteData && (
      <>
        <tr key={favoriteData.id}>
          <td className="fav-image-data">
            <img src={favoriteData.avatar} alt={favoriteData.full_name} />
          </td>
          <td className="fav-name-data">{favoriteData.full_name}</td>
          <td className="fav-description-data">{favoriteData.description}</td>
          <td className="fav-stars-data">{favoriteData.stars}</td>
          <td>
            <button className="remove-button" onClick={removeHandler}>
              Remove
            </button>
          </td>
        </tr>
      </>
    )
  );
};

export default React.memo(FavoriteListItem);
