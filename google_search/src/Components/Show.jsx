import React from "react";

const Show = (props) => {
  const { results, info } = props;
  return (
    <div className="show">
      <div className="show__info">
        {info ? `Total results: ${info.totalResults}` : ""}
      </div>
      {results.length > 0
        ? results.map((result) => (
            <div id="detailed-result">
              <div className="show__link">
                <a href={result.url}>{result.url}</a>
              </div>
              <div className="title">
                <a href={result.link}>{result.title}</a>
              </div>
              <div className="desc">
                <p>{result.description}</p>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Show;
