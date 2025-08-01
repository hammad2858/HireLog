export const exportJobs = (jobs) => {
    const blob = new Blob([JSON.stringify(jobs, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "job_applications.json";
    a.click();
    URL.revokeObjectURL(url);
  };
  
  export const importJobs = (event, setJobs) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      try {
        const importedJobs = JSON.parse(e.target.result);
        setJobs(importedJobs);
      } catch {
        alert("Invalid JSON file");
      }
    };
    fileReader.readAsText(event.target.files[0]);
  };
  