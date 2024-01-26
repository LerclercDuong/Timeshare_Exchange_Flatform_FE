import React, {useEffect, useState} from 'react'
import TourCard from '../Shared/TourCard'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import {GetAllTimeshare} from "../../services/timeshare.service";

const FeaturedTourList = () => {
  const [tourList, setTourList] = useState([]);
  useEffect(() => {
    async function Get(){
      const list = await GetAllTimeshare();
      setTourList(list);
    }
    Get()
  });
  return (
    <>
    {
        tourList?.map(tour=>(
            <Col lg='3' className='mb-4'>
                <TourCard tour={tour}/>
            </Col>
        ))
    }
    </>
  )
}

export default FeaturedTourList