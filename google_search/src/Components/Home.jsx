// import React from "react";

import React from "react";
export const Home = (props) => {
  const [state, setState] = React.useState("");
  const searchGoogle = (e) => {
    props.history.push({ pathname: "/search", state });
  };
  return (
    <div className="home">
      <div id="navbar">
        <div className="home__logo">
          <img src="/images/googleLogo.png" alt="Logo" />
        </div>
        <form className="home__form" onSubmit={searchGoogle}>
          <input
            type="text"
            className="search-box"
            onChange={(e) => setState(e.target.value)}
            value={state}
            required
          />
          <div className="home__group">
            <input type="submit" className="search" value="Google Search" />
          </div>
          
        </form>
      </div>
    </div>
  );
};



