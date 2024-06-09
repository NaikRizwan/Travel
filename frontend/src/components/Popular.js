import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .popular_destination_area {
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #f9f9f9;
  }

  .section_title h3 {
    font-size: 36px;
    font-weight: 700;
    color: #333;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  .section_title p {
    font-size: 16px;
    color: #666;
    line-height: 1.8;
  }

  .single_destination {
    position: relative;
    margin-bottom: 30px;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .single_destination:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  .thumb img {
    width: 100%;
    border-radius: 10px 10px 0 0;
    transition: transform 0.3s ease-in-out;
  }

  .single_destination:hover .thumb img {
    transform: scale(1.1);
  }

  .content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    // background-color: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 0 0 10px 10px;
    transition: background-color 0.3s ease-in-out;
  }

  .single_destination:hover .content {
    // background-color: rgba(0, 0, 0, 0.9);
  }

  .content p {
    margin-bottom: 10px;
    font-size: 18px;
    color: #fff;
    text-transform: uppercase;
  }

  .content p a {
    display: inline-block;
    background: #1ec6b6;
    font-size: 14px;
    border-radius: 20px;
    font-weight: 600;
    padding: 5px 15px;
    color: #fff;
    transition: background-color 0.3s ease-in-out;
    text-decoration: none;
  }

  .content p a:hover {
    background: #0f9c8d;
  }
`;

const Popular = () => {
  const destinations = [
    {
      name: "Kashmir",
      places: 20,
      imgUrl:
        "https://d3nn873nee648n.cloudfront.net/900x600/13765/13-HQ495247.jpg",
    },
    {
      name: "Jammu",
      places: 3,
      imgUrl:
        "https://d3nn873nee648n.cloudfront.net/900x600/13765/13-HQ495247.jpg",
    },
    {
      name: "Chenab Vally",
      places: 10,
      imgUrl:
        "https://d3nn873nee648n.cloudfront.net/900x600/13765/13-HQ495247.jpg",
    },
    {
      name: "Ladakh",
      places: 2,
      imgUrl:
        "https://d3nn873nee648n.cloudfront.net/900x600/3635/20-SS114857.jpg",
    },
    {
      name: "North Kashmir",
      places: 2,
      imgUrl:
        "https://d3nn873nee648n.cloudfront.net/900x600/3635/20-SS114857.jpg",
    },
    {
      name: "South Kashmir",
      places: 5,
      imgUrl:
        "https://d3nn873nee648n.cloudfront.net/900x600/3635/20-SS114857.jpg",
    },
  ];

  return (
    <Wrapper>
      <div className="popular_destination_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center mb_70">
                <h3>Discover Popular Destinations</h3>
                <p>
                  Explore our top-rated destinations and start planning your
                  next adventure today!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {destinations.map((destination, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single_destination">
                  <div className="thumb">
                    <img src={destination.imgUrl} alt={destination.name} />
                  </div>
                  <div className="content">
                    <p>
                      {destination.name}{" "}
                      <a href="travel_destination.html">
                        {destination.places} Places
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Popular;
