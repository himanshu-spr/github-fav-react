import { gql } from "graphql-request";

export const REPOSITORY_DATA = gql`
  fragment RepositoryData on Comment {
    id
    description
    stargazerCount
    url
    owner {
      login
      avatarUrl
    }
    name
    nameWithOwner
  }
`;
