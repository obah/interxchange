import Header from "./header";
import Dropdown from "./dropdown";
import currency from "../images/currency.png";
import { useState } from "react";
import "../styles/dashboard.css";

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

  const handleNetworkChain = (e) => {
    setNetwork(e.target.value);
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
          <p className="text-5">Assets to supply</p>
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
          <p className="text-6">Assets to borrow</p>
        </div>
      </div>
    </>
  );
}
