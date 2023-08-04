import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Routing.css'
function Jwellery(props) {
  const [jwellerydata, setJwelleryData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => {
        setJwelleryData(res.data);
      });
  }, []);
  return (
    <div>
      <h2 style={{padding:"16px 0px"}}>Jwellery Product</h2>
      <div className="product-container">
        <ol type="none">
          {jwellerydata.map((data) => {
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

export default Jwellery;