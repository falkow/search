import React from 'react';
import { BookType } from '../types';

import styles from './style.module.scss';

export const DropdownItem = (props: BookType) => {
  return (
    <div
      // style={{ backgroundColor: 'blue' }}
      className='item'
      dangerouslySetInnerHTML={{ __html: props.author }}></div>
  );
};
