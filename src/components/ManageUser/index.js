import PaginationList from "../PaginationList";
const sampleUserData = [
    {
        id: 201,
        username: 'minh tri',
        password: 'samplePassword1',
        email: 'sampleuser1@example.com',
        profilePicture: 'https://example.com/sample_image1.jpg',
        phone: '123-456-7890',
        role: 'user',
        timestamp: new Date('2024-08-01T10:30:00'),
    },
    {
        id: 202,
        username: 'ronaldo',
        password: 'adminPassword1',
        email: 'adminuser1@example.com',
        profilePicture: 'https://example.com/sample_image2.jpg',
        phone: '987-654-3210',
        role: 'admin',
        timestamp: new Date('2024-08-02T15:45:00'),
    },
    {
        id: 203,
        username: 'messibucu',
        password: 'samplePassword2',
        email: 'sampleuser2@example.com',
        profilePicture: 'https://example.com/sample_image3.jpg',
        phone: '555-123-4567',
        role: 'user',
        timestamp: new Date('2024-08-05T12:15:00'),
    },
    {
        id: 694,
        username: 'chipucu',
        password: 'samplePassword3',
        email: 'sampleuser3@example.com',
        profilePicture: 'https://example.com/sample_image4.jpg',
        phone: '777-987-6543',
        role: 'user',
        timestamp: new Date('2024-08-08T08:30:00'),
    },
    {
        id: 533,
        username: 'HoaMinzy',
        password: 'samplePassword2',
        email: 'sampleuser2@example.com',
        profilePicture: 'https://example.com/sample_image3.jpg',
        phone: '555-123-4567',
        role: 'user',
        timestamp: new Date('2024-08-05T12:15:00'),
    },
    {
        id: 114,
        username: 'Matrix',
        password: 'samplePassword3',
        email: 'sampleuser3@example.com',
        profilePicture: 'https://example.com/sample_image4.jpg',
        phone: '777-987-6543',
        role: 'user',
        timestamp: new Date('2024-08-08T08:30:00'),
    },
    {
        id: 253,
        username: 'johnny sins',
        password: 'samplePassword2',
        email: 'sampleuser2@example.com',
        profilePicture: 'https://example.com/sample_image3.jpg',
        phone: '555-123-4567',
        role: 'user',
        timestamp: new Date('2024-08-05T12:15:00'),
    },
    {
        id: 34,
        username: 'tokuda',
        password: 'samplePassword3',
        email: 'sampleuser3@example.com',
        profilePicture: 'https://example.com/sample_image4.jpg',
        phone: '777-987-6543',
        role: 'user',
        timestamp: new Date('2024-08-08T08:30:00'),
    },
    {
        id: 123,
        username: 'Shin shimiken',
        password: 'samplePassword3',
        email: 'sampleuser3@example.com',
        profilePicture: 'https://example.com/sample_image4.jpg',
        phone: '777-987-6543',
        role: 'user',
        timestamp: new Date('2024-08-08T08:30:00'),
    },
    {
        id: 231,
        username: 'tokuda1231',
        password: 'samplePassword3',
        email: 'sampleuser3@example.com',
        profilePicture: 'https://example.com/sample_image4.jpg',
        phone: '777-987-6543',
        role: 'user',
        timestamp: new Date('2024-08-08T08:30:00'),
    },
    // Add more sample data objects...
];

const rows = sampleUserData.map((user) => ({
    id: user.id,
    username: user.username,
    password: user.password,
    email: user.email,
    profilePicture: user.profilePicture,
    phone: user.phone,
    role: user.role,
    timestamp: user.timestamp,
}));
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'password', headerName: 'Password', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'profilePicture', headerName: 'Profile Picture', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'role', headerName: 'Role', width: 120 },
    { field: 'timestamp', headerName: 'Timestamp', width: 200 },
];
export default function ManageUsers() {
    return (
        <>
            <PaginationList rows = {rows} columns ={columns}/>
        </>
    );
}