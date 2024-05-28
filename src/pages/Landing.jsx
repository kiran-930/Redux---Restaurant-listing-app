import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Row, Col, Spinner, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/slice/productSlice";

const Landing = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const { allProducts, error, loading } = useSelector(
    (state) => state.productReducer
  );

  console.log(allProducts, "api recied data");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(allProducts?.length / productsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };
  console.log(currentProducts, "all products");

  return (
    <>
      <NavBar insideHome={true} />
      <div className="mx-3" style={{ marginTop: "80px" }}>
        {loading ? (
          <div className="text-center mt-5 fw-bolder">
            <Spinner className="me-2" animation="border" variant="danger" />{" "}
            Loading...
          </div>
        ) : (
          <Row className="my-5">
            {currentProducts?.length > 0 ? (
              currentProducts?.map((product) => (
                <Col
                  key={product?.id}
                  className="mb-5  rounded-5  d-flex justify-content-center justify-content-md-center align-items-center flex-wrap"
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                >
                  <div className="profile-card-2">
                    <Link to={`${product.id}/view`}>
                      <img
                        src={product.photograph}
                        className="img img-responsive"
                        height={"400px"}
                        alt={product.name}
                      />
                    </Link>

                    <div className="profile-name">{product.name}</div>
                    <div className="profile-username">{`City: ${product.neighborhood}`}</div>
                    <div className="profile-username2">{`Tyoe: ${product.cuisine_type}`}</div>
                    <div className="profile-icons">
                      <Link to={`${product.id}/view`}>
                       
                      </Link>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <div className="fw-bolder text-center mt-5 mb-5 text-dark fs-1">
                product not found!!!
              </div>
            )}
          </Row>
        )}
        <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
            {Array.from(
              { length: Math.ceil(allProducts?.length / productsPerPage) },
              (_, i) => (
                <Pagination.Item
                  key={i}
                  active={i + 1 === currentPage}
                  onClick={() => paginate(i + 1)}
                  style={{
                    backgroundColor: i + 1 === currentPage ? "black" : "inherit",
                    color: i + 1 === currentPage ? "white" : "inherit",
                  }}
                >
                  {i + 1}
                </Pagination.Item>
              )
            )}
            <Pagination.Next onClick={() => paginate(currentPage + 1)} />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default Landing;
