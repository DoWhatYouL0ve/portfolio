import React from 'react';
import {useFormik} from 'formik';
import styled from "styled-components";
import * as emailjs from '@emailjs/browser'
import * as Yup from 'yup'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    margin-bottom: 30px;
    padding: 10px;
    background: transparent;
    color: ${({theme}) => theme.colors.whiteTextColor};
    border: 2px solid ${({theme}) => theme.colors.whiteTextColor};
    border-radius: 30px;

    ::placeholder {
      opacity: 1;
      color: ${({theme}) => theme.colors.secondaryTextColor};
    }
  }

  textarea {
    width: 100%;
    height: 120px;
    padding: 10px;
    background: transparent;
    color: ${({theme}) => theme.colors.whiteTextColor};
    border: 2px solid ${({theme}) => theme.colors.whiteTextColor};
    border-radius: 30px;
    resize: none;
    margin-bottom: 30px;

    ::placeholder {
      opacity: 1;
      color: ${({theme}) => theme.colors.secondaryTextColor};
    }
  }

  button {
    width: 142px;
    background: ${({theme}) => theme.colors.whiteTextColor};
    color: ${({theme}) => theme.bg.primaryBgColor};
    border: 2px solid ${({theme}) => theme.colors.whiteTextColor};
    cursor: pointer;
    margin: 20px;
    font-family: "Space Mono", Arial, serif;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 30px;
    padding: 8px 20px;

    a {
      color: ${({theme}) => theme.colors.whiteTextColor};
    }

    &:hover {
      transition: 0.5s;
      scale: 1.1;
    }
  }
`

export const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('* Name field is required'),
            lastName: Yup.string()
                .required('* Subject field is required'),
            email: Yup.string().email('Invalid email address')
                .required('* Email field is required'),
            message: Yup.string().required('* Message field is required')
        }),
        onSubmit: values => {
            emailjs.send(`${process.env.REACT_APP_FORMIK_SERVICE_ID}`, `${process.env.REACT_APP_FORMIK_TEMPLATE_ID}`,
                values, `${process.env.REACT_APP_FORMIK_USER_ID}`)
                .then(() => {
                    console.log('email sent');
                });
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <input
                id="firstName"
                name="firstName"
                placeholder={'First name'}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <input
                id="lastName"
                name="lastName"
                placeholder={'Last name'}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <input
                id="email"
                name="email"
                placeholder={'Enter your email'}
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <textarea
                id="message"
                name="message"
                placeholder={'Type your message here ...'}
                onChange={formik.handleChange}
                value={formik.values.message}
            />
            <button type="submit">Submit</button>
        </StyledForm>
    );
};