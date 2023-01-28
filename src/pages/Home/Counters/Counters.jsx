import React from 'react';
import CountUp from 'react-countup';
import './counter.css'
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function EventCounter({ event }) {
    return (
        <div className='col-md-3 col-6 count-border'>
            {/* <svg height="200" width="200"><circle class="circle" cx="100" cy="100" r="95" stroke="tranparent" stroke-width="10" fill-opacity="0" /></svg> */}
            <div className="">
                <div>
                    <div>{event.icon}</div>
                    <h3>{event.name}</h3>
                    <CountUp start={event.start} end={event.end} duration={5}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} style={{fontSize: '1.5rem'}} />
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
        </div>
    );
}



const events = [
    { name: "Activities", start: 100, end: 9590, icon:<FontAwesomeIcon icon="fa-solid fa-users" /> },
    { name: "Amount Spent", start: 100000, end: 96783787 },
    { name: "Clubs", start: 10, end: 128 },
    { name: "People Served", start: 10000, end: 4210402 },
]

function Counters() {
    const countersRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (countersRef.current && window.scrollY >= countersRef.current.offsetTop) {
                // start the count
                events.forEach(event => {
                    event.start();
                });
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className="counters">
            <div className='container col-lg-12'>
                <div ref={countersRef} className='row text-center'>
                    {events.map(event => (  
                        <EventCounter key={event.name} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Counters;


