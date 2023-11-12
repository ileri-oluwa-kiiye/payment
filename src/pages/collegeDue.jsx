import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FlutterWaveButton } from "flutterwave-react-v3";
import TopNav from "../components/topNav";
import { CollegeDiv } from "../components/styles";

const CollegeDue = () => {
  const collegeToDepartments = {
    coleng: [
      "Agricultural and BioResources Engineering",
      "Civil Engineering",
      "Electrical and Electronics Engineering",
      "Mechanical Engineering",
      "Mechatronics Engineering",
    ],
    colphys: [
      "Chemistry",
      "Computer Science",
      "Mathematics",
      "Physics",
      "Statistics",
    ],
    colfhec: [
      "Food Science and Technology",
      "Home Science Management",
      "Hospitality and Tourism",
      "Nutrition and Dietetics",
    ],
  };
  const collegeDuesAmount = {
    COLENG: 2500,
    COLPHYS: 2200,
    COLFHEC: 2300,
  };

  // const [showPaymentButton, setShowPaymentButton] = useState(true);
  const [paymentData, setPaymentData] = useState(null);

  const getDepartmentOptions = () => {
    return collegeToDepartments[formik.values.college] || [];
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Firstname is required"),
    lastName: Yup.string().required("Lastname is required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    matricNo: Yup.string().required("Matric No. or Jamb Reg. No. is required"),
    level: Yup.string().required("Provide your level"),
    dept: Yup.string().required("Provide your department"),
    college: Yup.string().required("Provide your college"),
  });

  const initialValues = {
    email: "",
    firstName: "",
    phoneNumber: "",
    lastName: "",
    matricNo: "",
    level: "",
    dept: "",
    college: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const config = {
        public_key: "FLWPUBK_TEST-07ab91ac907ce1bf4494bdd14ed7c677-X",
        tx_ref: Date.now().toString(),
        amount: collegeDuesAmount[values.college.toUpperCase()] || 0,
        currency: "NGN",
        payment_options: "card,mobilemoney",
        customer: {
          email: values.email,
          phonenumber: values.phoneNumber,
          name: `${values.firstName} ${values.lastName}`,
        },
        customizations: {
          title: "College Dues",
          description: "Payment for college dues",
        },
      };

      setPaymentData(config);
      // setShowPaymentButton(true);
    },
  });

  return (
    <div>
      <TopNav />
      <CollegeDiv>
        <h2>Kindly provide necessary and accurate information</h2>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="inputFields">
            <div
              className={
                formik.errors.firstName && formik.touched.firstName
                  ? "error"
                  : ""
              }
            >
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Olusegun"
                className={
                  formik.errors.firstName && formik.touched.firstName
                    ? "input-error"
                    : ""
                }
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <p className="error">{formik.errors.firstName}</p>
              )}
            </div>

            <div
              className={
                formik.errors.lastName && formik.touched.lastName ? "error" : ""
              }
            >
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Obasanjo"
                className={
                  formik.errors.lastName && formik.touched.lastName
                    ? "input-error"
                    : ""
                }
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <p className="error">{formik.errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="inputFields">
            <div
              className={
                formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? "error"
                  : ""
              }
            >
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="08000000000"
                className={
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                    ? "input-error"
                    : ""
                }
              />

              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <p className="error">{formik.errors.phoneNumber}</p>
              )}
            </div>
            <div
              className={
                formik.errors.email && formik.touched.email ? "error" : ""
              }
            >
              <label htmlFor="email">E-mail Address</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                name="email"
                id="email"
                placeholder="olusegunoba@gmail.com"
                className={
                  formik.errors.email && formik.touched.email
                    ? "input-error"
                    : ""
                }
              />

              {formik.errors.email && formik.touched.email && (
                <p className="error">{formik.errors.email}</p>
              )}
            </div>
          </div>
          <div className="inputFields">
            <div
              className={
                formik.errors.matricNo && formik.touched.matricNo ? "error" : ""
              }
            >
              <label htmlFor="matricNo">Matric/Jamb Number</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.matricNo}
                type="text"
                name="matricNo"
                id="matricNo"
                placeholder="20222222"
                className={
                  formik.errors.matricNo && formik.touched.matricNo
                    ? "input-error"
                    : ""
                }
              />

              {formik.errors.matricNo && formik.touched.matricNo && (
                <p className="error">{formik.errors.matricNo}</p>
              )}
            </div>
            <div>
              <label htmlFor="level">Level</label>
              <select
                id="level"
                name="level"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.level}
                className={
                  formik.errors.level && formik.touched.level
                    ? "input-error"
                    : ""
                }
              >
                <option value="">Select your level</option>
                <option value="100">100 Level</option>
                <option value="200">200 Level</option>
                <option value="300">300 Level</option>
                <option value="400">400 Level</option>
                <option value="500">500 level</option>
              </select>
              {formik.touched.level && formik.errors.level && (
                <p className="error">{formik.errors.level}</p>
              )}
            </div>
          </div>
          <div className="inputFields">
            <div>
              <label htmlFor="college">College</label>
              <select
                id="college"
                name="college"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.college}
                className={
                  formik.errors.college && formik.touched.colege
                    ? "input-error"
                    : ""
                }
              >
                <option value="">Select your college</option>
                <option value="coleng">COLENG</option>
                <option value="colphys">COLPHYS</option>
                <option value="colfhec">COLFHEC</option>
              </select>
              {formik.touched.college && formik.errors.college && (
                <p className="error">{formik.errors.college}</p>
              )}
            </div>

            <div>
              <label htmlFor="dept">Department</label>
              <select
                id="dept"
                name="dept"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dept}
              >
                <option value="">Select your department</option>
                {getDepartmentOptions().map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              {formik.touched.dept && formik.errors.dept && (
                <p className="error">{formik.errors.dept}</p>
              )}
            </div>
          </div>
          {
            <FlutterWaveButton
              {...paymentData}
              callback={(response) => {
                console.log(response);
              }}
            >
              Pay College Due
            </FlutterWaveButton>
          }
        </form>
      </CollegeDiv>
    </div>
  );
};

export default CollegeDue;
