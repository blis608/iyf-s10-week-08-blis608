function Header() {
  return (
    <header className="header">
      <h1>CommunityHub</h1>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/">Posts</a>
        <a href="/">About</a>
      </nav>

      <button type="button">Login</button>
    </header>
  );
}

export default Header;