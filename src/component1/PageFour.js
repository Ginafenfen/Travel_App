import React, { useState, useEffect } from "react";

const PageFour = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [gifUrl, setGifUrl] = useState("");

  const fetchGif = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();
      console.log(data);
      setGifUrl(data.data.images.downsized.url);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const url =
      "https://api.giphy.com/v1/gifs/random?api_key=G2aSfGklbIhABGgUtipWmH5eVI6GyMCC&tag=&rating=g";
    fetchGif(url);
  }, []);

  let content = "";
  if (gifUrl) {
    content = <img src={gifUrl} alt="Random Gif"></img>;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Random Gif is Loading .. please wait.</p>;
  }

  let things = props.wishList.map((d, i) => {
    return (
      <>
        <li key={i}>
          Plan to go <span className="Country">{d.input} </span>on{" "}
          <span className="Country">{d.checkIn} </span>till{" "}
          <span className="Country">{d.checkOut}</span>
        </li>
        <button onClick={() => props.handleRemove(i)} className="button-74">
          remove
        </button>
      </>
    );
  });

  return (
    <div>
      <div className="wishList">{things}</div>
      <div className="gif">{content}</div>
    </div>
  );
};

export default PageFour;
