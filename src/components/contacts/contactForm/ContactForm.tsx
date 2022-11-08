import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as emailjs from '@emailjs/browser'
import * as Yup from 'yup'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { StyledForm } from './styledContactForm';

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