import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/people/')
      .then(res => res.json())
      .then(data => {
        setPeople(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Connection error:", err);
        setLoading(false);
      });
  }, []);

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.cnic.includes(searchTerm)
  );

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Personnel Directory</h1>
        <p className="subtitle">Management System | Database Records</p>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by Name or CNIC..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      {loading ? (
        <div className="loader">Connecting to PostgreSQL Database...</div>
      ) : (
        <div className="grid">
          {filteredPeople.map(person => (
            <div key={person.id} className="card">
              <div className="card-header">
                <h2 className="card-name">{person.name}</h2>
                <span className="badge">{person.occupation || "General"}</span>
              </div>

              <div className="card-body">
                <div className="info-row"><span>Father</span><span>{person.father_name}</span></div>
                <div className="info-row"><span>CNIC</span><span>{person.cnic}</span></div>
                <div className="info-row"><span>Age</span><span>{person.age}</span></div>
                <div className="info-row"><span>Email</span><span>{person.email}</span></div>
                <div className="info-row"><span>Phone</span><span>{person.phone_number}</span></div>
                <div className="info-row"><span>City</span><span>{person.city}</span></div>
                <div className="info-row"><span>Address</span><span>{person.address}</span></div>
              </div>

              <div className="card-footer">
                Added on: {new Date(person.date_added).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && filteredPeople.length === 0 && (
        <div className="no-results">No records match your search.</div>
      )}
    </div>
  );
}

export default App;
  