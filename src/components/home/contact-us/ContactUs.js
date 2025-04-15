import React, { useState } from "react";
import { motion } from "framer-motion";

import "./ContactUs.scss";
import contact from "../../../assets/images/contact/contact.svg";
import { Button, Card, CardBody, CardTitle, Form, Input } from "reactstrap";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [inputfield, setInputfield] = useState({
    name: "",
    email: "",
    contact: null,
  });

  const handleSubmit = () => {
    emailjs
      .send(
        "service_gn66vtb",
        "YOUR_TEMPLATE_ID",
        // templateParams,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container contact-container" id="contact-section">
      <div className="contact-header">
        <h2>Contact Us</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 0, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="contact-section">
          <div className="img-section">
            <img
              src={contact}
              alt="contact"
              className="img-fluid contact-img"
            />
          </div>
          <Card className="card">
            <CardTitle tag="h5" className="card-title">
              Enquiry Form
            </CardTitle>
            <CardBody className="card-body">
              <Form onSubmit={handleSubmit}>
                <Input
                  name="fullName"
                  id="fullName"
                  type="text"
                  onChange={(e) =>
                    setInputfield((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="input-field"
                  value={inputfield?.name}
                  placeholder="Full Name"
                />
                <Input
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) =>
                    setInputfield((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="input-field"
                  value={inputfield?.email}
                  placeholder="Email address"
                />
                <Input
                  type="text"
                  name="contact"
                  id="contact"
                  onChange={(e) =>
                    setInputfield((prev) => ({
                      ...prev,
                      contact: e.target.value,
                    }))
                  }
                  className="input-field"
                  value={inputfield?.contact}
                  placeholder="Phone Number"
                />
                <Input
                  name="text"
                  type="textarea"
                  placeholder="message"
                  className="input-field"
                  style={{ height: "95px" }}
                />

                <Button
                  type="submit"
                  className="btn-submit"
                  color="primary"
                  outline
                >
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactUs;
