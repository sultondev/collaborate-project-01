import { Formik } from "formik";
import appLogo from "../../assets/icons/favicon/logo.svg";
import userLogo from "../../assets/icons/settings/user-logo.svg";

import "./LogIn.style.sass";
import { Link } from "react-router-dom";
import axios from "axios";

const LogInPage = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="login-wrapper">
          <header className="login-header flex">
            <h1 className="login-header__title">Log In</h1>
            <div className="login-icons flex">
              <div className="">
                <img src={userLogo} alt="" className="login-icons__icon" />
              </div>

              <div className="login-icons__line"></div>

              <div className="">
                <img src={appLogo} alt="" className="login-icons__icon" />
              </div>
            </div>
          </header>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
              axios
                .post(
                  "https://todo-app-back-sultondev.herokuapp.com/auth/local",
                  {
                    identifier: values.email,
                    password: values.password,
                  }
                )
                .then(function (response) {
                  alert("successfully authorized: " + response.data);
                })
                .catch(function (error) {
                  alert("not authorized: ");
                  console.log(error);
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="login-form flex">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="login-form__email"
                  placeholder="Email"
                  required
                />
                {errors.email && touched.email && errors.email}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="login-form__password"
                  placeholder="Password"
                  required
                />
                {errors.password && touched.password && errors.password}
                <button
                  type="submit"
                  className="login-form__submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
          <div>
            <Link to="/registration">Do not have an account?</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
