import React from "react";

import { Link } from "react-router-dom";
import { useGetProductQuery } from "../services/productAPI";

function Products() {
  var { isLoading, data } = useGetProductQuery();
     console.log(isLoading,data)
  return (
    <div>
      <div className="d-flex flex-wrap container">
        {
          !isLoading && data?.map((d, i) => {
            return (
              <div className="card m-2 p-3" style={{width: "18rem"}}>
                <img src={data?.image} alt='' style={{width:"150px"}}  />
                <div className="card-body">
                  <h6 className="card-title">{d.title}</h6>
                  <Link to={`/product/${d.id}`} className="btn btn-primary">
                    View More
                  </Link>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Products;
{/* <div className="card" style={{width: "18rem"}}>
  <img src={data?.image} style={{width:'150px'}} alt="...">
  <div className="card-body">
    <h5 className="card-title">{d.title}</h5>
    <Link to={`/product/${d.id}`} className="btn btn-primary">View More</Link>
  </div>
</div> */}

{/* <div key={i} className="border border-1 m-2 p-3 w-25">
                    <h6>{d.title}</h6>
                    <img src={d.image} style={{width:'150px'}}/> <br />
                    <Link to={`/product/${d.id}`}>
                        <button className="btn btn-primary">View More</button>
                    </Link>
                </div> */}