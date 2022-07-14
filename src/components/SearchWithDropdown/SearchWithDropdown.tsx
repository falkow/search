import React from 'react';
import { useState } from 'react';
import { DropdownList } from '../DropdownList/DropdownList';
import styles from './style.module.scss';

import { Product, Products, BookType, SearchBarProps } from '../types';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const { search, searchWrapper, searchIcon, searchInput, clearBtn } = styles;

export const SearchWithDropdown = ({ data }: SearchBarProps) => {
  const [filteredData, setFilteredData] = useState<BookType[]>([]);
  const [enteredWord, setEnteredWord] = useState('');

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setEnteredWord(searchWord);
    const searchWordLengthLimit = 3;
    const newobj = [...data];
    const reg = new RegExp(`(${searchWord})`, 'gi');
    const newFilter = newobj
      .sort((a: BookType, b: BookType) => {
        if (a.author > b.author) return 1;
        if (a.author < b.author) return -1;
        return 0;
      })
      .filter((value: BookType) =>
        value.author.toLowerCase().includes(searchWord.toLowerCase())
      )
      .map((value) => {
        let author = value.author.replace(reg, `<b><i><mark>$&</mark></i></b>`);
        return { ...value, author };
      });

    searchWord.length <= searchWordLengthLimit
      ? setFilteredData([])
      : setFilteredData(newFilter);
  };

  const clearInput = () => {
    setFilteredData([]);
    setEnteredWord('');
  };

  return (
    <div className={search}>
      <div className={searchWrapper}>
        <input
          className={searchInput}
          value={enteredWord}
          type='text'
          onChange={handleFilter}
        />
        <div className={searchIcon}>
          {!enteredWord ? (
            <SearchIcon />
          ) : (
            <CloseIcon id={clearBtn} onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && <DropdownList data={filteredData} />}
    </div>
  );
};
