import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUsers } from '../store/usersSlice.js';
import { auth } from '../firebase/config.js';


function Header({ pageTitle }) {
  const dispatch = useDispatch();

  function handleSignOut() {
    if (confirm('Are you sure you want to log out?')) {
      signOut(auth).then(() => {
        dispatch(setUsers(null));
      }).catch((error) => {
        error.message;
      });
    }
    
  }

    return (
      <>

            <h1>{pageTitle}</h1>

            <div className="header-btns">

                    <NavLink to="/">
                      <button className="btn">
                          Books List
                      </button>
                    </NavLink>

                    <NavLink to="/add-book">
                      <button className="btn">
                          Add Book +
                      </button>
                    </NavLink>

          <button onClick={handleSignOut} className="btn transparent">
                      Logout
                    </button>

               
            </div>
    
      </>
    )
  }
  
  export default Header
  