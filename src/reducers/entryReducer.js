export default function entryReducer(state, action) {
  switch (action.type) {
    case "ADD_ENTRY":
      return { ...state, entries: [...state.entries, action.payload] }; // Use state.entries
    case "REMOVE_ENTRY":
      return {
        ...state,
        entries: state.entries.filter(
          (entry) => entry.id !== action.payload.id
        ), // Use state.entries
      };
    case "UPDATE_ENTRY":
      return {
        ...state,
        entries: state.entries.map(
          (entry) => (entry.id !== action.payload.id ? entry : action.payload) // Use state.entries
        ),
      };
    default:
      return state; // Ensure the default case returns the current state
  }
}
