import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  // Simulate API call
  const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    console.log("Form submitted:", values);
    setTimeout(() => {
      setStatus({ success: "User registered successfully!" });
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <div>
              <label>Username:</label><br />
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email:</label><br />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password:</label><br />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>

            {status && status.success && (
              <p style={{ color: "green" }}>{status.success}</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
