import PaginationList from "../PaginationList";

const testTimeshares = [
    {
        id: 1,
        name: 'Beach Resort Villa',
        type: 'rent',
        current_owner: 'user1_id',
        start_date: new Date('2024-02-01'),
        end_date: new Date('2024-02-07'),
        images: ['image1.jpg', 'image2.jpg'],
        availability: true,
        timestamp: new Date('2024-01-18T10:00:00'),
    },
    {
        id: 2,
        name: 'Mountain Chalet',
        type: 'exchange',
        current_owner: 'user2_id',
        start_date: new Date('2024-03-15'),
        end_date: new Date('2024-03-22'),
        images: ['image3.jpg', 'image4.jpg'],
        availability: false,
        timestamp: new Date('2024-01-20T08:30:00'),
    },
    {
        id: 3,
        name: 'City Apartment',
        type: 'rent',
        current_owner: 'user3_id',
        start_date: new Date('2024-04-10'),
        end_date: new Date('2024-04-17'),
        images: ['image5.jpg', 'image6.jpg'],
        availability: true,
        timestamp: new Date('2024-01-25T14:45:00'),
    },
    {
        id: 4,
        name: 'Ski Lodge',
        type: 'exchange',
        current_owner: 'user4_id',
        start_date: new Date('2024-05-05'),
        end_date: new Date('2024-05-12'),
        images: ['image7.jpg', 'image8.jpg'],
        availability: false,
        timestamp: new Date('2024-02-01T09:15:00'),
    },
    {
        id: 5,
        name: 'Lake House',
        type: 'rent',
        current_owner: 'user5_id',
        start_date: new Date('2024-06-20'),
        end_date: new Date('2024-06-27'),
        images: ['image9.jpg', 'image10.jpg'],
        availability: true,
        timestamp: new Date('2024-02-05T12:30:00'),
    },
    {
        id: 6,
        name: 'Countryside Cottage',
        type: 'exchange',
        current_owner: 'user6_id',
        start_date: new Date('2024-07-15'),
        end_date: new Date('2024-07-22'),
        images: ['image11.jpg', 'image12.jpg'],
        availability: false,
        timestamp: new Date('2024-02-10T16:00:00'),
    },
    {
        id: 7,
        name: 'Desert Retreat',
        type: 'rent',
        current_owner: 'user7_id',
        start_date: new Date('2024-08-10'),
        end_date: new Date('2024-08-17'),
        images: ['image13.jpg', 'image14.jpg'],
        availability: true,
        timestamp: new Date('2024-02-15T11:45:00'),
    },
    // Add 18 more test data objects with different values...
];


const rows = testTimeshares.map((timeshare) => ({
    id: timeshare.id,
    name: timeshare.name,
    type: timeshare.type,
    current_owner: timeshare.current_owner,
    start_date: timeshare.start_date,
    end_date: timeshare.end_date,
    images: timeshare.images.join(', '), // Joining images into a string for simplicity
    availability: timeshare.availability,
    timestamp: timeshare.timestamp,
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'type', headerName: 'Type', width: 120 },
    { field: 'current_owner', headerName: 'Current Owner', width: 150 },
    { field: 'start_date', headerName: 'Start Date', width: 150 },
    { field: 'end_date', headerName: 'End Date', width: 150 },
    { field: 'images', headerName: 'Images', width: 200 },
    { field: 'availability', headerName: 'Availability', width: 130 },
    { field: 'timestamp', headerName: 'Timestamp', width: 200 },
];

export default function ManageTimeshare() {
    return (
        <>
            <PaginationList rows = {rows} columns ={columns}/>
        </>
    );
}