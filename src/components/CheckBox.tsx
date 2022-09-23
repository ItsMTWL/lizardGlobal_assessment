import { Checkbox } from 'antd';
import React, { useState } from 'react';

import {CheckboxProps} from "../types/propTypes"

function CheckBox(props:CheckboxProps) {
    const [Checked, setChecked] = useState(props.filter)


    const categories =
        Array.from(props.catList.map((item) => item.categories)          // returns aray of array
            .reduce((A, list) => A.concat(list), [])                    // returns single array of category id and name
            .reduce((A, item) => A.add(item.name), new Set()))          // add to set to filter out repeats



    // checks if current category is already checked ( returns more than index + 1 if exist, else 0)
    const inChecked = (value: string) => Checked.length > 0 ?
        Checked.map((name, index) => name === value ? index + 1 : 0)
            .reduce((A, v) => A + v) :
        0

    const boolCheck = (value: string) => inChecked(value) > 0 

    const handleToggle = (value:string) => {

        const newChecked = [...Checked]
        
        //use the values from previous check to see if it is already checked 
        if (inChecked(value) === 0) {
            newChecked.push(value)
        } else {
            newChecked.splice(inChecked(value) - 1, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
    }



    // creates a checkbox for user interface which would allow user to toggle filters
    return <div>
        {categories.map((value:any , key) => (
            <React.Fragment key={key}>
                <Checkbox
                    onChange={() => handleToggle(value)}
                    type="checkbox"
                    checked={boolCheck(value)}
                />
                <span>{value}</span> <br />
            </React.Fragment>
        ))}
    </div>
}

export default CheckBox;