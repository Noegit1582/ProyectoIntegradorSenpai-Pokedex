import { Link } from "react-router-dom";
import "../NotFound404/NotFound404.css";
import React from "react";
/* import errorImage from "../../assets/pokemonerrorpage2.jpeg";
 */
import errorImage2 from "../../assets/pokemonerrorpage.png";

const NotFound404 = () => {
  return (
    <main className="background">
      <h1 className="errorTitle">Oops! You seem to be lost.</h1>
      <p className="errorParagraph">Here are a helpful link:</p>
      <Link style={{ fontSize: "25px" }} to="/">
        Home
      </Link>
      <div className="notFoundImage">
        <img src={errorImage2} style={{ maxWidth: "23rem" }} alt="" />
      </div>
    </main>
  );
};
export default NotFound404;
