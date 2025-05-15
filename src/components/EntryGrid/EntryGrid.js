import React from "react";
import EntryCard from "../EntryCard/EntryCard";
import "./EntryGrid.css";

export default function EntryGrid({ entries, dispatcher }) {
  return (
    <div id="entry_grid">
      {entries.map((entry) => (
        <EntryCard item={entry} dispatcher={dispatcher}></EntryCard>
      ))}
    </div>
  );
}
