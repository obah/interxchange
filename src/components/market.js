import Header from "./header";
import NetworkSelector from "./networkSelector";
import nftAsset from "../images/nftAssets.png";
import tokenAsset from "../images/tokenAssets.png";

export default function Market() {
  const selected = true;
  const NftAsset = nftAsset;
  const TokenAsset = tokenAsset;

  return (
    <>
      <Header />
      <div className="top-section">
        <NetworkSelector />
        <div className="text-group1">
          <p className="text1">Total Market Size</p>
          <p className="text2">$10B</p>
        </div>
        <div className="text-group2">
          <p className="text3">Total Available</p>
          <p className="text4">$3.2B</p>
        </div>
        <div className="text-group3">
          <p className="text5">Total Borrowed</p>
          <p className="text6">$3B</p>
        </div>
      </div>
      <div className="main-content">
        <p>Tokens</p>
        <p>NFTs</p>
        <div className="table">
          {selected ? (
            <img src={TokenAsset} alt="" />
          ) : (
            <img src={NftAsset} alt="" />
          )}
        </div>
      </div>
    </>
  );
}
