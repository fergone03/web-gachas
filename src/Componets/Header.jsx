import '../assets/styles/header.css'; 

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <img src="/ruta-al-logo.png" alt="Logo" />
      </div>

      {/* Enlaces de navegación */}
      <nav className="header-nav">
        <a href="/genshin">Genshin Impact</a>
        <a href="/honkai">Honkai Star Rail</a>
        <a href="/zzz">Zenless Zone Zero</a>
      </nav>

      {/* Botón de cambio de tema y enlace de login */}
      <div className="header-actions">
        <button className="theme-toggle">Tema Oscuro/Claro</button>
        <a href="/login" className="login-link">Iniciar Sesión</a>
      </div>
    </header>
  );
}

export default Header;
