import { useState } from "react";
import Dropdown from "./dropdown";
import Card from "./card";
import "../styles/landingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  const [chain, setChain] = useState("Blockchain");
  const [filter, setFilter] = useState("Filter");

  const chainOptions = [
    { label: "Ethereum", value: "Ethereum" },
    { label: "Polygon", value: "Polygon" },
    { label: "Solana", value: "Solana" },
  ];
  const filterOptions = [
    { label: "Experience", value: "Experience" },
    { label: "Recent", value: "Recent" },
    { label: "Price", value: "Price" },
  ];

  const handleChainChange = (e) => {
    setChain(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const cardItems = [
    {
      imageSrc: () => require("../images/cryptopunks.png"),
      heading: "CrptoPunks",
      body: "CryptoPunks launched as a fixed set of 10,000...",
      pageUrl: "https://www.larvalabs.com/cryptopunks",
    },
    {
      imageSrc: () => require("../images/toshies.png"),
      heading: "TOSHIES",
      body: "Step into the pixelated world of Toshi...",
      pageUrl: "https://toshies.xyz/",
    },
    {
      imageSrc: () => require("../images/sewerpass.png"),
      heading: "Sewer Pass",
      body: "A Sewer Pass grants access to Yuga Labs' Dookey...",
      pageUrl: "https://opensea.io/collection/sewerpass",
    },
  ];

  return (
    <div className="container">
      <header>InterXchange</header>
      <div className="bodyTop">
        <div className="heroImg">
          <img
            src={require("../images/logo.png")}
            alt="interXchange logo"
            className="logoImg"
            width={316}
            height={330}
          />
          <img
            src={require("../images/dots.png")}
            alt=""
            className="dotsImg"
            width={537}
            height={506}
          />
        </div>
        <div className="intro">
          <h1 className="intro1">Welcome to interXchange</h1>
          <p className="intro2">
            the platform that allows you to borrow ERC-20 tokens using your
            ERC-721 tokens as collateral.
          </p>
          <p className="intro2">
            Are you tired of having to sell your valuable ERC-721 assets just to
            borrow ERC-20 tokens? With Interswap, you can easily borrow the
            tokens you need without having to sacrifice your assets.
          </p>
          <Link to="dashboard">
            <button>Launch App</button>
          </Link>
        </div>
      </div>
      <div className="bodyMid">
        <h2 className="midText">
          Start experiencing the future of token borrowing with Interxchange.
        </h2>
        <img src={require("../images/icons1.png")} alt="" className="midImg1" />
        <img src={require("../images/icons2.png")} alt="" className="midImg2" />
      </div>
      <div className="bodyLast">
        <h2 className="lastText">Supported NFTs</h2>
        <div className="nftSelector">
          <Dropdown
            label={chain}
            value={chain}
            options={chainOptions}
            onChange={handleChainChange}
          />
          <Dropdown
            label={filter}
            value={filter}
            options={filterOptions}
            onChange={handleFilterChange}
          />
        </div>
        <div className="card">
          {cardItems.map((items) => (
            <Card
              pageUrl={items.pageUrl}
              image={items.imageSrc()}
              heading={items.heading}
              body={items.body}
              btnImg={require("../images/arrow.png")}
            />
          ))}
        </div>
        <button className="lastButton">load more</button>
      </div>
      <footer className="footer">
        <img
          src={require("../images/credits1.png")}
          alt=""
          className="footerImg1"
        />
        <img
          src={require("../images/credits2.png")}
          alt=""
          className="footerImg2"
        />
      </footer>
    </div>
  );
}

export default LandingPage;
