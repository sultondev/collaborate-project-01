import "./Registration.style.sass";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
// import axios from "axios";
const RegistrationPage = () => {
  return (
    <section className="reg">
      <div className="container">
        <div className="reg-wrapper flex">
          <div className="reg-header">Registration</div>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              username: "",
              password: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
              axios
                .post(
                  "https://todo-app-back-sultondev.herokuapp.com/auth/local/register",
                  {
                    username: values.username,
                    email: values.email,
                    fullName: values.fullName,
                    password: values.password,
                  }
                )
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
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
              <form onSubmit={handleSubmit} className="reg-form">
                <div className="user-info flex">
                  <input
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    value={values.fullName}
                    onBlur={handleBlur}
                    className="reg-form__fullname"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="reg-form__email"
                    placeholder="Set an email address"
                  />
                </div>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className="reg-form__email"
                  placeholder="Set username"
                />
                {errors.email && touched.email && errors.email}

                <div className="user-private flex">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="reg-form__password"
                    placeholder="set a password"
                    required
                  />
                  {/* <input
                    type="text"
                    name="confirm"
                    className="reg-form__confirm"
                    onChange={handleChange}
                    placeholder="Confirm the password"
                    required
                  /> */}
                </div>
                {errors.password && touched.password && errors.password}
                <div className="user-final">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="reg-form__submit"
                  >
                    Create an account
                  </button>
                </div>
              </form>
            )}
          </Formik>
          <div>
            <Link to="/login">I have an account</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
