import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer id="foot" className="flx">
            <ul className="flx">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/article">Articles</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/speaking">Speaking</Link></li>
            </ul>

            <p> 2025 Anas Hessen. All Right reserved.</p>
        </footer>
    );
}

export default Footer