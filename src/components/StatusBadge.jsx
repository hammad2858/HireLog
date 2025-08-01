const StatusBadge = ({ status }) => {
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "applied":
        return "status-applied";
      case "interviewing":
        return "status-interviewing";
      case "offered":
      case "offer":
        return "status-offered";
      case "rejected":
        return "status-rejected";
      default:
        return "status-applied";
    }
  };

  return (
    <span className={`status-badge ${getStatusStyle(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
  