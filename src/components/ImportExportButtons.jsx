import { useJobs } from "../context/JobContext";
import { exportJobs, importJobs } from "../utils/fileHandlers";

const ImportExportButtons = () => {
  const { jobs, setJobs } = useJobs();

  return (
    <div className="flex gap-3">
      <button 
        onClick={() => exportJobs(jobs)}
        className="btn-secondary flex items-center space-x-2"
      >
        <span>📤</span>
        <span>Export</span>
      </button>
      <label className="btn-secondary flex items-center space-x-2 cursor-pointer">
        <span>📥</span>
        <span>Import</span>
        <input
          type="file"
          accept=".json"
          hidden
          onChange={(e) => importJobs(e, setJobs)}
        />
      </label>
    </div>
  );
};

export default ImportExportButtons;
