import React from "react";
import "./donar.css";
const Ddata = [
  {
    id: 1,
    name: "PATHIK RAMESH JUTHANI",
    amount: "10000",
  },
  {
    id: 2,
    name: "RAHUL V JAIN",
    amount: "5000",
  },
  {
    id: 3,
    name: "SANDEEP GUPTA",
    amount: "5000",
  },
  {
    id: 4,
    name: "RAHJAT HALDAR",
    amount: "10000",
  },
  {
    id: 5,
    name: "RAHJAT SINHA",
    amount: "10000",
  },
  {
    id: 6,
    name: "RAM SINGH ",
    amount: "10000",
  },
  {
    id: 7,
    name: "RAJAT DALAL",
    amount: "10000",
  },
  {
    id: 8,
    name: "RAJA KUMAR",
    amount: "10000",
  },
  {
    id: 9,
    name: "RAJAT MODAK",
    amount: "10000",
  },
];
const Donar = () => {
  return (
    <>
    <div className="main_donar_container">
    <div className="main_donar" style={{ marginTop: "20px" }}>
        <strong style={{ fontSize: "50px", color: "#2183bb" }}>
          Thanks for your contribution
        </strong>
        <p style={{ marginTop: "20px" }}>
          "Giving is not just about making donation. It is making a big
          difference. "
        </p>
      </div>
      {Ddata.map((items) => {
        return (
          <>
            <div className="main_card_donate">
              <div className="card_donate">
                <div className="card_donar">
                  <h3 className="card__title">{items.name}</h3>
                  <p className="card__content">
                    Donated Amount: {items.amount}
                  </p>
                  <div className="card__date">April 15, 2022</div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <hr />
      <section className="last_donar_part">
        <b className="last_donar_part_heading">Contribute for the future, for the society</b>
        <img src="./DONATE_IMAGE.jpg" alt="" className="qrcode" />
        <p className="desc">Let's join hands to eradicate hunger, each contribution a beacon of hope in the darkness. Together, our donations can nourish bodies and souls, weaving a brighter future for all. In this shared journey of compassion, let's stand as pillars of support, casting aside hunger's shadows with our collective kindness.</p>
      </section>
    </div>
      
    </>
  );
};

export default Donar;
