import React, { Component } from "react";
import Fade from "react-reveal";
import Test from './Test'

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about" >
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">


              <p style={{ fontWeight: "bold", fontSize: '18px', color: '#c4a747' }}>{bio}</p>
              <div className="row">
                {/* <div className="columns contact-details">
                  <h2 style={{ color: 'black' }}>Contact Details</h2>
                  <p style={{ color: '#c4a747' }} className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div> */}
                <div style={{ width: '100%' }} className="columns download">
                  <h2 style={{ color: 'black' }}>Customer Reviews</h2>
                  <Test />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
