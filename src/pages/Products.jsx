import React, { useEffect, useState } from 'react'
import { Get_Product } from '../redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Products = () => {

  // const [minPrice, setMinPrice] = useState('');
  // const [maxPrice, setMaxPrice] = useState('');
  let { product } = useSelector((store) => store.product);
  let [temp, setTemp] = useState(product)
  // let [cat, setCat] = useState(product)
  console.log(product);
  let dispatch = useDispatch();
  useEffect(() => {
    if (product.length == 0) {
      dispatch(Get_Product());
    }
  }, []);

  // Price filter
  // const handelPrice = () => {
  //   setTemp(product.filter((ele) => ele.price >= minPrice && ele.price <= maxPrice))
  // }

  // category filter

  // useEffect(() => {
  //   setTemp()
  // }, [cat])


  return (
    <section className='bg-secondary py-5'>
      <Container>
        <Col sm={12}>
          <div className='row'>
            {
              temp.map((ele) => {
                return (<>

                  <Link to={`/product/${ele.id}`} className='text-decoration-none col-3'>
                    <div className='prodcut bg-black m-2 rounded overflow-hidden'>
                      <div className='prodccut-img'>
                        <img src={ele.img} alt="" style={{ height: "250px" }} />
                      </div>
                      <div className="descripation px-2 py-3">
                        <p className='product-title fs-4 m-0 text-white'>{ele.title}</p>
                        <p className='m-0 text-white'><span className='fw-semibold text-uppercase pe-2'>price :</span>₹{ele.price}</p>
                        <p className='m-0 text-white text-capitalize'><span className='fw-semibold text-uppercase pe-2'>brand :</span>{ele.brand}</p>
                      </div>
                    </div>
                  </Link>
                </>)
              })
            }
          </div>
        </Col>
      </Container>

    </section>
  )
}

export default Products