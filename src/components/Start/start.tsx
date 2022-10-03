import { Link } from 'react-router-dom';
import './start.scss';
import Logo from 'assets/loader.png';

const Start = () => {
  return (
    <div className="start">
      <span className="start__first">Desafio AME Digital</span>
      <img className="start__logo" src={Logo} alt="logo" />
      <span className="start__second">
        por
        <strong>Alesandro Barbosa</strong>
      </span>
      <Link className="start__play" to="/game">
        START
      </Link>
    </div>
  );
};

export default Start;