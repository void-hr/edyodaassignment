import '../App.css';
export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar_wrap">
            <div className="left_content">
                <span>EDYODA</span>
              <div>
                <label >Courses</label>
                <select>
                  <option></option>
                </select>
                </div>
                <div>
                <label >Programs</label>
                <select>
                  <option></option>
                </select>
                </div>
            </div>
            <div className="right_content">
                <input type="search"   />
                <button className='login'>Log in</button>
                <button className='join_now'>Join Now</button>
            </div>
        </div>
    </div>
  )
}
