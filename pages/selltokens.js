import { useEffect, useState } from "react";

export default function SellTokens() {
  const [numOfListings, setNumOfListings] = useState(3);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const generateArray = (num) => {
      return Array.from(new Array(num).map((_) => " "));
    };
    numOfListings && setListings(generateArray(numOfListings));
  }, [numOfListings]);

  const showMe = () => {
    console.log(numOfListings, listings);
  };

  return (
    <>
      <div className="columns is-centered">
        <div className="column is-three-quarters is-centered">
          <div className="">
            <fieldset>
              {listings.map((listing, i) => (
                <div key={i} className="box">
                  <div className="field columns is-multiline">
                    <div className="field column is-three-quarters">
                      <label className="label is-size-5">Address: </label>
                      <div className="control">Someone's Address</div>
                    </div>
                    <div className="field column is-one-quarter">
                      <label className="label is-size-5">Amount: </label>
                      <div className="control">
                        <div>Someone's amount of tokens</div>
                      </div>
                    </div>

                    <div className="field column is-3">
                      <label className="label is-size-5">Price:</label>
                      <div className="control">
                        Someone's price for the token
                      </div>
                    </div>

                    <div className="field column is-offset-6">
                      <button className="control button is-primary is-medium is-fullwidth" onClick={showMe}>
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </fieldset>
            <button className="control button is-link is-large is-fullwidth mt-5"> List your CAT's </button>
          </div>
        </div>
      </div>
    </>
  );
}
