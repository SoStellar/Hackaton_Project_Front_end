import { React, useMemo, useState, useCallback, useRef } from 'react';
import {
    Eventcalendar, snackbar, setOptions, Popup, Button, Input,
    Textarea, Switch, Datepicker, SegmentedGroup, SegmentedItem,
    localeTh
} from '@mobiscroll/react';
import { Container } from 'react-bootstrap';

setOptions({
    locale: localeTh,
    theme: 'ios',
    themeVariant: 'light'
});

const now = new Date();
const defaultEvents = [{
    id: 1,
    start: '2022-11-08T13:00',
    end: '2022-11-08T13:45',
    title: 'พีระวิทย์',
    description: 'อุดฟัน',
    allDay: false,
    free: true,
    color: '#009788'
}, {
    id: 2,
    start: '2022-11-17T15:00',
    end: '2022-11-17T16:00',
    title: 'แมรี่',
    description: 'ถอนฟัน 1 ซี่',
    allDay: false,
    free: false,
    color: '#ff9900'
}];

const viewSettings = {
    calendar: { labels: true }
};
const responsivePopup = {
    medium: {
        display: 'anchored',
        width: 400,
        fullScreen: false,
        touchUi: false
    }
};
const colorPopup = {
    display: 'bubble',
    touchUi: false,
    button: [],
    placeholder: "Please Select..."

}
const colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '', '#009788', '#4baf4f', '#7e5d4e'];

export default function Timeline() {
    const [myEvents, setMyEvents] = useState(defaultEvents);
    const [tempEvent, setTempEvent] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [anchor, setAnchor] = useState(null);
    const [start, startRef] = useState(null);
    const [end, endRef] = useState(null);
    const [popupEventTitle, setTitle] = useState('');
    const [popupEventDescription, setDescription] = useState('');
    const [popupEventAllDay, setAllDay] = useState(true);
    const [popupEventDate, setDate] = useState([]);
    const [popupEventStatus, setStatus] = useState('busy');
    const [mySelectedDate, setSelectedDate] = useState(now);
    const [colorPickerOpen, setColorPickerOpen] = useState(false);
    const [colorAnchor, setColorAnchor] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');
    const [tempColor, setTempColor] = useState('');
    const colorPicker = useRef();
    const colorButtons = useMemo(() => [
        'cancel',
        {
            text: 'Set',
            keyCode: 'enter',
            handler: () => {
                setSelectedColor(tempColor);
                setColorPickerOpen(false);
            },
            cssClass: 'mbsc-popup-button-primary'
        }
    ], [tempColor]);

    const saveEvent = useCallback(() => {
        const newEvent = {
            id: tempEvent.id,
            title: popupEventTitle,
            description: popupEventDescription,
            start: popupEventDate[0],
            end: popupEventDate[1],
            allDay: popupEventAllDay,
            status: popupEventStatus,
            color: tempEvent.color,
            color: selectedColor
        };
        if (isEdit) {
            // update the event in the list
            const index = myEvents.findIndex(x => x.id === tempEvent.id);;
            const newEventList = [...myEvents];


            newEventList.splice(index, 1, newEvent);
            setMyEvents(newEventList);
            // here you can update the event in your storage as well
            // ...
        } else {
            // add the new event to the list
            setMyEvents([...myEvents, newEvent]);
            // here you can add the event to your storage as well
            // ...
        }
        setSelectedDate(popupEventDate[0]);
        // close the popup
        setOpen(false);
    }, [isEdit, myEvents, popupEventAllDay, popupEventDate, popupEventDescription, popupEventStatus, popupEventTitle, tempEvent, selectedColor]);

    const deleteEvent = useCallback((event) => {
        setMyEvents(myEvents.filter(item => item.id !== event.id));
        setTimeout(() => {
            snackbar({
                button: {
                    action: () => {
                        setMyEvents(prevEvents => [...prevEvents, event]);
                    },
                    text: 'Undo'
                },
                message: 'Event deleted'
            });
        });
    }, [myEvents]);

    const loadPopupForm = useCallback((event) => {
        setTitle(event.title);
        setDescription(event.description);
        setDate([event.start, event.end]);
        setAllDay(event.allDay || false);
        setStatus(event.status || 'busy');
        setSelectedColor(event.color || '');
    }, []);

    // handle popup form changes

    const titleChange = useCallback((ev) => {
        setTitle(ev.target.value);
    }, []);

    const descriptionChange = useCallback((ev) => {
        setDescription(ev.target.value);
    }, []);

    const allDayChange = useCallback((ev) => {
        setAllDay(ev.target.checked);
    }, []);

    const dateChange = useCallback((args) => {
        setDate(args.value);
    }, []);

    const statusChange = useCallback((ev) => {
        setStatus(ev.target.value);
    }, []);

    const onDeleteClick = useCallback(() => {
        deleteEvent(tempEvent);
        setOpen(false);
    }, [deleteEvent, tempEvent]);

    // scheduler options

    const onSelectedDateChange = useCallback((event) => {
        setSelectedDate(event.date);
    });

    const onEventClick = useCallback((args) => {
        setEdit(true);
        setTempEvent({ ...args.event });
        // fill popup form with event data
        loadPopupForm(args.event);
        setAnchor(args.domEvent.target);
        setOpen(true);
    }, [loadPopupForm]);

    const onEventCreated = useCallback((args) => {
        // createNewEvent(args.event, args.target)
        setEdit(false);
        setTempEvent(args.event)
        // fill popup form with event data
        loadPopupForm(args.event);
        setAnchor(args.target);
        // open the popup
        setOpen(true);
    }, [loadPopupForm]);

    const onEventDeleted = useCallback((args) => {
        deleteEvent(args.event)
    }, [deleteEvent]);

    const onEventUpdated = useCallback((args) => {
        // here you can update the event in your storage as well, after drag & drop or resize
        // ...
    }, []);

    // datepicker options
    const controls = useMemo(() => popupEventAllDay ? ['date'] : ['datetime'], [popupEventAllDay]);
    const respSetting = useMemo(() => popupEventAllDay ? {
        medium: {
            controls: ['calendar'],
            touchUi: false
        }
    } : {
        medium: {
            controls: ['calendar', 'time'],
            touchUi: false
        }
    }, [popupEventAllDay]);

    // popup options
    const headerText = useMemo(() => isEdit ? 'Edit event' : 'New Event', [isEdit]);
    const popupButtons = useMemo(() => {
        if (isEdit) {
            return [
                'cancel',
                {
                    handler: () => {
                        saveEvent();
                    },
                    keyCode: 'enter',
                    text: 'Save',
                    cssClass: 'mbsc-popup-button-primary'
                }
            ];
        }
        else {
            return [
                'cancel',
                {
                    handler: () => {
                        saveEvent();
                    },
                    keyCode: 'enter',
                    text: 'Add',
                    cssClass: 'mbsc-popup-button-primary' 
                }
            ];
        }
    }, [isEdit, saveEvent]);

    

    const onClose = useCallback(() => {
        if (!isEdit) {
            // refresh the list, if add popup was canceled, to remove the temporary event
            setMyEvents([...myEvents]);
        }
        setOpen(false);
    }, [isEdit, myEvents]);

    const selectColor = useCallback((color) => {
        setTempColor(color)
    }, []);

    const openColorPicker = useCallback((ev) => {
        selectColor(selectedColor || '');
        setColorAnchor(ev.currentTarget);
        setColorPickerOpen(true);
    }, [selectColor, selectedColor]);

    const changeColor = useCallback((ev) => {
        const color = ev.currentTarget.getAttribute('data-value');
        selectColor(color);
        if (!colorPicker.current.s.buttons.length) {
            setSelectedColor(color);
            setColorPickerOpen(false);
        }
    }, [selectColor, setSelectedColor]);

    return (
        <>
        <Container>
        <Eventcalendar

            view={viewSettings}
            data={myEvents}
            clickToCreate="double"
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            selectedDate={mySelectedDate}
            onSelectedDateChange={onSelectedDateChange}
            onEventClick={onEventClick}
            onEventCreated={onEventCreated}
            onEventDeleted={onEventDeleted}
            onEventUpdated={onEventUpdated}
        />
        <Popup
            display="bottom"
            fullScreen={true}
            contentPadding={false}
            headerText={headerText}
            anchor={anchor}
            buttons={popupButtons}
            isOpen={isOpen}
            onClose={onClose}
            responsive={responsivePopup}
        >
            <div className="mbsc-form-group">
                <Input label="Title" value={popupEventTitle} onChange={titleChange} />
                <Textarea label="Description" value={popupEventDescription} onChange={descriptionChange} />
            </div>
            <div className="mbsc-form-group">
                <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} />
                <Input ref={startRef} label="Starts" />
                <Input ref={endRef} label="Ends" />
                <Datepicker
                    select="range"
                    controls={controls}
                    touchUi={true}
                    startInput={start}
                    endInput={end}
                    showRangeLabels={false}
                    responsive={respSetting}
                    onChange={dateChange}
                    value={popupEventDate}
                />
                <div onClick={openColorPicker} className="mbsc-color-scroll-cont mbsc-w-p  mbsc-comp m-3">
                    <div className="color-label">Color</div>
                    <div className="mbsc-color-item-c" style={{ backgroundColor: selectedColor }}></div>
                </div>
                <SegmentedGroup onChange={statusChange}>
                    <SegmentedItem value="busy" checked={popupEventStatus === 'busy'}>Show as busy</SegmentedItem>
                    <SegmentedItem value="free" checked={popupEventStatus === 'free'}>Show as free</SegmentedItem>
                </SegmentedGroup>
                {isEdit ? <div className="mbsc-button-group"><Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>Delete event</Button></div> : null}
            </div>
        </Popup>
        <Popup
            display="bottom"
            contentPadding={false}
            showArrow={false}
            showOverlay={false}
            anchor={colorAnchor}
            isOpen={colorPickerOpen}
            buttons={colorButtons}
            responsive={colorPopup}
            ref={colorPicker}
        >
            <div className="crud-color-row">
                {colors.map((color, index) => {
                    if (index < 5) {
                        return <div key={index} onClick={changeColor} className={"crud-color-c " + (tempColor === color ? 'selected' : '')} data-value={color}>
                            <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
                        </div>
                    } else return null;
                })}
            </div>
            <div className="crud-color-row">
                {colors.map((color, index) => {
                    if (index >= 5) {
                        return <div key={index} onClick={changeColor} className={"crud-color-c " + (tempColor === color ? 'selected' : '')} data-value={color}>
                            <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
                        </div>
                    } else return null;
                })}
            </div>
        </Popup>
   
        </Container>
        </>
    )
}
