import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react'


export default function Feedback() {
    return (
        <>
            <Form className="feedback-form">
                <header><h1>Feedback</h1></header>

                <Form.Group as={Col} controlId="feedbackFormName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" />
                </Form.Group>

                <Form.Group as={Col} controlId="feedbackFormEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Your email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="feedbackFormSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject of your feedback" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="feedbackFormMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>


                <Form.Group as={Col} controlId="feedbackFormRating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option value="5">Excellent</option>
                        <option value="4">Good</option>
                        <option value="3">Average</option>
                        <option value="2">Poor</option>
                        <option value="1">Terrible</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" id="feedbackFormCheckbox">
                    <Form.Check type="checkbox" label="Subscribe to newsletter" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit Feedback
                </Button>
            </Form>
        </>
    )
}

