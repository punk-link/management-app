import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import routes from "../../constants/routes";

const SignUp = () => {
    return (
        <Routes>
            <Route path={routes.login} element={
                <div className="sign-up">
                    <Formik
                        initialValues={{ email: '', password: ''}}
                        validate={values => {
                            let errors = {};

                            if (!values.email) 
                                errors.email = 'Requeired';
                            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                                errors.email = 'Invalid email address';

                            if (!values.password)
                                errors.password = 'Requeired';

                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                                <Field type="password" name="password" />
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