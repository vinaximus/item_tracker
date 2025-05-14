/*
   Create a form to add a new entry 
   The form should be a controlled component, meaning that the input values are stored in the component's state.
   The form should have a submit button that, when clicked, will call a function to handle the form submission.
   The form should have a cancel button that, when clicked, will call a function to handle the form cancellation.
   The form should be a dialog that opens when the user clicks on a button to add a new entry.
   The should have the close button that will close the dialog.
   The form should have a title that says "Add New Entry".

   The form should have the following fields:
   - Date: A date picker input that allows the user to select a date.
   - Taken By: A Dropdown input that allows the user to select a name from a list of names.
   - Description: A text input that allows the user to enter a description of the item.
   - Status: A dropdown input that allows the user to select a status from a list of statuses.

*/

import React, { useState } from "react";
//import "./AddEntryForm.css";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
} from "@mui/material";

export default function AddEntryForm({ open, handleClose, handleSubmit }) {
  const [date, setDate] = useState("");
  const [takenBy, setTakenBy] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ date, takenBy, description, status });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Entry</DialogTitle>
      <DialogContent>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Taken By"
            value={takenBy}
            onChange={(e) => setTakenBy(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Select
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value={"Not Returned"}>Not Returned</MenuItem>
            <MenuItem value={"Returned"}>Returned</MenuItem>
          </Select>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary" onClick={handleFormSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
