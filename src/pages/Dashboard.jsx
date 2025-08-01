import { useState } from "react";
import { useJobs } from "../context/JobContext";
import JobCard from "../components/JobCard";
import JobTable from "../components/JobTable";
import ImportExportButtons from "../components/ImportExportButtons";

const Dashboard = () => {
  const { jobs } = useJobs();
  const [view, setView] = useState("card");

  const stats = {
    total: jobs.length,
    applied: jobs.filter(job => job.status === "applied").length,
    interviewing: jobs.filter(job => job.status === "interviewing").length,
    offered: jobs.filter(job => job.status === "offered").length,
    rejected: jobs.filter(job => job.status === "rejected").length,
  };

  return (
    <div className="page-container">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="glass-container mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Job Applications</h1>
              <p className="text-purple-200 text-lg">Track your job search progress</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button 
                onClick={() => setView("card")} 
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  view === "card" 
                    ? "btn-primary" 
                    : "btn-secondary"
                }`}
              >
                🗂 Card View
              </button>
              <button 
                onClick={() => setView("table")} 
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  view === "table" 
                    ? "btn-primary" 
                    : "btn-secondary"
                }`}
              >
                📊 Table View
              </button>
              <ImportExportButtons />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-white">{stats.total}</div>
              <div className="text-purple-200 text-sm">Total Jobs</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-green-300">{stats.applied}</div>
              <div className="text-purple-200 text-sm">Applied</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-yellow-300">{stats.interviewing}</div>
              <div className="text-purple-200 text-sm">Interviewing</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-blue-300">{stats.offered}</div>
              <div className="text-purple-200 text-sm">Offered</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-red-300">{stats.rejected}</div>
              <div className="text-purple-200 text-sm">Rejected</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="glass-container">
          {jobs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No jobs yet</h3>
              <p className="text-purple-200 mb-6">Start tracking your job applications by adding your first job</p>
              <button className="btn-primary">
                + Add Your First Job
              </button>
            </div>
          ) : (
            <>
              {view === "card" ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.map((job) => <JobCard key={job.id} job={job} />)}
                </div>
              ) : (
                <JobTable jobs={jobs} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
