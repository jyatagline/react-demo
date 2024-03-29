import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Routing.css";
function Electronics(props) {
  const [electronicdata, setElectronicData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        setElectronicData(res.data);
      });
  }, []);
  return (
    <div>
      <h2 style={{ padding: "16px 0px" }}>Electronic Product</h2>
      <div className="product-container">
        <ol>
          {electronicdata.map((data) => {
            return (
              <Link style={{ color: "blue" }} to={`/productdetails/${data.id}`}>
                <li style={{ marginTop: "20px" }}>{data.title}</li>
              </Link>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Electronics;
