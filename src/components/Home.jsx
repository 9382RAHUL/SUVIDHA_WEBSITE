import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import "./home.css";
import "animate.css";
// import Navbar from "./Navbar";
// import Marquee from "react-marquee-slider";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <body>
        <div className="background-image">
          <h1 className=" animate__animated animate__backInDown animate__delay-0.5s">
            Suvidha Foundation (Suvidha Mahila Mandal)
          </h1>

          {/* <h1 className="animate__animated animate__bounce">An animated element</h1> */}
        </div>
      </body>

      <section id="home">
        <h2 style={{ color: "#2183bb" }}>ABOUT</h2>
        <p>
          Suvidha Mahila Mandal is a non-profit organization working to impart
          education among the financially challenged sections to help them
          realize parity in education and strength of little minds in building a
          promising future. The organization has provisions of student
          internships, student mentorship and the scope to volunteer. Through
          these programmes, the organization aims to achieve the vision of
          imparting innovative education that stays with the students forever
          and equip them for the unforeseen future.
        </p>
      </section>

      {/* <section id="cause">
        <h2 style={{ color: "#000;" }}>LE CAUSE</h2>
        <h4>La ludopatia è influenzata da diversi fattori, tra cui:</h4>
      </section> */}

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="/aboutimage.jpg"
              className="card-image"
              alt="Fattori biologici"
            />
          </div>
          <div className="flip-card-back">
            <h2 style={{ color: "#2183bb" }}>MISSION</h2>
            <p>
              To Inspire Students, help them Innovate and let them Integrate to
              build the next generation humankind. To Run Food Donation And
              Awareness Campaign In Rural Region.
            </p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="/VISION_IMAGE.jpeg"
              className="card-image"
              alt="Fattori Psicologici"
            />
          </div>
          <div className="flip-card-back">
            <h2 style={{ color: "#2183bb" }}>VISION</h2>
            <p>
              To build Next Generation Entrepreneur, by providing them a
              Skill-Based Education. To Provide Internship, Training And
              Workshops and Quality Education All Over The World..
            </p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="./WOMAN01.jpeg"
              // style={{width:"300px"}}
              className="card-image "
              alt="Fattori Ambientali"
            />
          </div>
          <div className="flip-card-back">
            <h2 style={{ color: "#2183bb" }}>MORE</h2>
            <p>
              Suvidha Foundation works for our society.We works for Womans
              Health.Suvidha Foundation NGO,s mission to provide healthcare
              access to underprivileged woman.
            </p>
          </div>
        </div>
      </div>

      {/* <section id="fasi">
        
      </section> */}
      <div className="container_intern">
        <div className="phases">
          <div className="phase" style={{ marginTop: "8rem" }}>
            <h2
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "5rem",
                textAlign: "center",
              }}
            >
              Apply For Internship and Mentorship Programs{" "}
            </h2>
            <p
              style={{
                textAlign: "center",
                fontSize: "30px",
                margin: "2rem 0",
                letterSpacing: "0.05em",
                color: "white",
              }}
            >
              Seize the opportunity to gain invaluable experience and jumpstart
              your career with an internship that propels you towards success.
            </p>
            <p
              style={{
                textAlign: "center",
                color: "white",
                marginBottom: "6rem",
              }}
            >
              The Suvidha Foundation Internship Program is a unique opportunity
              for students and recent graduates to gain experience and
              contribute to the work of Suvidha Foundation. Along with
              undertaking tasks related to their specific skills, we encourage
              interns to develop a reputable professional portfolio.
            </p>
          </div>

          <NavLink className="apply">Apply</NavLink>
        </div>
      </div>

      <section id="sintomi">
        <h2 style={{ color: "#2183bb", fontSize: "50px", fontWeight: "bold" }}>
          Causes for a Sustainable Future
        </h2>
        {/* <h4>possono includere:</h4> */}
      </section>
      <div className="symptoms-list">
        <div className="symptom">
          <div
            className="symptom-icon"
            style={{ color: "#2183bb", fontSize: "20px", fontWeight: "bold" }}
          >
            Healthy Food
          </div>
          <div className="symptom-description">
            By focusing on healthy food donations, our NGO aims to improve the
            well-being and quality of life for individuals and communities in
            need.
          </div>
        </div>
        <div className="symptom">
          <div
            className="symptom-icon"
            style={{ color: "#2183bb", fontSize: "20px", fontWeight: "bold" }}
          >
            Social Awareness
          </div>
          <div className="symptom-description">
            We provide resources, conduct awareness campaigns, and facilitate
            access to hygiene facilities, aiming to create a healthier
            environment and prevent the spread of diseases.
          </div>
        </div>
        <div className="symptom">
          <div
            className="symptom-icon"
            style={{ color: "#2183bb", fontSize: "20px", fontWeight: "bold" }}
          >
            Tree Plantation
          </div>
          <div className="symptom-description">
            Through community engagement and active participation, we
            successfully planted thousands of trees, fostering a greener and
            healthier ecosystem for future generations.
          </div>
        </div>
        <div className="symptom">
          <div
            className="symptom-icon"
            style={{ color: "#2183bb", fontSize: "20px", fontWeight: "bold" }}
          >
            Health Care
          </div>
          <div className="symptom-description">
            We believe that access to healthcare is a fundamental right, and we
            work tirelessly to ensure that healthcare services are accessible,
            affordable, and of high quality for those in need.
          </div>
        </div>
        <div className="symptom">
          <div
            className="symptom-icon"
            style={{ color: "#2183bb", fontSize: "20px", fontWeight: "bold" }}
          >
            Primary Education
          </div>
          <div className="symptom-description">
            By collaborating with local communities and educators, we aim to
            empower children with the knowledge and skills they need for a
            brighter future.
          </div>
        </div>
        <div className="symptom">
          <div
            className="symptom-icon"
            style={{ color: "#2183bb", fontSize: "20px", fontWeight: "bold" }}
          >
            Social Care
          </div>
          <div className="symptom-description">
            Our programs encompass a range of support services, including
            counseling, vocational training, and advocacy, with the goal of
            empowering individuals
          </div>
        </div>
      </div>
      <div className="mid1" style={{ marginBottom: "30px" }}>
        {/* <marquee behavior="scroll" direction="right" style={{display:"flex"}}> */}

        <section className="mid1_sec">
          <p >15+</p>
          <span >Countries</span>
        </section>
        <section className="mid1_sec">
          <p >5L+</p>
          <span >Volunteers</span>
        </section>
        <section className="mid1_sec">
          <p >1Cr+</p>
          <span >Internship Goal</span>
        </section>
        <section className="mid1_sec">
          <p >54L+</p>
          <span >Trees Planted</span>
        </section>
        {/* </marquee> */}
      </div>

      {/* // meet members */}
      <div>
        <strong className="title_person">Meet Members</strong>
        <p className="title_desc">Guys behind our charity activities</p>
      </div>
      <div className="main_card_members">
        {/* <h1>MEET MEMBERS</h1> */}
        <div className="card_member">
          {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg> */}
          <img
            src="./P1.jpeg"
            alt=""
            style={{
              height: "200px",
              width: "300px",
              border: "2px solid #2183bb",
            }}
          />
          <div className="card__content">
            <p className="card__title">Shobha Motghare</p>
            <p className="card__description">Secretary</p>
            <a href="http://linkdin.com">
              <FaLinkedinIn
                size={40}
                color="white"
                style={{
                  backgroundColor: "#2183bb",
                  padding: "8px",
                  border: "2px solid black",
                  marginTop: "20px",
                  borderRadius: "12px",
                }}
              />
            </a>
          </div>
        </div>
        <div className="card_member">
          {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg> */}
          <img
            src="./P2.jpg"
            alt=""
            style={{
              height: "200px",
              width: "300px",
              border: "2px solid #2183bb",
            }}
          />

          <div className="card__content">
            <p className="card__title">Payal Badhe</p>
            <p className="card__description">President</p>
            <a href="http://linkdin.com">
              <FaLinkedinIn
                size={40}
                color="white"
                style={{
                  backgroundColor: "#2183bb",
                  border: "2px solid black",
                  padding: "8px",
                  marginTop: "20px",
                  borderRadius: "12px",
                }}
              />
            </a>
          </div>
        </div>
        <div className="card_member">
          {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg> */}
          <img
            src="./P3.jpg"
            alt=""
            style={{
              height: "200px",
              width: "300px",
              border: "2px solid #2183bb",
            }}
          />

          <div className="card__content">
            <p className="card__title">Bharti Shendre</p>
            <p className="card__description">Treasurer</p>
          </div>
        </div>
        <div className="card_member">
          {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg> */}
          <img
            src="./P4.jpg"
            alt=""
            style={{
              height: "200px",
              width: "300px",
              border: "2px solid #2183bb",
            }}
          />

          <div className="card__content">
            <p className="card__title">Nilima Kalambe</p>
            <p className="card__description">Advisor</p>
          </div>
        </div>
      </div>
      <hr style={{marginTop:"30px"}} />

      <section>
        <h5 style={{ fontSize: "30px" }}>Testimonial</h5>
        <p className="testimonial">
          What people are talking about our charity activities
        </p>
      </section>
      <marquee direction="right" className="ccc">
        <div className="card_mar_cen">
          <div className="card_main">
            <div className="image">
              <img src="./assests/pic1.jpg" alt="" />
            </div>
            <div className="content">
              <a href="#">
                <span className="title">Sanjana Tunk</span>
              </a>

              <p className="descrip">
                It was entirely a new experience and gained a lot from it.
              </p>
            </div>
          </div>
          <div className="card_main">
            <div className="image">
              <img src="./assests/pic2.jpg" alt="" />
            </div>
            <div className="content">
              <a href="#">
                <span className="title">Manya Sahni</span>
              </a>

              <p className="descrip">
                Thank you for giving me the opportunity.Did this intership which
                is bit differnet from others and unique.
              </p>
            </div>
          </div>
          <div className="card_main">
            <div className="image">
              <img src="./assests/pic4.jpg" alt="" />
            </div>
            <div className="content">
              <a href="#">
                <span className="title">Aheri Ghosh</span>
              </a>

              <p className="descrip">
                I am glad to have worked with the Suvidha Foundation because I
                am passionate about their message and what they do.
              </p>
            </div>
          </div>
          <div className="card_main">
            <div className="image">
              <img src="./assests/pic5.jpg" alt="" />
            </div>
            <div className="content">
              <a href="#">
                <span className="title">Lekhashree H G</span>
              </a>

              <p className="descrip">
                It was a great experience with working your NGO.
              </p>
            </div>
          </div>
        </div>
      </marquee>
    </>
  );
};

export default Home;
