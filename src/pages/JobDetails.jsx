import { useParams, useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import { useState, useEffect } from "react";
import StatusBadge from "../components/StatusBadge";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, setJobs } = useJobs();
  const job = jobs.find((j) => j.id === id);

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(job || {});

  useEffect(() => {
    if (job) {
      setForm(job);
    }
  }, [job]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedJobs = jobs.map((j) => (j.id === id ? form : j));
    setJobs(updatedJobs);
    setEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setJobs(jobs.filter((j) => j.id !== id));
      navigate("/");
    }
  };

  if (!job) {
    return (
      <div className="page-container">
        <div className="container mx-auto max-w-2xl">
          <div className="glass-container text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">❌</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Job Not Found</h2>
            <p className="text-purple-200 mb-6">The job you're looking for doesn't exist.</p>
            <button onClick={() => navigate("/")} className="btn-primary">
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container mx-auto max-w-4xl">
        {editing ? (
          <div className="glass-container">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <span className="text-3xl">✏️</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Edit Job</h2>
              <p className="text-purple-200">Update your job application details</p>
            </div>

            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Job Title</label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Status</label>
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
                  <label className="form-label">Application Date</label>
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
                    value={form.location || ""}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="City, State or Remote"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Salary Range</label>
                  <input
                    type="text"
                    name="salary"
                    value={form.salary || ""}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., $50k-$70k"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Notes</label>
                <textarea
                  name="notes"
                  value={form.notes || ""}
                  onChange={handleChange}
                  className="form-input"
                  rows="4"
                  placeholder="Add any additional notes..."
                />
              </div>

              <div className="flex items-center justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="glass-container">
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">
                      {job.company.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{job.company}</h1>
                    <p className="text-xl text-purple-200">{job.title}</p>
                  </div>
                </div>
                <StatusBadge status={job.status} />
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setEditing(true)}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <span>✏️</span>
                  <span>Edit</span>
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-gradient-to-r from-red-400 to-pink-400 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="mr-2">📅</span>
                    Application Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-purple-200">Date Applied:</span>
                      <span className="text-white font-medium">{job.date}</span>
                    </div>
                    {job.location && (
                      <div className="flex justify-between">
                        <span className="text-purple-200">Location:</span>
                        <span className="text-white font-medium">{job.location}</span>
                      </div>
                    )}
                    {job.salary && (
                      <div className="flex justify-between">
                        <span className="text-purple-200">Salary:</span>
                        <span className="text-white font-medium">{job.salary}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="mr-2">📝</span>
                    Notes
                  </h3>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-white whitespace-pre-line">
                      {job.notes || "No notes added yet."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => navigate("/")}
                className="btn-secondary"
              >
                ← Back to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
