import Header from "./header";
import Dropdown from "./dropdown";
import currency from "../images/currency.png";
import { useState } from "react";
import "../styles/dashboard.css";
import assetBorrow from "../images/assetBorrow.png";
import assetSupply from "../images/assetSupply.png";

export default function Dashboard() {
  const Currency = currency;
  const [network, setNetwork] = useState("Ethereum");
  const networkOptions = [
    { label: "Ethereum", value: "Ethereum" },
    { label: "Polygon", value: "Polygon" },
  ];

  let supply = false; //get this through an API
  let borrow = false; //this too

  // const tableData1 = [
  //   {
  //     asset: "BAYC",
  //     worth: "64.19 ETH",
  //     apy: "1.18%",
  //     collateral: () => require("../images/true.png"),
  //     button: "Supply",
  //   },
  //   {
  //     asset: "Ponzi",
  //     worth: "0.09 ETH",
  //     apy: "-",
  //     collateral: () => require("../images/false.png"),
  //     button: "Supply",
  //   },
  //   {
  //     asset: "CP",
  //     worth: "64.09 ETH",
  //     apy: "1.18%",
  //     collateral: () => require("../images/true.png"),
  //     button: "Claim",
  //   },
  // ];

  const AssetSupply = assetSupply;
  const AssetBorrow = assetBorrow;

  const handleNetworkChain = (e) => {
    setNetwork(e.target.value);
  };

  const handleCloseBtn = () => {};

  const handleSupply = () => {};

  const handleClaim = () => {};

  const handleBorrow = () => {};

  const handleSupplyBtn = () => {
    return (
      <>
        <div className="header">
          <button onClick={handleCloseBtn}></button>
          <p>Supply</p>
        </div>
        <div className="main-body">
          <img src="" alt="" />
          <p>BAYC</p>
          <p>
            Confirm you want to supply the BAYC worth 64.0 ETH as collateral
          </p>
          <button onClick={handleSupply}>Supply</button>
        </div>
      </>
    );
  };

  const handleClaimBtn = () => {
    return (
      <>
        <div className="header">
          <button onClick={handleCloseBtn}></button>
          <p>Claim</p>
          <p>ETH/USDC</p>
        </div>
        <div className="main-body">
          <img src="" alt="" />
          <p>BAYC</p>
          <p>Worth</p>
          <img src="" alt="" />
          <p>64.9</p>
          <p>Borrowed</p>
          <img src="" alt="" />
          <p>96,000</p>
          <p>APY</p>
          <p>7.5%</p>
          <p>Amount Owed</p>
          <img src="" alt="" />
          <p>103,200</p>
          <p>Duration</p>
          <p>365 Days</p>
          <p>Due Duration</p>
          <p>In 2 days</p>
          <button onClick={handleClaim}>Claim</button>
        </div>
      </>
    );
  };

  const handleBorrowBtn = () => {
    return (
      <>
        <div className="header">
          <button onClick={handleCloseBtn}></button>
          <p>Borrow</p>
          <p>ETH/USDC</p>
        </div>
        <Dropdown />
        <div className="main-body">
          <div className="amount-in">
            <img src="" alt="" />
            <p>USDC</p>
            <label>
              <input type="text" />
            </label>
            <p>BMax: 106,241.3USDC</p>
          </div>
          <div className="details">
            <img src="" alt="" />
            <p>NFT Worth</p>
            <p>64.9</p>
            <p>APY</p>
            <p>7.5%</p>
            <p>Duration</p>
            <p>365 Days</p>
          </div>
          <button onClick={handleBorrow}>Borrow</button>
        </div>
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="top-details">
        <div className="net-worth">
          <img src={Currency} alt="currency logo" className="currency-logo" />
          <p className="networth-text">Net worth</p>
          {/*This should a variable returned as the value of users networth, default value used for now */}
          <p className="amount-1">$100,000</p>
        </div>
        <div>
          <p className="apy-text">Net APY</p>
          <p className="amount-2">--</p>
        </div>
        <div className="network-selector">
          <Dropdown
            label={"Network:" + network}
            value={network}
            options={networkOptions}
            onChange={handleNetworkChain}
          />
        </div>
      </div>
      <div className="main-content">
        <div className="supplies">
          <p className="text-1">Your supplies</p>
          {supply ? (
            <p className="text-2">{supply}</p>
          ) : (
            <p className="text-2">Nothing supplied yet</p>
          )}
        </div>
        <div className="borrows">
          <p className="text-3">Your borrows</p>
          {borrow ? (
            <p className="text-4">{borrow}</p>
          ) : (
            <p className="text-4">Nothing borrowed yet</p>
          )}
        </div>
        <div className="asset-supply">
          {/* <p className="text-5">Assets to supply</p> */}
          <div className="table-1">
            <img src={AssetSupply} alt="assets to supply" />
            <button className="button-1" onClick={handleSupplyBtn}>
              Supply
            </button>
            <button className="button-2">Supply</button>
            <button className="button-3" onClick={handleClaimBtn}>
              Claim
            </button>
          </div>
          {/* <table>
            <tr>
              <th>Assets</th>
              <th>Worth</th>
              <th>APY</th>
              <th>Supported Collateral</th>
              <th></th>
            </tr>
            {tableData1.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.asset}</td>
                  <td>{value.worth}</td>
                  <td>{value.apy}</td>
                  <td>{value.collateral}</td>
                  <td>
                    <button>{value.button}</button>
                  </td>
                </tr>
              );
            })}
          </table> */}
        </div>
        <div className="asset-borrow">
          {/* <p className="text-6">Assets to borrow</p> */}
          <div className="table-2">
            <img src={AssetBorrow} alt="Assets to borrow" />
            <button className="button-4" onClick={handleBorrowBtn}>
              Borrow
            </button>
            <button className="button-5" onClick={handleBorrowBtn}>
              Borrow
            </button>
            <button className="button-6">Borrow</button>
            <button className="button-7">Borrow</button>
            <button className="button-8" onClick={handleBorrowBtn}>
              Borrow
            </button>
            <button className="button-9">Borrow</button>
          </div>
        </div>
      </div>
    </>
  );
}
