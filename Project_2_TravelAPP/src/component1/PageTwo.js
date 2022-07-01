import React from "react";

const PageTwo = (props) => {
  const img = `https://source.unsplash.com/400x200/?${props.input}`;
  const img2 = `https://source.unsplash.com/150x200/?${props.input}`;
  const img3 = `https://source.unsplash.com/130x200/?${props.input}`;
  const img4 = `https://source.unsplash.com/155x200/?${props.input}`;
  const img5 = `https://source.unsplash.com/122x200/?${props.input}`;
  const img6 = `https://source.unsplash.com/300x200/?${props.input}`;

  return (
    <div className="pageTwo">
      {props.input === "" ? null : (
        <>
          <div>
            <img src={img} alt="search" />
            <img src={img2} alt="search" />
            <img src={img3} alt="search" />
          </div>
          <div>
            <img src={img4} alt="search" />
            <img src={img5} alt="search" />
            <img src={img6} alt="search" />
          </div>
        </>
      )}
    </div>
  );
};

export default PageTwo;
