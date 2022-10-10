import React from 'react';
import {useFormik} from 'formik';
import styled from "styled-components";
import * as emailjs from '@emailjs/browser'
import * as Yup from 'yup'
//@ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'

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
    &:focus {
      border-style: dotted dashed solid double;
    }
  }
  .inputBox {
    position: relative;
    .expandable.show {
      position: absolute;
      top: 9px;
      right: 15px;
      color: red;
      font-size: 0.8rem;
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
    &:focus {
      border-style: dotted dashed solid double;
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
  @media screen and (max-width: 768px) {
    button {
      margin: 10px auto;
    }
    input, textarea {
      margin-bottom: 15px;
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
                .required('* field is required'),
            lastName: Yup.string()
                .required('* field is required'),
            email: Yup.string().email('Invalid email address')
                .required('* field is required'),
            message: Yup.string().required('* field is required')
        }),
        onSubmit: (values, { resetForm }) => {
            emailjs.send(`${process.env.REACT_APP_FORMIK_SERVICE_ID}`, `${process.env.REACT_APP_FORMIK_TEMPLATE_ID}`,
                values, `${process.env.REACT_APP_FORMIK_USER_ID}`)
                .then(() => {
                    console.log('email sent');
                });
            resetForm()
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="600">
            <div className={'inputBox'}>
                <input
                    id="firstName"
                    name="firstName"
                    placeholder={'First name'}
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                <div className={`expandable ${formik.touched.firstName && formik.errors.firstName ? 'show' : ''}`}>
                    {formik.errors.firstName}
                </div>
            </div>
            <div className={'inputBox'}>
                <input
                    id="lastName"
                    name="lastName"
                    placeholder={'Last name'}
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                <div className={`expandable ${formik.touched.lastName && formik.errors.lastName ? 'show' : ''}`}>
                    {formik.errors.lastName}
                </div>
            </div>
            <div className={'inputBox'}>
                <input
                    id="email"
                    name="email"
                    placeholder={'Enter your email'}
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <div className={`expandable ${formik.touched.email && formik.errors.email ? 'show' : ''}`}>
                    {formik.errors.email}
                </div>
            </div>
            <div className={'inputBox'}>
                <textarea
                    id="message"
                    name="message"
                    placeholder={'Type your message here ...'}
                    onChange={formik.handleChange}
                    value={formik.values.message}
                />
                <div className={`expandable ${formik.touched.message && formik.errors.message ? 'show' : ''}`}>
                    {formik.errors.message}
                </div>
            </div>

            <button type="submit">Submit</button>
        </StyledForm>
    );
};

AOS.init();