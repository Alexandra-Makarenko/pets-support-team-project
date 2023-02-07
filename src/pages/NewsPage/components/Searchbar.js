function Searchbar({ onSubmit, onChange, value }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value || ''}
        onChange={event => onChange(event.target.value)}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}

export default Searchbar;
