import React from 'react';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import { BookType, SearchBarProps } from '../types';

import styles from './style.module.scss';

export const DropdownList = ({ data }: SearchBarProps) => {
  return (
    <div className='dropdownList'>
      {data.map((item: BookType, index: number) => {
        return <DropdownItem {...item} key={index} />;
      })}
    </div>
  );
};
