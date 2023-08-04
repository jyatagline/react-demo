import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Productdetails(props) {
  const [product, setProduct] = useState({
    title: "",
    id: "",
    image: "",
    price: "",
    category: "",
  });
  const navigate = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res);
      setProduct(res.data);
    });
  }, [id]);
  return (
    <div>
      <h2 style={{margin: '30px'}}>{product.category.toUpperCase()}</h2>
      <img src={product.image} width={300} height={300} alt="product" />
      <p style={{width:"50%",margin:"auto",lineHeight:"28px"}}>{product.description}</p>
      <br />
      <br />

      <button className="login-but "
        onClick={() => {
          navigate("/routing");
        }}
      >
        Go back to Products
      </button>
     
    </div>
  );
}

export default Productdetails;