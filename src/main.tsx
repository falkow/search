import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import dataSearch2 from './components/Data.json';
import { SearchWithDropdown } from './components/SearchWithDropdown/SearchWithDropdown';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchWithDropdown data={dataSearch2} />
  </React.StrictMode>
);
