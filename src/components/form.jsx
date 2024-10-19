import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Checkbox } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import backgroundImg from '../assets/background.jpg';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [numberOfPupils, setNumberOfPupils] = useState("");
  const [thoughtsAndComments, setThoughtsAndComments] = useState("");
  const [role, setRole] = React.useState('');
  const [recieveUpdates, setRecieveUpdates] = useState(true);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [roleError, setRoleError] = useState(false);
  const [schoolNameError, setSchoolNameError] = useState(false);
  const [numberOfPupilsError, setNumberOfPupilsError] = useState(false);
  const [thoughtsAndCommentsError, setThoughtsAndCommentsError] = useState(false);

  const [emailErrorText, setEmailErrorText] = useState("");
  const emptyErrorText = "Please don't leave blank"
  //const [nameError, setNameError] = useState(false);
  //const [nameError, setNameError] = useState(false);
  


  const [tooltipOpen, setTooltipOpen] = useState(false)

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
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
   if(name==""|| email =="" || role == ""|| schoolName =="" || numberOfPupils =="" /*|| thoughtsAndComments ==""*/ || validateEmail(email)==false){//empty or email wrong format
    if(name=="") setNameError(true);
    if(email== ""){
      setEmailError(true);
    }
    if(role =="") setRoleError(true);
    if(schoolName =="") setSchoolNameError(true);
    if(numberOfPupils =="") setNumberOfPupilsError(true);
    //if(thoughtsAndComments == "") setThoughtsAndComments(true);
    if(validateEmail(email)==false){
      setEmailError(true);
    }

   }else{ //no error*/
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Role", role)
    formData.append("SchoolName", schoolName);
    formData.append("NumberOfPupils", numberOfPupils);
    formData.append("ThoughtsAndComments", thoughtsAndComments);
    formData.append("RecieveUpdates", recieveUpdates)
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbw8eTxV0pXYOAIGqJe6zPVZcj2EAaATRFSzXoqGMPzICV__ronztlbmoKzXWeNqt8qEIg/exec",
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
        setRole("")
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
    /*name, role, checkbox sign up for more info, 
contact info,
no number of pupils
role in school

dropdown
principal, vp, senior teacher, teacher

more info to thoughts/comments*/
<div className = "backgroundDiv">
    <div className="form" >
      <h2>Description Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <p>Sign up below to hear news.</p>
      <Stack spacing={2}>
      <TextField
          error = {nameError}
          //helperText= "aaaaaaa"*/
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={handleNameInputChange}
          value = {name}
        />
        <TextField
         error = {emailError}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={handleEmailInputChange}
          value = {email}
        />
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
        error = {roleError}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Role"
          onChange={handleChange}
          sx={{ textAlign: "left" }}
        >
          <MenuItem value={"Principal"} >Principal</MenuItem>
          <MenuItem value={"Vice Principal"}>Vice Principal</MenuItem>
          <MenuItem value={"Senior Teacher"}>Senior Teacher</MenuItem>
          <MenuItem value={"Teacher"}>Teacher</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
        <TextField
        error = {schoolNameError}
          id="outlined-basic"
          label="School Name"
          variant="outlined"
          onChange={handleSchoolNameInputChange}
          value = {schoolName}
        />
        <TextField
        error = {numberOfPupilsError}
          id="outlined-basic"
          label="Number of Pupils"
          variant="outlined"
          onChange={handleNumberOfPupilsInputChange}
          value = {numberOfPupils}
          type = "number"
        />
        <TextField
        error = {thoughtsAndCommentsError}
          id="outlined-basic"
          label="Thoughts and comments"
          variant="outlined"
          onChange={handleThoughtsAndCommentsInputChange}
          multiline
          rows={5}
          value = {thoughtsAndComments}
        />
        <FormControlLabel
  label="Recieve Updates"
  control = {
          <Checkbox
          onChange={handleCheckboxChange}
        defaultChecked />}
        />
        <div className = "buttonDiv">
        <Tooltip open={tooltipOpen} onClose={handleTooltipClose} onOpen={handleTooltipOpen} title="Form Submitted"
         disableFocusListener
         disableHoverListener
         disableTouchListener
        >
          
          <Button variant="outlined" onClick={handleSubmit}>
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
