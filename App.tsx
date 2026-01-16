import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dsaLevel: 'beginner',
  });
  const [status, setstatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setstatus('Admission form submitted successfully');
        setFormData({ name: '', email: '', phone: '', dsaLevel: 'beginner' });
      } else {
        setstatus('Submissionfailed.');
      }
    } catch (err) {
      setstatus('Error: ' + err.message);
    }
  };
  return (
    <div className='"min-h-screen bg-gradient-to-br from-blue-500 to-purplr-600 flex items-center justify-center p-4'>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          DSA COURSE ASMISSION
        </h1>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-line focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          name="dsaLevel"
          value={formData.dsaLevel}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Admission
        </button>
        {status && (
          <p className="mt-4 text-center text-sm font-medium">{status}</p>
        )}
      </form>
    </div>
  );
}

export default App;
