import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import routes from "../../constants/routes";
import * as yup from 'yup';


const validationSchema = yup.object().shape({
    email: yup.string().required('Required').email('Invalid email address'),
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