import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service' 
// .. Or below... if you do use it has to be userSErvices.logout()
// import {logOut} from '../../utilities/users-service'

export default function NavBar ( {user, setUser} ) {

    function handleLogOut() { // dont need an event, you only need it if you need to know what a user clicked
        usersService.logOut(); // removes local storage
        setUser(null) // update user state
    }

    return (<nav>
        {/* <Link to="/orders">Order History</Link> */}
        {/* <Link to="/orders/new">New Order</Link> */}
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    );
}