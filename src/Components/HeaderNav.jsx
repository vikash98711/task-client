import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const HeaderNav = () => {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', query: '' });
  const [errors, setErrors] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle the nav icon

  // Monitor scroll and add sticky class to the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email';
    
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    
    if (!formData.query.trim()) newErrors.query = 'Query is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post('https://task-project-6p4v.onrender.com/api/enroll', formData);
        if (response.status === 200) {
          Swal.fire('Success!', 'Form submitted successfully', 'success');
          setFormData({ name: '', email: '', phone: '', query: '' });
          setShowModal(false);
        }
      } catch (error) {
        Swal.fire('Error', 'There was a problem submitting the form', 'error');
      }
    } else {
      Swal.fire('Invalid input', 'Please correct the errors in the form', 'error');
    }
  };

  // Handle modal open and close
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Toggle navbar open and close states
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Navbar expand="lg" className={`Navbar-wrapper ${scrolled ? 'sticky-navbar' : ''}`}>
        <Container>
          <Navbar.Brand href="#" className="text-white">Book Your Seat 00:00:00</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleNav}>
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} className="text-white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" className={isNavOpen ? 'show' : ''}>
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            </Nav>
            <Button variant="outline-success" onClick={handleOpenModal}>Enroll Now</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered style={{zIndex:'99999999'}}>
        <Modal.Header closeButton>
          <Modal.Title>Enroll Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Textarea for Query */}
            <Form.Group controlId="formQuery" className="mt-3">
              <Form.Label>Query</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                isInvalid={!!errors.query}
              />
              <Form.Control.Feedback type="invalid">
                {errors.query}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" className="mt-3" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Custom CSS */}
      <style jsx>{`
        .sticky-navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          transition: background-color 0.3s ease-in-out;
          z-index: 999999;
        }
        .navbar-toggler {
          border: none;
        }
        .navbar-toggler:focus {
          outline: none;
          box-shadow: none;
        }
      `}</style>
    </>
  );
};

export default HeaderNav;
