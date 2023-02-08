import React from 'react'
import './Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact1'>

      </div>
      <div className='contact2'>
    <Form className='Cform'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='btn'>
        Submit
      </Button>
    </Form>

      </div>
    </div>
  )
}
