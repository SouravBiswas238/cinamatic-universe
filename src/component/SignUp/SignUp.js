import { } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../img/Google-Icon-PNG-768x768.png';
import Loading from '../Loading/Loading';

const SingUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updateError] = useUpdateProfile(auth);

    const [sendEmailVerification, varificationSending, verificationError] = useSendEmailVerification(auth);

    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phonRef = useRef('');
    const batchRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');



    const [signInWithGoogle, user1, sending, googleSingInError] = useSignInWithGoogle(auth);

    let errorPass;
    const handelErrorPassword = () => {
        errorPass =
            <p className='text-danger' >Password did not matched</p>
    }


    let errorElement;
    if (googleSingInError || error) {
        console.log(error)
        errorElement =
            <div>
                <p className='text-danger' >Error: {error?.message}</p>
            </div>
    }
    const location = useLocation();
    let form = location.state?.from?.pathname || "/";

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user1 || user) {
        navigate(form, { replace: true });

    }

    const navigateLogin = event => {
        navigate('/login');
    }


    const handleCreateUser = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            handelErrorPassword();
            return;
        }
        console.log(email, password)
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await sendEmailVerification();
    }


    return (
        <div className='m-auto w-50 text-center py-4 mt-4 my-shadow'>

            <Form onSubmit={handleCreateUser} className='w-50 w-sm-100  m-auto'>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalNAme">
                    <Col>
                        <Form.Control ref={nameRef} type="text" placeholder=" First Name" />
                    </Col>
                    <Col>
                        <Form.Control ref={nameRef} type="text" placeholder="Last name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalNAme">
                    <Col>
                        <Form.Control ref={batchRef} type="text" placeholder=" Batch" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalNAme">
                    <Col>
                        <Form.Control ref={phonRef} type="text" placeholder=" Mobile number" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                    <Col>
                        <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>
                {errorPass}
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">

                    <Col>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalConfirmPassword">


                    <Col >
                        <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                    </Col>
                </Form.Group>
                {errorElement}

                <Form.Group className="mb-3">

                    <Button type="submit" className='w-50  w-sm-100 text-[#000]' >Sign Up</Button>

                    <div className='row-or-box mt-3  w-sm-100'>
                        <div className='row-border-box'></div>
                        <span>or</span>
                        <div className='row-border-box'></div>
                    </div>
                </Form.Group>
            </Form>

            <p>Already Have an account <span role="button" className='text-danger pointer button' onClick={navigateLogin}>Login</span></p>

            <div className='continue-google-button text-center'>
                <button className='flex w-96 text-center justify-center relative left-[200px] top-5'
                    onClick={() => signInWithGoogle()}>
                    <img src={googleIcon} alt="google-img" />
                    <span className='ms-1'>Continue with Google</span>
                </button>
            </div>
        </div >
    );
};


export default SingUp;