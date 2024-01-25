import {useSelector} from "react-redux";
import Header from '../Header';
import Footer from '../Footer';

const PostTimeshare = () => {
    const userInfo = useSelector((state) => state.auth.user);
    return (
        <>
        <Header />
        <form className="card m-5 mx-auto p-5" action="http://localhost:8080/api/v1/timeshare/upload" method="POST" encType="multipart/form-data">

            {/* Username */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name Timeshare</label>
                <input type="text" className="form-control" id="name" name="name" />
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="currency" className="form-control" name="price" />
            </div>

            <div className="mb-3">
                <label htmlFor="start_date" className="form-label">Start Date</label>
                <input type="date" className="form-control" name="start_date" />
            </div>

            <div className="mb-3">
                <label htmlFor="end_date" className="form-label">End Date</label>
                <input type="date" className="form-control" name="end_date" />
            </div>

            <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" className="form-control" id="location" name="location" />
            </div>
            <div className="mb-3">
                <label htmlFor="current_owner" className="form-label">current_owner</label>
                <input type="text" className="form-control" id="current_owner" name="current_owner" value={userInfo?._id} placeholder={userInfo?.username} />
            </div>
            {/* <div class="mb-3" id="demo">
                <button type="button" onclick="current_owner()">Change Content</button>
                <!-- Tùy chọn người dùng sẽ được thêm ở đây sau khi tải trang -->
                </select>
            </div> */}

            {/* Image File */}
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="file" className="form-control" name="image" multiple />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
            <Footer/>
        </>
    );
}

export default PostTimeshare;
