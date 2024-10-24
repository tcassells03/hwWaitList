import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [numberOfPupils, setNumberOfPupils] = useState("");
  const [thoughtsAndComments, setThoughtsAndComments] = useState("");
  const [role, setRole] = React.useState("");
  const [recieveUpdates, setRecieveUpdates] = useState(true);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [roleError, setRoleError] = useState(false);
  const [schoolNameError, setSchoolNameError] = useState(false);
  const [numberOfPupilsError, setNumberOfPupilsError] = useState(false);
  const [thoughtsAndCommentsError, setThoughtsAndCommentsError] =
    useState(false);

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };

  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };

  const handleCheckboxChange = () => {
    setRecieveUpdates(!recieveUpdates);
  };

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSchoolNameInputChange = (e) => {
    setSchoolName(e.target.value);
  };
  const handleNumberOfPupilsInputChange = (e) => {
    setNumberOfPupils(e.target.value);
  };
  const handleThoughtsAndCommentsInputChange = (e) => {
    setThoughtsAndComments(e.target.value);
  };

  function validateEmail(email) {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
    if (
      name == "" ||
      email == "" ||
      role == "" ||
      schoolName == "" ||
      numberOfPupils == "" /*|| thoughtsAndComments ==""*/ ||
      validateEmail(email) == false
    ) {
      //empty or email wrong format
      if (name == "") setNameError(true);
      if (email == "") {
        setEmailError(true);
      }
      if (role == "") setRoleError(true);
      if (schoolName == "") setSchoolNameError(true);
      if (numberOfPupils == "") setNumberOfPupilsError(true);
      //if(thoughtsAndComments == "") setThoughtsAndComments(true);
      if (validateEmail(email) == false) {
        setEmailError(true);
      }
    } else {
      //no error*/
      const formData = new FormData();
      formData.append("Name", name);
      formData.append("Email", email);
      formData.append("Role", role);
      formData.append("SchoolName", schoolName);
      formData.append("NumberOfPupils", numberOfPupils);
      formData.append("ThoughtsAndComments", thoughtsAndComments);
      formData.append("RecieveUpdates", recieveUpdates);
      e.preventDefault();
      fetch(
        "https://script.google.com/macros/s/AKfycbzWc-xFU1ZWA7oGSOITOQnm5cNEqCoir3_yuExiDIUBjRYcdEDDNDTAi3oeBH_6DSwkVw/exec",
        {
          method: "POST",
          body: formData,
        },
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setName("");
          setEmail("");
          setRole("");
          setSchoolName("");
          setNumberOfPupils("");
          setThoughtsAndComments("");
          setNameError(false);
          setEmailError(false);
          setRoleError(false);
          setSchoolNameError(false);
          setNumberOfPupilsError(false);
          setThoughtsAndCommentsError(false);
          setTooltipOpen(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="backgroundDiv">
      <div className="form">
        <p>
          <strong>dailydiary</strong> is a digital diary for students aiming to
          help project and time manage more effectively. <br></br>
          <br></br>
          The thought came from one of our founders realisation that he never
          knew how to manage his time and school subjects while studying and
          resorted to missing deadlines or forgetting homework’s altogether.
          <br></br>
          <br></br>
          dailydiary aims to give access to students, teachers and parents by
          creating a central platform for timetables, homework’s and other
          general information curated round a personal student calendar.
          <br></br>
          <br></br>
          <strong>For Students</strong> - this will help increase valuable
          skills, such as project management, time management and personal
          planning
          <br></br>
          <br></br>
          <strong>For Teachers</strong> - this will give a central platform to
          upload homework’s, relay information to parents and review timetables
          <br></br>
          <br></br>
          <strong>For Parents</strong> - A true reflection on how your child is
          doing in preparation for Parent-Teacher interviews, data on how your
          child is performing and assurance on school information.
        </p>
        <br></br>
        <p>
          <strong>Sign up below to hear the latest news.</strong>
        </p>
        <Stack spacing={2}>
          <TextField
            error={nameError}
            //helperText= "aaaaaaa"*/
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={handleNameInputChange}
            value={name}
          />
          <TextField
            error={emailError}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={handleEmailInputChange}
            value={email}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              error={roleError}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={handleChange}
              sx={{ textAlign: "left" }}
            >
              <MenuItem value={"Principal"}>Principal</MenuItem>
              <MenuItem value={"Vice Principal"}>Vice Principal</MenuItem>
              <MenuItem value={"Senior Teacher"}>Senior Teacher</MenuItem>
              <MenuItem value={"Teacher"}>Teacher</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            error={schoolNameError}
            id="outlined-basic"
            label="School Name"
            variant="outlined"
            onChange={handleSchoolNameInputChange}
            value={schoolName}
          />
          <TextField
            error={numberOfPupilsError}
            id="outlined-basic"
            label="Number of Pupils"
            variant="outlined"
            onChange={handleNumberOfPupilsInputChange}
            value={numberOfPupils}
            type="number"
          />
          <TextField
            error={thoughtsAndCommentsError}
            id="outlined-basic"
            label="Thoughts and comments"
            variant="outlined"
            onChange={handleThoughtsAndCommentsInputChange}
            multiline
            rows={5}
            value={thoughtsAndComments}
          />
          <FormControlLabel
            label="Recieve Updates"
            control={
              <Checkbox onChange={handleCheckboxChange} defaultChecked />
            }
          />
          <div className="buttonDiv">
            <Tooltip
              open={tooltipOpen}
              onClose={handleTooltipClose}
              onOpen={handleTooltipOpen}
              title="Form Submitted"
              disableFocusListener
              disableHoverListener
              disableTouchListener
            >
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ color: "white" }}
              >
                Submit
              </Button>
            </Tooltip>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default Form;
