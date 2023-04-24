import React, { useState, useEffect } from "react";
import "../styles/searchpage.css";

const SearchPage = () => {
  const [adsData, setAdsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/adsdetails")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data1) => {
        setAdsData(data1);
        console.log(data1);
      });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDiv, setShowDiv] = useState(true);

  const handleChange = (event) => {
    //removing affilation-div
    if (event.target.value === "") {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const results = adsData.filter((item) => {
      return (
        item.companyName.includes(searchTerm) ||
        item.primaryText.includes(searchTerm) ||
        item.headline.includes(searchTerm) ||
        item.description.includes(searchTerm)
      );
    });
    setSearchResults(results);
  };
  return (
    <div className="main-div">
      <div className="body-div">
        <h1>Search Here</h1>
        <div className="search-bar-div">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search for Ads"
          />
        </div>
        {showDiv && (
          <div className="aff-div">
            <h2>In affilation with Brands :</h2>
            <div className="main-logo-div">
              <div className="brand-logo">
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/03/Levis-Logo.png"
                  alt="error"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/05/PUMA-Logo-2003.png"
                  alt="error"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Logo.png"
                  alt="error"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="https://1000logos.net/wp-content/uploads/2016/10/Color-Adidas-logo.jpg"
                  alt="error"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png"
                  alt="error"
                />
              </div>
            </div>
            <div className="main-logo-div-1">
              <div className="brand-logo">
                <img
                  src="https://getlogovector.com/wp-content/uploads/2021/03/cotopaxi-logo-vector.png"
                  alt="error"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
                  alt="error"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="https://1000logos.net/wp-content/uploads/2016/12/Colgate-logo.png"
                  alt="error"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="https://1000logos.net/wp-content/uploads/2021/06/Valentino-logo.png"
                  alt="error"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="https://tukuz.com/wp-content/uploads/2020/10/curology-logo-vector.png"
                  alt="error"
                />
              </div>
            </div>
          </div>
        )}
        <ul>
          {searchResults.map((result, index) => (
            <div className="ads-card-div">
              <img src={`${result.imgname}`} alt="error" />
              <h4>{result.headline}</h4>
              <h5>Company : {result.companyName}</h5>
              <p>{result.primaryText}</p>
              <p>{result.description}</p>
              <div className="button-div">
                <button
                  onClick={() => {
                    window.open(`${result.blink}`);
                  }}
                >
                  {result.ctabutton}
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
