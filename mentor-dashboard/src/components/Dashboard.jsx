 import "./Dashboard.css";

function Dashboard() {

  // 🔒 Hard-coded data (no API for now)
  const mentorData = {
    mentorName: "Ravi Tambade",
    role: "Lead Mentor",
    activeCohorts: 3,
    learners: 86
  };

  return (
    <div className="dashboard-container">

      <div className="dashboard-title">
        🌼 Transflower Mentors | TFLAssessment Dashboard
      </div>

      <div className="dashboard-info">
        <div>
          <strong>Mentor:</strong> {mentorData.mentorName}
        </div>
        <div>
          <strong>Role:</strong> {mentorData.role}
        </div>
      </div>

      <div className="dashboard-stats">
        <div>
          <strong>Active Cohorts:</strong> {mentorData.activeCohorts}
        </div>
        <div>
          <strong>Learners:</strong> {mentorData.learners}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
