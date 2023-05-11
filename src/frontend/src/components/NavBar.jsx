import './NavBar.css';
import CarryCase from '../assets/CarryCase';
import People from '../assets/UserGroup';
import Person from '../assets/UserCir';
import Trophy from '../assets/AwardTrophy';
import Create from '../assets/Create';
//import Pagina1 from '../pages/Projects.jsx';

function NavBar(){

  return (
    // <div className='nav-toda'>
            <div className="nav-bar">
                <div className='nav-item'>
                    <CarryCase></CarryCase>
                    <p>Projects</p>
                </div>
            <div className='nav-item'>
                <People></People>
                <p>Community</p>
            </div>
            <div className='nav-item'>
                <Create></Create>
            </div>
            <div className='nav-item'>
                <Trophy></Trophy>
                <p>Ranking</p>
            </div>
            <div className='nav-item'>
                <Person></Person>
                <p>Profile</p>
            </div>
        </div>
    //</div>
  );
};

export default NavBar;