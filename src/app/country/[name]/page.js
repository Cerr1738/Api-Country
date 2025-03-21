'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { GET_COUNTRY_DETAILS } from '../../../queries/countries';
import Link from 'next/link';

const Container = styled.div`
  padding: 20px;
`;

export default function CountryDetails() {
  const params = useParams();
  const { name } = params;
  const decodedName = decodeURIComponent(name); 

  const { data, loading, error } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { name: decodedName }, 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data.country;


  if (!country) {
    return <p>Error: Country not found.</p>;
  }

  return (
    <Container>
      <h1>{country.name}</h1>
      <p>Population: {country.population} 4,000,000</p>
      <p>Area: {country.area} 80000km²</p>
      <p>GDP: {country.gdp} 33.0</p>
     
    
    
      <Link href="/">Back to Country List</Link>
    </Container>
  );
}