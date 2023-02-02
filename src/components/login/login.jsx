import { ErrorMessage, Field, Form, Formik, validateYupSchema, yupToFormErrors } from "formik";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import routes from "../../constants/routes";
import * as yup from 'yup';


const validationSchema = yup.object().shape({
    email: yup.string().required('Required').email('Invalid email address'),
    password: yup.string().required('Required')
});

const Login = () => {
    return (
        <Routes>
            <Route path={routes.login} element={
                <div className="login">
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
                                    Log In
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <div>
                        Don't have an account? <br />
                        <Link to={routes.signUp}>
                            <span>Sign Up</span>
                        </Link>
                    </div>
                </div>
            } />
        </Routes>
    );
}

export default Login;