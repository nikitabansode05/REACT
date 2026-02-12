import { useState, useEffect } from 'react'
import './subjectData.css'

/**
 * SubjectData component - Fetches and displays subjects from the Java backend.
 * Backend endpoint: GET returns a list of SubjectModel objects.
 */
function SubjectData() {
  const [subjects, setSubjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Update this URL to match your Java backend (e.g. http://localhost:8080/subjects)
  const API_URL = 'http://localhost:8080/assessmentAPI/api/subjects'

  useEffect(() => {
    async function fetchSubjects() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const text = await response.text()

        // Handle newline-delimited response (Java out.println per subject)
        const lines = text.trim().split('\n').filter(Boolean)

        const parsedSubjects = lines.map((line, index) => {
          try {
            // Try parsing as JSON (if SubjectModel.toString() returns JSON)
            const parsed = JSON.parse(line)
            return { ...parsed, id: parsed.id ?? index + 1 }
          } catch {
            // Fallback: treat as plain text (Java default toString output)
            return { id: index + 1, display: line }
          }
        })

        setSubjects(parsedSubjects)
      } catch (err) {
        setError(err.message || 'Failed to fetch subjects')
        setSubjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchSubjects()
  }, [])

  if (loading) {
    return (
      <div className="subject-data subject-data--loading">
        <p>Loading subjects...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="subject-data subject-data--error">
        <h3>Error</h3>
        <p>{error}</p>
        <small>Ensure the backend is running and CORS is configured.</small>
      </div>
    )
  }

  if (subjects.length === 0) {
    return (
      <div className="subject-data subject-data--empty">
        <p>No subjects found.</p>
      </div>
    )
  }

  return (
    <div className="subject-data">
      <h2>Subjects</h2>
      <div className="subject-data__table-wrapper">
        <table className="subject-data__table">
          <thead>
            <tr>
              <th>#</th>
              {/* Render dynamic headers from first subject's keys */}
              {Object.keys(subjects[0]).filter(k => k !== 'display').map(key => (
                <th key={key}>{key}</th>
              ))}
              {subjects[0].display !== undefined && <th>Subject</th>}
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={subject.id ?? index}>
                <td>{index + 1}</td>
                {Object.entries(subject).map(([key, value]) =>
                  key === 'display' ? null : (
                    <td key={key}>{String(value)}</td>
                  )
                )}
                {subject.display !== undefined && (
                  <td>{subject.display}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SubjectData
