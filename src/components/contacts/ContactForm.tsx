import React from 'react';
import { useFormik } from 'formik';
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
            />
            <button type="submit">Submit</button>
        </StyledForm>
    );
};