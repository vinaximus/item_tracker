import React from "react";
import "./Appbar.css";

export default function AppBar() {
  return (
    <div id="app_bar">
      <h2>Item Tracker</h2>
      <div>
        <label for="taken_by">Taken By </label>
        <select id="taken_by" name="taken_by">
          <option value="Mukesh">Mukesh</option>
          <option value="Deepak">Deepak</option>
          <option value="Sofi">Sofi</option>
        </select>
      </div>
      <div>
        <label for="status">Status </label>
        <select id="status" name="status">
          <option value="All">All</option>
          <option value="Not Returned">Not returned</option>
        </select>
      </div>
      <div id="add_item">
        <button id="add_item_button">Add Item</button>
      </div>
    </div>
  );
}
