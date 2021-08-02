import React, { Component } from "react";
import Test from './Test'

class Testimonials extends Component {
  render() {
    if (!this.props.data) return null;

    const testimonials = this.props.data.testimonials.map(function (testimonials) {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      );
    });

    return (
      <section id="testimonials">
        <Test />
      </section>
    );
  }
}

export default Testimonials;
