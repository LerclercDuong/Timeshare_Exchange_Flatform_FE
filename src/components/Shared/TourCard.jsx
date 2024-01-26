import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './tour-card.css'
import calculateAvgRating from '../../utils/avgRating';
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
    );
}

const TourCard = ({ tour }) => {
    const {_id, name, location, price, image, start_date, end_date} = tour;

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    };

    // const {totalRating, avgRating} = calculateAvgRating(reviews)

    return <div className='tour__card'>
        <Card>
            <Slider {...settings}>
                {image && image.map((img, index) => (
                    <div key={index} className="tour__img">
                        <img src={`http://localhost:8080/static/${img.path}`} alt={`tour-img-${index}`} />
                        {/*<FavoriteBorderIcon sx={{color: '#fff', position: 'absolute', top: 4, right: 4}}/>*/}
                    </div>
                ))}
            </Slider>
            <CardBody>
                <div className='card__top d-flex align-items-center justify-content-between'>
                    <span className='tour__location d-flex align-items-center gap-1'>
                        <i class="ri-map-pin-line"></i> {location}
                    </span>
                    {/*<span className='tour__rating d-flex align-items-center gap-1'>*/}
                    {/*    <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}*/}
                    {/*    {totalRating === 0 ? 'Not rated' : <span>({reviews.length})</span>*/}
                    {/*}*/}
                    {/*</span>*/}
                </div>

                <h5 className='tour__title'><Link to={`/timesharedetails/${_id}`}>{name}</Link></h5>
                <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
                    {/*<h5>${price}</h5>*/}
                    {/*<h6>(${price}/night)</h6>*/}
                    <h5>${price} (${price}/night)</h5>
                    <button className='btn booking__btn'>
                        <Link to={`/timesharedetails/${_id}`}>Rent/Exchange</Link>
                    </button>
                </div>
                <div className='tour__daydetails'>
                    <h5><span>{formatDate(start_date)} - {formatDate(end_date)}</span></h5>
                </div>
            </CardBody>

        </Card>


    </div>;

}

export default TourCard