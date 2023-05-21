// react-router-dom components
import { Link } from "react-router-dom";
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { TextField } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-image4.jpeg";
import { useState } from "react";

function Cover() {
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  // eslint-disable-next-line no-console
  const handleSignUp = (e) => {
    e.preventDefault();
    axios.getRequest("https://marpapi.lonewolfdays.site/auth/signup").then((res) => setData(res));
    console.log("phone,---email---password---", phone, email, password);
    setPhone("");
    setPassword("");
    setEmail("");
  };
  // useEffect(() => {
  //   axios.get("https://dummyjson.com/users?skip=0&limit=100").then((res) => setData(res));
  //   // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setData(res));
  //   // eslint-disable-next-line no-console
  //   // .then((json) => setData(json));
  //   // console.log("----useEffect ---", data);
  // }, []);
  console.log("data: --- typeof", typeof data, data);
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            {/* <MDBox mb={2}>
              <MDInput type="number" label="Phone Number" variant="standard" fullWidth />
            </MDBox> */}
            <TextField
              sx={{ width: "100%" }}
              margin="normal"
              label="Phone Number"
              name="phone"
              type="number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              sx={{ width: "100%" }}
              margin="normal"
              label="Email"
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              sx={{ width: "100%" }}
              margin="normal"
              label="Password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" fullWidth />
            </MDBox> */}
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSignUp}>
                sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      {/* {
        // eslint-disable-next-line array-callback-return, no-unused-vars
        data.data.users.map((item) => (
          <div>{item.username}</div>
        ))
      } */}
    </CoverLayout>
  );
}

export default Cover;
