function Header({ setPage }) {
  return (
    <header>
      <h2>Simple Bank Application</h2>

      <nav>
        <a href="#" onClick={() => setPage('home')}>Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#" onClick={() => setPage('data')}>Data</a>
      </nav>
    </header>
  )
}

export default Header