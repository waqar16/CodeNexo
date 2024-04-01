import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoadingPlaceholder from "./LoadingPlaceholder";
import "./index.css";

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer on unmount (optional)
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      {loading ? <LoadingPlaceholder /> : <App />}
    </React.Fragment>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
