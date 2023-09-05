import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);
const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <Title />
      <Title></Title>
      <h1 className="heading">
        This is a React Functional Component which has been full resolved🚀
        production ready?
      </h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
