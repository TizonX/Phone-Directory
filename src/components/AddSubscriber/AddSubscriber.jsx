import React, { useState } from "react";
import Header from "../Header/Header";
// form validator
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
//
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function AddSubscriber(props) {
  const [inputDetails, setInputDetails] = useState({
    id: "",
    name: "",
    phone: "",
  });

  const inputHandler = (inputData) => {
    const { name, value } = inputData.target;
    setInputDetails({
      ...inputDetails,
      id: new Date().getTime().toString(),
      [name]: value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();

    props.AddSubscriberHandler(inputDetails);
  };
  const { name, phone } = inputDetails;

  return (
    <div>
      <Header title="Add subscriber" />

      <Button
        color="success"
        style={{ marginTop: "100px" }}
        component={Link}
        to="/"
      >
        Show User
      </Button>

      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ValidatorForm onSubmit={formSubmit}>
          <TextValidator
            sx={{ width: "100%" }}
            id="name"
            label="Name"
            variant="outlined"
            name="name"
            onChange={inputHandler}
            validators={["required"]}
            errorMessages={["Name can not be Blanked"]}
            value={name}
          />
          <br />
          <br />
          <TextValidator
            id="phone"
            type="number"
            label="Phone No."
            variant="outlined"
            name="phone"
            onChange={inputHandler}
            validators={["required"]}
            errorMessages={["phone can not be Blanked"]}
            value={phone}
          />
          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ mt: 1, ml: 4 }}
          >
            Add
          </Button>
        </ValidatorForm>
      </Box>
    </div>
  );
}

export default AddSubscriber;
