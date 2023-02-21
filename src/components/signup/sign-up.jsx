import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import routes from "../../constants/routes";
import * as yup from 'yup';


const validationSchema = yup.object().shape({
    email: yup.string().required('Required').email('Invalid email address').min(2, 'Too Short!').max(70, 'Too Long!'),
    password: yup.string().required('Required')
});

const SignUp = () => {
    return (
        <Routes>
            <Route path={routes.login} element={
                <div className="sign-up">
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{ 
                            name: '',
                            email: '',
                            password: ''
                        }}
               
                        onSubmit = {values=> {
                            console.log('submit',values);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                 <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                                <Field type="name" name="name" />
                                <ErrorMessage name="name" component="div" />
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" />
                                <Field type="password" name="re-enter password" />
                                <ErrorMessage name="password" component="div" />
                                <button type="submit" disabled={isSubmitting}>
                                    Sign Up
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <div>
                        Already have an account?<br />
                        <Link to={routes.login}>
                            <span>Log In</span>
                        </Link>
                    </div>
                </div>
            } />
        </Routes>
    );
}

export default SignUp;