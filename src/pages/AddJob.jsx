import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import { v4 as uuid } from "uuid";

const AddJob = () => {
  const { jobs, setJobs } = useJobs();
  const [form, setForm] = useState({
    company: "",
    title: "",
    status: "applied",
    date: "",
    location: "",
    salary: "",
    notes: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.company || !form.title || !form.date) {
      alert("Please fill in all required fields.");
      return;
    }

    const newJob = { ...form, id: uuid() };
    setJobs([...jobs, newJob]);
    navigate("/");
  };

  return (
    <div className="page-container">
      <div className="container mx-auto max-w-2xl">
        <div className="glass-container">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
              <span className="text-3xl">📝</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Add New Job</h2>
            <p className="text-purple-200">Track your job application details</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter company name"
                  value={form.company}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Job Title *</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter job title"
                  value={form.title}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Application Status *</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="applied">Applied</option>
                  <option value="interviewing">Interviewing</option>
                  <option value="offered">Offered</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Application Date *</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="City, State or Remote"
                  value={form.location}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Salary Range</label>
                <input
                  type="text"
                  name="salary"
                  placeholder="e.g., $50k-$70k"
                  value={form.salary}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Notes</label>
              <textarea
                name="notes"
                placeholder="Add any additional notes about this application..."
                value={form.notes}
                onChange={handleChange}
                className="form-input"
                rows="4"
              />
            </div>

            <div className="flex items-center justify-between pt-6">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary flex items-center space-x-2"
              >
                <span>💼</span>
                <span>Save Job</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
