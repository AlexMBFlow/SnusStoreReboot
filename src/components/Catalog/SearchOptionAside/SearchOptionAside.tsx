import React, { FC } from 'react';
import { PriceFilter } from './PriceFilter/PriceFilter';
import { NicotineFilter } from './NicotineFilter/NicotineFilter';
import { SearchSnus } from './SearchSnus/SearchSnus';
import './SearchOptionAside.css';


export const SearchOptionAside: FC = () => {
    return (
        <div className='search-options-aside'>            
            <SearchSnus/>
            <PriceFilter/>
            <NicotineFilter/>
        </div>
    )
}