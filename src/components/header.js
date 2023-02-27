import { useState } from "react";
import "../styles/header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [address, setAddress] = useState("connect");

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Market", href: "/market" },
    { name: "Pool", href: "/pool" },
    { name: "Stake", href: "/stake" },
  ];

  // TODO Do a function to get wallet address after connect and set it as address
  // TODO Do a functionality to truncate the address string
  const handleConnect = () => {
    if (address === "connect") {
      setAddress("0x79B0…4E71");
    } else {
      setAddress("connect");
    }
  };

  let activeStyle = {
    color: "#ffffff",
    textDecoration: "underline",
  };

  return (
    <>
      <div className="top">
        <a href="/">InterXchange</a>
        <button onClick={handleConnect}>{address}</button>
      </div>
      <div>
        <nav>
          <ul className="menu">
            {navItems.map((item) => (
              <li className="menuItems">
                <NavLink
                  to={item.href}
                  key={item.name}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
