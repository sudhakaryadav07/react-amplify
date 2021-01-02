/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoleModelsByCategories = /* GraphQL */ `
  query GetRoleModelsByCategories($categories: [String!]!) {
    getRoleModelsByCategories(categories: $categories) {
      name
      categories
      summary
      links
      images
    }
  }
`;
export const getRoleModelsByName = /* GraphQL */ `
  query GetRoleModelsByName($name: String!) {
    getRoleModelsByName(name: $name) {
      name
      categories
      summary
      links
      images
    }
  }
`;
