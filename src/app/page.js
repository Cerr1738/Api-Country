'use client';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { GET_COUNTRIES } from '../queries/countries';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import Link from 'next/link';

const Table = styled.table`
  width: 50%;
  border-collapse: collapse;
  margin: auto;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  width:60%;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredCountries = data.countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const totalItems = filteredCountries.length;
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <h1>Country List</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Code</Th>
          </tr>
        </thead>
        <tbody>
          {paginatedCountries.map((country) => (
            <tr key={country.cca2}>
              <Td>
                <Link href={`/country/${encodeURIComponent(country.name.common)}`}>
                  {country.name.common}
                </Link>
              </Td>
              <Td>{country.cca2}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}