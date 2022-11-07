import React, { useRef } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import './Login.css';
import googleIcon from '../../img/Google-Icon-PNG-768x768.png';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, resetPasswordSending, error2] = useSendPasswordResetEmail(
        auth
    );

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();

    let form = location.state?.from?.pathname || "/";

    const handelSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }


    const [signInWithGoogle, user1, sending, error1] = useSignInWithGoogle(auth);
    let errorElement;
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement =
            <div>
                <p className='text-danger' >Error: {error?.message}</p>
            </div>
    }
    if (user || user1) {
        navigate(form, { replace: true });
    }
    const navigateRegister = (event) => {
        navigate('/signup');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Send Email')
        }
        else {
            toast('Please Enter Your Email address.')
        }

    }

    return (
        <div className='m-auto text-center p-4'>

            <Form onSubmit={handelSubmit} className='w-50 w-sm-100  m-auto'>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">

                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>
                {errorElement}

                <Form.Group className="mb-3">

                    <Button type="submit" className='w-50  w-sm-100' >Log in</Button>

                    <div className='row-or-box mt-3  w-sm-100'>
                        <div className='row-border-box'></div>
                        <span>or</span>
                        <div className='row-border-box'></div>
                    </div>
                </Form.Group>
                <ToastContainer />
            </Form>
            <p>New to Sourav Fitness <span role="button" className='text-primary pointer button' onClick={navigateRegister}>Please register</span></p>
            <p>Forget Password? <span role="button" className='text-primary pointer button' onClick={resetPassword}>Reset Password</span></p>


            <div className='continue-google-button '>

                <button className='w-25  w-sm-100'
                    onClick={() => signInWithGoogle()}>

                    <img src={googleIcon} alt="google-img" />
                    <span className='ms-1'>Continue with Google</span>
                </button>
            </div>
        </div >
    );
};

export default Login;