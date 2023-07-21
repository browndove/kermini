import React, {useRef} from 'react'
import {Card, Form, Button} from "react-bootstrap"

const Signup = () => {
    const emailRef = useRef
    const passwordRef = useRef
    const passwordconfirmRef = useRef
  return (
    <>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Form>
                <Form.Group id="email">
            <Form.Label>Email</Form.Label>
                </Form.Group>
                <Form.Control type='email' ref={emailRef} required />
            </Form>

            {/* password */}
            <Form>
                <Form.Group id="paasword">
            <Form.Label>Password</Form.Label>
                </Form.Group>
                <Form.Control type='password' ref={passwordRef} required />
            </Form>

{/* Password confirm  */}
            <Form>
                <Form.Group id="password-confirm">
            <Form.Label>Password confirmation</Form.Label>
                </Form.Group>
                <Form.Control type='password' ref={passwordconfirmRef} required />
                <Button className='w-100' type='submit'>Sign Up</Button>
            </Form>

        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already Have an account? Login</div>
    </>
  )
}

export default Signup
