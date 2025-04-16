import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./ContactUs.scss";
import contact from "../../../assets/images/contact/contact.svg";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  Input,
  Spinner,
  Alert,
} from "reactstrap";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const fromRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errors, setErrors] = useState({});
  const [inputfield, setInputfield] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const validateFields = () => {
    const newErrors = {};
    if (!inputfield.name) newErrors.name = "Please enter full name";
    if (!inputfield.email) newErrors.email = "Please enter email";
    if (!inputfield.contact) newErrors.contact = "Please enter contact";
    if (!inputfield.message) newErrors.message = "Please enter message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateFields()) return;

    setIsLoading(true);
    emailjs
      .send(
        "service_c8f1usi",
        "template_61r4w3o",
        inputfield,
        "b0L6_lTlh0XpYy-b9"
      ).then(
        (result) => {
          setIsLoading(false);
          setSuccessMsg("Your message has been sent successfully!");
          setInputfield({ name: "", email: "", contact: "", message: "" });
          setTimeout(() => setSuccessMsg(""), 4000); // Hide message after 4s
        },
        (error) => {
          setIsLoading(false);
          console.error("Failed to send message:", error);
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
              {successMsg && (
                <Alert color="success" className="text-center success-msg">
                  {successMsg}
                </Alert>
              )}
              <Form onSubmit={handleSubmit} ref={fromRef}>
                <div className="field-section">
                  <Input
                    name="fullName"
                    id="fullName"
                    type="text"
                    onChange={(e) =>
                      setInputfield((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="input-field"
                    value={inputfield?.name}
                    placeholder="Full Name"
                  />
                  {errors.name && (
                    <p className="text-danger error-message">{errors.name}</p>
                  )}
                </div>
                <div className="field-section">
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
                  {errors.email && (
                    <p className="text-danger error-message">{errors.email}</p>
                  )}
                </div>

                <div className="field-section">
                  {" "}
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
                  {errors.contact && (
                    <p className="text-danger error-message">
                      {errors.contact}
                    </p>
                  )}
                </div>
                <div className="field-section">
                  <Input
                    name="message"
                    type="textarea"
                    placeholder="Message"
                    id="message"
                    className="input-field"
                    style={{ height: "95px" }}
                    onChange={(e) =>
                      setInputfield((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    value={inputfield?.message}
                  />
                  {errors.message && (
                    <p className="text-danger error-message">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  disabled={isLoading}
                  type="submit"
                  className="btn-submit"
                  color="primary"
                  outline
                >
                  {isLoading ? (
                    <Spinner
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                      }}
                      color="white"
                      className="mx-auto"
                    />
                  ) : (
                    "Submit"
                  )}
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
