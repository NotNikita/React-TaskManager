import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; May 2021</p>
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer