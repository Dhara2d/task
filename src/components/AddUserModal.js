import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import * as formik from "formik";
import { v4 as uuidv4 } from "uuid";

const userSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Name is required"),
  age: Yup.number().required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  mobileNumber: Yup.string()
    .matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, "Invalid phone number")
    .required("Mobile number is required"),
  companyName: Yup.string().required("Company Name is required"),
});

let initialValues = {
  userName: "",
  age: null,
  gender: "Male",
  mobileNumber: "+91",
  companyName: "",
};
function AddUserModal({ show, handleClose, handleSave }) {
  const { Formik } = formik;

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Formik
          validationSchema={userSchema}
          onSubmit={(values) => {
            handleSave({ id: uuidv4(), ...values });
            handleClose(false);
          }}
          initialValues={initialValues}
          validateOnBlur={true}
          validateOnChange={false}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} noValidate>
              <Modal.Body className="mx-3">
                <Row className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    placeholder="Name"
                    name="userName"
                    onChange={handleChange}
                    value={values.userName}
                    isValid={touched.userName && !errors.userName}
                    isInvalid={!!errors.userName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.userName}
                  </Form.Control.Feedback>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <div className="">
                    <Form.Check
                      inline
                      label="Male"
                      value="Male"
                      checked={values.gender === "Male"}
                      type="radio"
                      onChange={handleChange}
                      name="gender"
                    />
                    <Form.Check
                      inline
                      label="Female"
                      name="gender"
                      value="Female"
                      checked={values.gender === "Female"}
                      type="radio"
                      onChange={handleChange}
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                    type="number"
                    isValid={touched.age && !errors.age}
                    isInvalid={!!errors.age}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.age}
                  </Form.Control.Feedback>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    name="mobileNumber"
                    type="text"
                    value={values.mobileNumber}
                    onChange={handleChange}
                    isValid={touched.mobileNumber && !errors.mobileNumber}
                    isInvalid={!!errors.mobileNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mobileNumber}
                  </Form.Control.Feedback>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    name="companyName"
                    type="text"
                    value={values.companyName}
                    onChange={handleChange}
                    isValid={touched.companyName && !errors.companyName}
                    isInvalid={!!errors.companyName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.companyName}
                  </Form.Control.Feedback>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose(false)}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default AddUserModal;
