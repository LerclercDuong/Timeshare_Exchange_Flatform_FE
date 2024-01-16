import React, {useRef} from 'react'
import './search-bar.css';
import { Col, Button, Form, FormGroup } from 'reactstrap';

import { Link } from 'react-router-dom';

const SearchBar = () => {

    const locationRef = useRef('')
    const maxGroupSizeRef = useRef(0)
    const dateRef = useRef('')

    const searchHandler = () => {

        const location = locationRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value
        const date = dateRef.current.value

        if(location=='' | maxGroupSize=='' | date=='') {
            return alert('All field are required!');
        }
    }



    return <Col lg='12'>
        <div className='search__bar'>
            <Form className='d-flex align-items-center gap-5'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i class="ri-map-pin-line"></i>
                        <div>
                            <h6>Location</h6>
                            <input type='text' placeholder='Search For A Destination' ref={locationRef} />
                        </div>
                    </span>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i class="ri-group-line"></i>
                        <div>
                            <h6>Guests</h6>
                            <input type='number' placeholder='How many Guests?' ref={maxGroupSizeRef} />
                        </div>
                    </span>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span>
                        <i class="ri-calendar-line"></i> {/* Change the icon to a calendar icon */}
                        <div>
                            <h6>Date</h6> 
                            <input type='date' placeholder='Select a date' ref={dateRef} />
                        </div>
                    </span>
                </FormGroup>
                <Button className='search__btn' type='submit' onClick={searchHandler}><Link to='/tours/search'>Search</Link></Button>
            </Form>
        </div>
    </Col>

}

export default SearchBar