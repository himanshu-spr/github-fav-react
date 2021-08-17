import React, { useCallback } from "react";
import { RepositoryListItemProps } from "../../../../interfaces";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import "./RepositoryListItem.css";
import { useDispatch } from "react-redux";
import { addRepository, removeRepository } from "../../../../redux";
import { getFavAction } from "../../../../helpers";

const RepositoryListItem = ({
  repository,
  isFavorite,
}: RepositoryListItemProps) => {
  const dispatch = useDispatch();

  const favChangeHandler = useCallback(() => {
    const favAction = getFavAction(repository);
    if (isFavorite) {
      dispatch(removeRepository(favAction));
    } else {
      dispatch(addRepository(favAction));
    }
  }, [isFavorite, repository, dispatch]);

  return (
    <>
      <tr key={repository.id}>
        <td className="image-data">
          <img
            src={repository.owner.avatarUrl}
            alt={repository.nameWithOwner}
          />
        </td>
        <td className="name-data">{repository.nameWithOwner}</td>
        <td className="description-data">{repository.description}</td>
        <td className="stars-data">{repository.stargazerCount}</td>
        <td onClick={favChangeHandler}>
          {isFavorite ? (
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
