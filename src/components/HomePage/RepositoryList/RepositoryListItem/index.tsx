import React, { useCallback, useState } from "react";
import { RepositoryListItemProps } from "../../../../interfaces";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import "./RepositoryListItem.css";
import { useDispatch } from "react-redux";
import { addRepository, removeRepository } from "../../../../redux";

const RepositoryListItem = ({ repository }: RepositoryListItemProps) => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

  const favChangeHandler = useCallback(() => {
    if (favorite) {
      dispatch(removeRepository(repository));
    } else {
      dispatch(addRepository(repository));
    }

    setFavorite((prevState) => !prevState);
  }, [favorite, repository, dispatch]);

  return (
    <>
      <tr key={repository.id}>
        <td className="image-data">
          <img src={repository.avatar} alt={repository.full_name} />
        </td>
        <td className="name-data">{repository.full_name}</td>
        <td className="description-data">{repository.description}</td>
        <td className="stars-data">{repository.stars}</td>
        <td onClick={favChangeHandler}>
          {favorite ? (
            <IoHeart className="fav-select-fill-icon" />
          ) : (
            <IoHeartOutline className="fav-select-outline-icon" />
          )}
        </td>
      </tr>
    </>
  );
};

export default React.memo(RepositoryListItem);
