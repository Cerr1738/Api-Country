import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries @rest(type: "Country", path: "all") {
      name @type(name: "Name") {
        common
      }
      cca2
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($name: String!) {
    country(name: $name) @rest(type: "Country", path: "name/{args.name}?fullText=true") {
      name @type(name: "Name") {
        common
      }
      population
      area
      gdp
  
  
    }
  }
`;