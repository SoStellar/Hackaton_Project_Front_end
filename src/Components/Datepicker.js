import React from 'react';
import { Datepicker,setOpenPicker } from '@mobiscroll/react';

export default function DatepickerModal() {
    const props = { placeholder: 'Please Select...' };
    return (
        <>
        
            <Datepicker
                theme='ios'
                controls={['calendar', 'timegrid']}
                touchUi={false}
                inputProps={props}
                
                
            />
        </>
    )
}

