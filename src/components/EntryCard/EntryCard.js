import React from "react";
import "./EntryCard.css";

export default function EntryCard({ item, dispatcher }) {
  // Assign test data to item if not provided
  if (!item) {
    item = {
      date: "2023-10-01",
      taken_by: "Mukesh",
      description: "Item description goes here.",
      status: "Not Returned",
    };
  }

  return (
    <div className="entry_card">
      <div className="entry_card_header">
        <h3>{item.date}</h3>
        <p>{item.takenBy}</p>
      </div>
      <div className="entry_card_body">
        <p>{item.description}</p>
        <p>{item.status}</p>
      </div>
      <div className="entry_card_footer">
        <button className="edit_button">Edit</button>
        <button
          onClick={() => {
            alert("Delete button clicked");
            dispatcher({ type: "REMOVE_ENTRY", payload: item });
          }}
          className="delete_button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
