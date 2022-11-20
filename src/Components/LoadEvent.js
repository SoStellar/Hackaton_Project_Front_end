import { React, useMemo, useCallback } from 'react';
import { localeTh, Eventcalendar } from '@mobiscroll/react';
import { Container } from 'react-bootstrap';


export default function LoadEvents() {
    const view = useMemo(() => {
        return {
            timeline: {
                type: 'day'
            }
        };
    }, []);

    const myEvents = useMemo(() => {
        return [{
            start: '2022-11-18T10:30',
            end: '2022-11-18T13:00',
            title: 'Tire change',
            color: '#7a5886',
            
            taskType: 'material-repeat',
            resource: 1
        }]
    });

    const colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '', '#009788', '#4baf4f', '#7e5d4e'];

    const myResources = useMemo(() => {
        return [{
            id: 1,
            name: '',
            color: '#239a21'
        }, {
            id: 2,
            name: 'Kate',
            color: '#01adff'
        }, {
            id: 3,
            name: 'John',
            color: '#ff0101'
        }];
    }, []);

    const myScheduleEvent = useCallback((data) => {
        const ev = data.original;
        const color = data.color;

        return <div className="md-timeline-template-event" style={{ borderColor: color, background: color }}>
            <div className="md-timeline-template-event-cont">
                <span className={"mbsc-icon mbsc-font-icon mbsc-icon-" + ev.taskType} style={{ background: color }}></span>
                <span className="md-timeline-template-time" style={{ color: color }}>{data.start}</span>
                <span className="md-timeline-template-title">{ev.title}</span>
            </div>
        </div>
    });

    const myDefaultEvent = useCallback(() => {
        return {
            taskType: 'cogs'
        };
    });

    return (
        <>
            <Container>
                <Eventcalendar
                    theme="ios"
                    themeVariant="light"
                    locale={localeTh}
                    view={view}
                    data={myEvents}
                    resources={myResources}
                    renderScheduleEvent={myScheduleEvent}
                    extendDefaultEvent={myDefaultEvent}
                    cssClass="md-timeline-template"
                />
            </Container>

        </>
    );
}
