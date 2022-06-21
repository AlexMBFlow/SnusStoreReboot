import React, {FC} from 'react';
import { Divider } from "antd";
import { AutoComplete } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useTypedSelector } from "../../../../redux/hooks/useTypedSelector";
import { useActions } from '../../../../redux/hooks/useActions';
import './SearchSnus.css';

const options = [];

export const SearchSnus: FC = () => {
    const {inputAC} = useActions()
    const {value} = useTypedSelector(state => state.inputReducer)
    const {snusItems} = useTypedSelector(state => state.snusReducer)

    //const dispatch = useDispatch<AppDispatch>()
    const handleChange = (e) => {
        inputAC(e)
    }
    //заполняем строку автокомплита нужными названиями снюсов
    let snusItemName = [];

    snusItems.forEach( el => snusItemName.push(el.name))

    if (!options.length) {
        [...new Set(snusItemName)].forEach( value => {
            options.push({value: value, key: uuidv4()})
        })
    }

    return (
        <div className='search-snus aside-item'>
            <div className="search-snus-wrap">
                <Divider className="price-filter-options__price" orientation="left">ПОИСК</Divider>
            </div>
            <div className="search-snus-input">
                <AutoComplete
                    style={{
                        width: "100%",
                    }}
                    options={options}
                    placeholder="Введите название снюса"
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onChange={handleChange}
                    value={value}
                />
            </div>
        </div>
    )
}