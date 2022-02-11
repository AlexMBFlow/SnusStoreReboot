import React from 'react';
import { PriceFilter } from './PriceFilter/PriceFilter';
import { NicotineFilter } from './NicotineFilter/NicotineFilter';
import { SearchSnus } from './SearchSnus/SearchSnus';
import './SearchOptionAside.css';


export const SearchOptionAside = () => {
    return (
        <div className='search-options-aside'>
            <SearchSnus/>
            <PriceFilter/>
            <NicotineFilter/>
        </div>
    )
}