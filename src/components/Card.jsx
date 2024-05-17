import React from "react";

const Sdata = [
  {
    id: 1,
    title: "Tree Plantation",
    des: "Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.",
    img: "./event01.jpg",
  },
  {
    id: 2,
    title: "Fundraising Events",
    des: "Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.",
    img: "./fund.jpg",
  },
  {
    id: 3,
    title: "Cloths Distribution",
    des: "Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.",
    img: "./cloths.jpg",
  },
  {
    id: 4,
    title: "Women's Day",
    des: "Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions.",
    img: "./woman_day.jpg",
  },
  {
    id: 5,
    title: "Food Donation Initiatives by Our NGO",
    des: "Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.",
    img: "./donation.jpg",
  },
  {
    id: 6,
    title: "Ensuring Happy and Healthy Animals through Feeding Programs",
    des: "Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event.",
    img: "./animal.jpg",
  },
  {
    id: 7,
    title: "Sanitary Pads Distribution",
    des: "Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene..",
    img: "./pad.jpg",
  },
  {
    id: 8,
    title: "Free Workshops",
    des: "Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.",
    img: "./workshop.jpg",
  },
];
const Card = () => {
  return (
    <>
      {Sdata.map((item) => {
        return (
          <>
            <div className="card_con">
              <div className="card">
                <div className="content">
                  <div className="back">
                    <div className="back-content">
                      <strong>
                        <img src={item.img} alt="" className="image" />
                      </strong>
                    </div>
                  </div>
                  <div className="front">
                    <div className="img">
                      <div className="circle"></div>
                      <div className="circle" id="right"></div>
                      <div className="circle" id="bottom"></div>
                    </div>

                    <div className="front-content">
                      <small className="badge">{item.title}</small>
                      <div className="description">
                        <div className="title">
                          <p className="title">
                            <strong style={{ fontSize: "25px" }}>
                              {item.des}
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
