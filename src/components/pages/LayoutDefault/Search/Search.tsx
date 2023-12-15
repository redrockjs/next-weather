import InputSearch from '@ui/InputSearch/InputSearch';
import { useEffect, useState } from 'react';

function Search() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <InputSearch onChange={setSearch} />
    </>
  );
}

export default Search;
