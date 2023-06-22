import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import { logout } from '../redux/authReducer'
import { connect } from 'react-redux'

function Nav(props) {
    return (
      <nav className={style.navbar}> 
        <div>
          <NavLink to='/profile' className = { navData => navData.isActive ? style.active : style.navItem }>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/users' className = { navData => navData.isActive ? style.active : style.navItem }>Users</NavLink>
        </div>
        <div onClick={props.logout} className={style.navItem}>
          Logout
        </div>
                {/* <div>
          <NavLink to='/dialogs' className = { navData => navData.isActive ? style.active : style.item }>Messages</NavLink>
        </div> */}
      </nav>
    )
}
export default connect(null, {logout})(Nav)