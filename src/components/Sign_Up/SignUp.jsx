import { Link } from "react-router-dom";
import "./Sign_Up.css";

const SignUp = () => {
    return (
        <div className="container" style={{marginTop: "5%"}}> {/* Main container with margin-top */}
        <div className="signup-grid"> {/* Grid layout for sign-up form */}
            <div className="signup-text"> {/* Title for the sign-up form */}
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1" style={{textAlign: "center"}}> {/* Text for existing members to log in */}
                Already a member? <span><Link to="Login" style={{color: "#2190FF"}}> Login</Link></span>
            </div>
            <div className="signup-form"> {/* Form for user sign-up */}
                <form className="signup" style={{width: "50%"}}> {/* Start of the form */}

                    <div className="form-group"> {/*<!-- Form group for user's role -->*/}
                        <label for="name">Role</label> {/* Label for role input field */}
                        <input type="search" name="Role" id="name" required className="form-control" placeholder="Enter your role" aria-describedby="helpId" /> {/* Text input field for role */}
                    </div>
                    
                    <div className="form-group"> {/*<!-- Form group for user's name -->*/}
                        <label for="name">Name</label> {/* Label for name input field */}
                        <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" /> {/* Text input field for name */}
                    </div>

                    <div className="form-group"> {/*<!-- Form group for user's phone number -->*/}
                        <label for="phone">Phone</label> {/* Label for phone input field */}
                        <input type="tel" name="phone" maxLength={10} id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" /> {/* Tel input field for phone number */}
                    </div>

                    <div className="form-group"> {/*<!-- Form group for user's email -->*/}
                        <label for="email">Email</label> {/* Label for email input field */}
                        <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" /> {/* Email input field */}
                    </div>

                    <div className="form-group"> {/*<!-- Form group for user's password -->*/}
                        <label for="password">Password</label> {/* <!-- Label for password input field --> */}
                        <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" /> {/* Password input field */}
                    </div>

                    <div className="btn-group"> {/* <!-- Button group for form submission and reset --> */}
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> {/* Submit button */}
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button> {/* Reset button */}
                    </div>
                </form> 
                {/* <!-- End of the form --> */}
            </div>
        </div>
    </div>
    )
}

export default SignUp;