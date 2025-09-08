import styles from './navbar.css'

export default function NavBar() {
    return (
        <nav className="navbar">
            <a href="/" >Home </a>
            <a href="/beers" > Beers</a>
            <a href="/users"> Users</a>
        </nav>
    );
}