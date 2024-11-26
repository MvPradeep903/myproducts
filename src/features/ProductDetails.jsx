import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetProductDetailsByIdQuery } from '../services/productAPI';

function ProductDetails() {
    var {id} = useParams();
    var {data} = useGetProductDetailsByIdQuery(id);
    console.log("details:",data)
  return (
    <div className='border border-secondary rounded-2 w-50 ms-5 p-2 shadow mt-5 d-flex'>
        <div>
            <h4>Title: {data?.title}</h4>
            <img src={data?.image} alt='' style={{width:"200px"}}  />
        </div>
        <div className='d-flex flex-wrap'>
            <div>
              <h6>Price : ${data?.price}</h6>  
              <h6>Category : {data?.category}</h6>
              <h6>Description : {data?.description.slice(1,50)}</h6>
            </div>
            <div>
              <button className='btn btn-danger me-3'>Delete</button>
              <button className='btn btn-success'>Edit</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
