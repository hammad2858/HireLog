import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'applied': return 'text-green-300';
      case 'interviewing': return 'text-yellow-300';
      case 'offered': return 'text-blue-300';
      case 'rejected': return 'text-red-300';
      default: return 'text-purple-300';
    }
  };

  return (
    <Link to={`/job/${job.id}`} className="block">
      <div className="glass-card p-6 h-full group cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
              {job.company}
            </h3>
            <p className="text-purple-200 text-lg font-medium mb-3">
              {job.title}
            </p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <span className="text-white font-bold text-lg">
              {job.company.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <StatusBadge status={job.status} />
          
          <div className="flex items-center space-x-2 text-purple-200">
            <span className="text-lg">📅</span>
            <span className="text-sm font-medium">{job.date}</span>
          </div>

          {job.location && (
            <div className="flex items-center space-x-2 text-purple-200">
              <span className="text-lg">📍</span>
              <span className="text-sm font-medium">{job.location}</span>
            </div>
          )}

          {job.salary && (
            <div className="flex items-center space-x-2 text-purple-200">
              <span className="text-lg">💰</span>
              <span className="text-sm font-medium">{job.salary}</span>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs text-purple-300 uppercase tracking-wider font-semibold">
              {getStatusColor(job.status)} {job.status}
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
