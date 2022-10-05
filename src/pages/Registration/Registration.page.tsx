import "./Registration.style.sass";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { publicApi } from "../../config/axios.config";
import { userRegistrationType } from "../../typing/types/User/userProps.type";

const initialValues = {
  email: "",
  username: "",
  fullName: "",
  password: "",
};

const RegistrationPage = () => {
  const navigate = useNavigate();
  // setting formik
  const formik = useFormik({
    initialValues,
    onSubmit: (values: userRegistrationType, formikHelpers) => {
      if (Object.values(formik.errors).some((v) => v)) return;
      // Posting Data
      publicApi
        .post("/auth/local/register", values)
        .then(function (response: { data: { jwt: string } }) {
          formikHelpers.resetForm();
          localStorage.setItem("token", response.data.jwt);
          navigate("/");
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          formikHelpers.setSubmitting(false);
        });
    },
  });

  return (
    <section className="reg">
      <div className="container">
        <div className="reg-wrapper flex">
          <div className="reg-header">Registration</div>

          <form onSubmit={formik.handleSubmit} className="reg-form">
            <div className="user-info flex">
              <input
                type="text"
                name="fullName"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                className="reg-form__fullname"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="reg-form__email"
                placeholder="Set an email address"
              />
            </div>

            {/* Error messages */}
            {/* {formik.errors.email && formik.touched.email && formik.errors.email} */}

            <div className="user-private flex">
              <input
                type="text"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                className="reg-form__email"
                placeholder="Set username"
              />
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="reg-form__password"
                placeholder="set a password"
                required
              />
            </div>
            {/* Error messages */}

            {/* {errors.password && touched.password && errors.password} */}
            <div className="user-final">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="reg-form__submit"
              >
                Create an account
              </button>
            </div>
          </form>

          <div>
            <Link to="/login">I have an account</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
