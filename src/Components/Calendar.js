import {React} from "react";
import { Eventcalendar} from '@mobiscroll/react';

export default function Calendar() {

    const myData = [{
        title: 'Fixed event',
        start: '2022-11-18T00:00',
        end: '2022-11-19T00:00',
        color: '#9e9e9e',
        editable: false
    }, {
        title: 'Drag me',
        start: '2022-11-03T00:00',
        end: '2022-11-05T00:00',
        color: '#cc9900'
    }, {
        title: 'Resize me',
        start: '2022-11-24T00:00',
        end: '2022-11-29T00:00',
        color: '#ca4747'
    }, {
        title: 'Move me around',
        start: '2022-11-11T00:00',
        end: '2022-11-14T00:00',
        color: '#339966'
    }];

    return (
        <>
        <Eventcalendar
        theme="ios"
        colors={"#79D1C3"}
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        eventDelete={true}
   />
   </>
        
    ); 
}
