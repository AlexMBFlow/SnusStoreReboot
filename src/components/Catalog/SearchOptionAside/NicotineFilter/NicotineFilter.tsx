import React from 'react';
import { Checkbox, Divider } from "antd";
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { checkedListAC } from "../../../../redux/actionCreators/checkedListAC/checkedListAC";
import { setIndeterminateAC } from "../../../../redux/actionCreators/setIndeterminateAC/setIndeterminateAC";
import { setCheckAllAC } from "../../../../redux/actionCreators/setCheckAllAC/setCheckAllAC";
import { useTypedSelector } from "../../../../redux/hooks/useTypedSelector";
import './NicotineFilter.css';


const CheckboxGroup = Checkbox.Group;

export const NicotineFilter = () => {
    const dispatch = useDispatch()
    const tooltipText = '0-20мг легкий, 20-40мг средний, 40-60мг крепкий, 60+мг очень крепкий';

    const {defaultCheckedList} = useTypedSelector(state => state.nicotineReducer)
    const {plainOptions} = useTypedSelector(state => state.nicotineReducer)
    const {indeterminate} = useTypedSelector(state => state.nicotineReducer)
    const {checkAll} = useTypedSelector(state => state.nicotineReducer)

    const onChange = (list) => {
        dispatch(checkedListAC(list))
        dispatch(setIndeterminateAC(!!list.length && list.length < plainOptions.length))
        dispatch(setCheckAllAC(list.length === plainOptions.length))
    };

    const onCheckAllChange = (e) => {
        dispatch(checkedListAC(e.target.checked ? plainOptions : []))
        dispatch(setIndeterminateAC(false));
        dispatch(setCheckAllAC(e.target.checked))
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