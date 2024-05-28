import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const View = () => {
  const { id } = useParams();
  const [activeButton, setActiveButton] = useState("What You Get");
  const showOverview = () => {
    setActiveButton("Overview");
  };

  const showImpact = () => {
    setActiveButton("Impact");
  };

  const showWhatYouGet = () => {
    setActiveButton("What You Get");
  };

  const [resturant, setResturant] = useState();

  useEffect(() => {
    if (localStorage.getItem("allProducts")) {
      const foundResturant = JSON.parse(localStorage.getItem("allProducts"));

      setResturant(foundResturant.find((item) => item.id == id));
    }
  }, []);

  if (!resturant) {
    return <div>Loading!!!!!!!!</div>;
  }

  const getContent = () => {
    switch (activeButton) {
      case "What You Get":
        return (
          resturant && (
            <div
              style={{ maxHeight: "500px", overflowY: "auto" }}
              className="my-5"
            >
              {resturant.reviews?.length ? (
                resturant.reviews.map((review, index) => (
                  <div key={index} className=" text-white p-2 mb-2">
                    <Card className="bg-light text-dark ">
                      <Card.Body>
                        <p className="text-justify">
                          {review.name}: {review.comments}
                        </p>
                        <p>
                          Rating: {review.rating}
                        </p>
                        <p>
                          Date: {review.date}
                        </p>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </div>
          )
        );

      case "Overview":
        return (
          <ul className="text-decoration-none list-style-none py-5  mt-5 text-dark">
            {Object.entries(resturant.operating_hours).map(([day, hours]) => (
              <li className="text-decoration-none list-style-none" key={day}>
                <strong>{day}:</strong> {hours}
              </li>
            ))}
          </ul>
        );
      case "Impact":
        return (
          resturant && (
            <iframe
              className="mt-5  "
              title="Restaurant Location"
              src={`https://maps.google.com/maps?q=${resturant.latlng.lat},${resturant.latlng.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )
        );

      default:
        return null;
    }
  };

  return (
    <>
      <NavBar />
      <div
        className="container container-fluid d-flex justify-content-center align-items-top text-white"
        style={{ marginTop: "80px" }}
      >
        <div className="row align-items-top my-5">
          <div className="col-lg-6">
            <img
              width={"100%"}
              className="rounded"
              src={resturant.photograph}
              alt=""
            />
          </div>
          <div className="col-lg-6 p-lg-5 mt-5 shadow">
            <h6>Restuarant no: {resturant.id}</h6>
            <h1>Name: {resturant.name}</h1>
            <h6>Type: {resturant.cuisine_type}</h6>
            <h6>City: {resturant.neighborhood}</h6>
            <h6>Address: {resturant.address}</h6>
            <div
              className="btn-group mt-5 text-white"
              role="group"
              aria-label="Content Toggle Buttons"
            >
              <button
                type="button"
                className="btn  btn-white text-dark"
                onClick={showWhatYouGet}
              >
                Review
              </button>
              <button
                type="button"
                className="btn btn-white text-dark"
                onClick={showOverview}
              >
                Timing
              </button>
              <button
                type="button"
                className="btn  btn-white text-dark"
                onClick={showImpact}
              >
              </button>
            </div>
            <div id="contentDisplay">{getContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
