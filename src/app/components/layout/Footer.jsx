export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>© {currentYear} Todos los derechos reservados.</p>
        </footer>
    );
}
