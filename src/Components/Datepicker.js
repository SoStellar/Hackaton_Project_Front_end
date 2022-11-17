import React from 'react';
import { Datepicker } from '@mobiscroll/react';

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

