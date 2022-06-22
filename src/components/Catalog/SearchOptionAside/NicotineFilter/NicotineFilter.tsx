import React, { FC } from 'react';
import { Checkbox, Divider } from "antd";
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useTypedSelector } from "../../../../redux/hooks/useTypedSelector";
import { useActions } from '../../../../redux/hooks/useActions';
import './NicotineFilter.css';


const CheckboxGroup = Checkbox.Group;

export const NicotineFilter: FC = () => {
    const { checkedListAC, setIndeterminateAC, setCheckAllAC } = useActions()
    const tooltipText = '0-20мг легкий, 20-40мг средний, 40-60мг крепкий, 60+мг очень крепкий';
    const { plainOptions, indeterminate, checkAll, defaultCheckedList } = useTypedSelector(state => state.nicotineReducer)


    const onChange = (list) => {
        checkedListAC(list)
        setIndeterminateAC(!!list.length && list.length < plainOptions.length)
        setCheckAllAC(list.length === plainOptions.length)
    };

    const onCheckAllChange = (e) => {
        checkedListAC(e.target.checked ? plainOptions : [])
        checkedListAC(e.target.checked ? plainOptions : [])
        setIndeterminateAC(false)
        setCheckAllAC(e.target.checked)
    };

    return (
        <div className='nicotine-filter aside-item'>
            <Divider className='nicotine-filter__power ' orientation="left">КРЕПОСТЬ <Tooltip placement="rightBottom" color={"#108ee9"} title={tooltipText}><QuestionCircleOutlined /></Tooltip> </Divider>
            <div className="nicotine-filter-checkbox">
                <div className="nicotine-checkbox-list">
                    <CheckboxGroup style={{ flex: '0 1 auto' }}
                        options={plainOptions}
                        value={defaultCheckedList}
                        onChange={onChange}
                    />
                </div>
                <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    checked={checkAll}
                    style={{ paddingTop: "0.7rem" }}>

                    <span>Выбрать всё</span>
                </Checkbox>
            </div>
        </div>
    )
}