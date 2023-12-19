import s from './Search.module.scss';
import InputSearch from '@ui/InputSearch/InputSearch';
import { useEffect, useState } from 'react';

function Search() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleSearch = () => {
    console.log('click');
  };

  return (
    <>
      <InputSearch className={s.Search} onChange={setSearch} onSearch={handleSearch} />
    </>
  );
}

export default Search;
