import React, {useState} from 'react';
import {useFormik} from 'formik';
import styled from "styled-components";
import * as emailjs from '@emailjs/browser'
import * as Yup from 'yup'
import { AiOutlineCloseCircle } from "react-icons/ai";

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
    .expandable {
      position: absolute;
      top: 6px;
      right: 5px;
      color: red;
      font-weight: bold;
      font-size: 0.8rem;
      padding: 5px 10px;
      border-radius: 30px;
      width: 150px;
    }
  }
  textarea {
    width: 100%;
    height: 120px;
    padding: 10px;
    background: transparent;
    color: ${({theme}) => theme.colors.whiteTextColor};
    border: 2px solid ${({theme}) => theme.colors.whiteTextColor};
    border-radius: 20px;
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
  .confirmationWindow {
    position: fixed;
    bottom: 10px;
    left: -230px;;
    background-color: green;
    color: white;
    border: 1px solid white;
    border-radius: 0 20px 20px 0;
    width: 230px;
    height: 35px;
    padding: 5px;
    transition: 1s;
    .closeConfirmation {
      margin-left: 10px;
      font-size: 1.3rem;
      vertical-align: middle;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @keyframes showConfDiv {
    0% {
      left: -230px;
    }
    100% {
      left: 0;
    }
  }
  .confirmationShowIt {
    animation: showConfDiv 2s forwards;;
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
    :active{
      position: relative;
      top: 2px;
      left: 0;
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
    const [confirmationShow, setConfirmationShow] = useState(false)

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
                    setConfirmationShow(true)
                });
            resetForm()
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <div className={'inputBox'}>
                <input
                    id="firstName"
                    name="firstName"
                    placeholder={'First name'}
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                <div className={`expandable ${formik.errors.firstName && formik.touched.firstName ? 'show' : ''}`}>
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
                    onBlur={formik.handleBlur}
                />
                <div className={`expandable ${formik.errors.lastName && formik.touched.lastName ? 'show' : ''}`}>
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
                <div className={`expandable ${formik.errors.email && formik.touched.email ? 'show' : ''}`}>
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
                <div className={`expandable ${formik.errors.message && formik.touched.message ? 'show' : ''}`}>
                    {formik.errors.message}
                </div>
            </div>
                <button type="submit">Submit</button>
                <div className={`confirmationWindow ${confirmationShow && 'confirmationShowIt'}`}>
                    <span>Your email has been sent!</span>
                    <span className={'closeConfirmation'} onClick={()=>setConfirmationShow(false)}><AiOutlineCloseCircle/></span>
                </div>
        </StyledForm>
    );
};