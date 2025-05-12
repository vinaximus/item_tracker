import React from "react";
import EntryCard from "../EntryCard/EntryCard";
import "./EntryGrid.css";
export default function EntryGrid({ entries }) {
  //populate entries with test data if not provided
  if (!entries) {
    entries = [
      {
        id: 1,
        date: "2023-10-01",
        taken_by: "Mukesh",
        description: "Item description goes here.",
        status: "Not Returned",
      },
      {
        id: 2,
        date: "2023-10-02",
        taken_by: "Deepak",
        description: "Another item description.",
        status: "Returned",
      },
      {
        id: 3,
        date: "2023-10-03",
        taken_by: "Sofi",
        description: "Yet another item description.",
        status: "Not Returned",
      },
      {
        id: 4,
        date: "2023-10-04",
        taken_by: "Mukesh",
        description: "Item description goes here.",
        status: "Not Returned",
      },
      {
        id: 5,
        date: "2023-10-05",
        taken_by: "Deepak",
        description: "Another item description.",
        status: "Returned",
      },
      {
        id: 6,
        date: "2023-10-06",
        taken_by: "Sofi",
        description: "Yet another item description.",
        status: "Not Returned",
      },
    ];
  }

  return (
    <div id="entry_grid">
      {entries.map((entry) => (
        <EntryCard item={entry}></EntryCard>
      ))}
    </div>
  );
}
