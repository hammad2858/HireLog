import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

const JobTable = ({ jobs }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/20">
            <th className="p-4 text-left text-white font-semibold text-sm uppercase tracking-wider">
              Company
            </th>
            <th className="p-4 text-left text-white font-semibold text-sm uppercase tracking-wider">
              Title
            </th>
            <th className="p-4 text-left text-white font-semibold text-sm uppercase tracking-wider">
              Status
            </th>
            <th className="p-4 text-left text-white font-semibold text-sm uppercase tracking-wider">
              Date Applied
            </th>
            <th className="p-4 text-left text-white font-semibold text-sm uppercase tracking-wider">
              Location
            </th>
            <th className="p-4 text-left text-white font-semibold text-sm uppercase tracking-wider">
              Salary
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr 
              key={job.id} 
              className="border-b border-white/10 hover:bg-white/5 transition-all duration-300 group"
            >
              <td className="p-4">
                <Link 
                  to={`/job/${job.id}`}
                  className="text-white font-medium hover:text-purple-200 transition-colors duration-300 flex items-center space-x-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {job.company.charAt(0).toUpperCase()}
                  </div>
                  <span>{job.company}</span>
                </Link>
              </td>
              <td className="p-4 text-purple-200 font-medium">
                {job.title}
              </td>
              <td className="p-4">
                <StatusBadge status={job.status} />
              </td>
              <td className="p-4 text-purple-200">
                {job.date}
              </td>
              <td className="p-4 text-purple-200">
                {job.location || "—"}
              </td>
              <td className="p-4 text-purple-200">
                {job.salary || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {jobs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <p className="text-purple-200">No jobs to display in table view</p>
        </div>
      )}
    </div>
  );
};

export default JobTable;
