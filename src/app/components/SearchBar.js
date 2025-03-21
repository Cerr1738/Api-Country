'use client'; 
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  width: 500px;
  margin-left: 370px;
  margin-bottom:20px;
`;

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <Input
      type="text"
      placeholder="Search countries..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}