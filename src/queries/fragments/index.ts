import { gql } from "graphql-request";

export const REPOSITORY_DATA = gql`
  fragment RepositoryData on Repository {
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
