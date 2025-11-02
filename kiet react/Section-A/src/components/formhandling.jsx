import { useState } from 'react'

const formhandling = () => {  // Capitalized component name
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]); 
  const [languages, setLanguages] = useState([]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setData([...data, { name, email }]); 
      setName(""); 
      setEmail("");
    }
  };

  const addLanguage = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setLanguages([...languages, value]);
    } else {
      setLanguages(languages.filter((lang) => lang !== value));
    }
  };

  return (
    <div className="container mt-3">
      <h2>Form Handling with Table</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <br />
        <button type="submit">Add</button>
      </form>

      <h3 className="mt-3">Table Data</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-3">Select your language</h4>
      <label>
        <input
          type="checkbox"
          value="Hindi"
          onChange={addLanguage}
        /> Hindi
      </label>
      <label>
        <input
          type="checkbox"
          value="English"
          onChange={addLanguage}
        /> English
      </label>

      <p>Selected Languages: {languages.join(", ")}</p>
    </div>
  );
};

export default formhandling;  // Capitalized export

