import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import Button from 'react-bootstrap/Button';
import eduImage from '../images/edu.jpg';

export default function About() {

    const typedRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                'Practcial',
                'Affordable',
                'Intuitive'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, [])
    return (
        <>
            <div className="container">

                <div className='parent'>
                    
                    <div className="explain d-flex">
                        <div className="content">
                            Learning with iNeuron made <br />
                            <span ref={typedRef} /> <br />
                            Take your career to the next level with industry ready programs,
                            An entire learning ecosystem at your fingertips to make learning fun.
                            Choose from a range of tech programs and make your next big career switch. <br />
                            <Button className='about-buuton' variant="primary">Explore Courses</Button>
                        </div>
                        <div className="image">

                            <img src={eduImage} alt="" srcset="" />
                        </div>
                    </div>
                   

                </div>
            </div>
        </>
    )
}
