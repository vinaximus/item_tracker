// Create an Appbar component that will be used in the App.js file
// The Appbar component will have a title, a dropdown for selecting the person who took the item, a dropdown for selecting the status of the item, and a button to add a new item
// The Appbar component will also have a button to add a new item

// Start by creating a functional component called AppBar

// Import necessary libraries and components

import "./Appbar.css";

// Define the AppBar component

import React, { useState } from "react";
import "./Appbar.css";
import AddEntryForm from "../AddEntryForm/AddEntryForm";

export default function AppBar({ dispatcher }) {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div id="app_bar">
      <h2>Item Tracker</h2>

      <div>
        <label htmlFor="taken_by">Taken By </label>
        <select id="taken_by" name="taken_by">
          <option value="Mukesh">Mukesh</option>
          <option value="Deepak">Deepak</option>
          <option value="Sofi">Sofi</option>
        </select>
      </div>

      <div>
        <label htmlFor="status">Status </label>
        <select id="status" name="status">
          <option value="All">All</option>
          <option value="Not Returned">Not returned</option>
        </select>
      </div>

      <div id="add_item">
        <button onClick={() => setShowAddForm(true)} id="add_item_button">
          Add Item
        </button>
        {showAddForm && (
          <AddEntryForm
            open={showAddForm}
            handleClose={() => setShowAddForm(false)}
            handleSubmit={(data) => {
              dispatcher({ type: "ADD_ENTRY", payload: data });
              setShowAddForm(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
