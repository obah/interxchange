export default function Header() {
  return (
    <>
      <a href="/">
        <h1 className="header">InterXchange</h1>
      </a>
      <button className="connect-btn">connect wallet</button>
      <nav className="menu">
        <ul>
          <li className="menu-item">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="menu-item">
            <a href="/market">Market</a>
          </li>
          <li className="menu-item">
            <a href="/pool">Pool</a>
          </li>
          <li className="menu-item">
            <a href="/stake">Stake</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
