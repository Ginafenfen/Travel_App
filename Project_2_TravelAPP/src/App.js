import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import image2 from "./images/img2.jpg";
import NavBar from "./component1/NavBar";
import PageOne from "./component1/PageOne";
import PageTwo from "./component1/PageTwo";
import PageThree from "./component1/PageThree";
import PageFour from "./component1/PageFour";
import WishList from "./component2/WishList";

function App() {
  const [input, setInput] = useState("");
  const [wishList, setWishList] = useState([]);
  const [searchValue, setSearchValue] = useState("Thailand");

  const addToWishList = (item) => {
    setWishList([...wishList, item]);
  };

  const handleChangforWeather = (e) => {
    setSearchValue(e.target.value);
  };

  const handleRemove = (index) => {
    const newList = wishList.filter((d, i) => i !== index);
    setWishList(newList);
  };

  return (
    <div>
      <div className="brand">
        <h2 className="All">All in one travel app </h2>
      </div>
      <h4 className="time">{new Date().toLocaleString()}</h4>

      <div className="title">
        <img src={image2} className="img2"></img>
      </div>
      <div className="moveup">
        <h1 className="travel">
          TRAVEL <span className="To">To</span> EXPLORE
        </h1>
        <WishList
          addToWishList={addToWishList}
          input={input}
          setInput={setInput}
        />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/page-one" />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo input={input} />} />
          //
          <Route
            path="/page-three"
            element={
              <PageThree
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                input={input}
                handleChangforWeather={handleChangforWeather}
              />
            }
          />
          <Route
            path="/page-four"
            element={
              <PageFour handleRemove={handleRemove} wishList={wishList} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
