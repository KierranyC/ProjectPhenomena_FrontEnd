import React, { useEffect } from "react";
import { fetchReports } from "../api";

const Reports = ({ reports, setReports, loading, setLoading }) => {


  useEffect(() => {
    async function getReports() {
      const data = await fetchReports()
      console.log('REPORT COMMENTS:', data.reports.comments)
      setReports(data.reports)
      setLoading(false)
    }
    getReports()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  } else {
    return (
      <div>
        <h1>REPORTS</h1>
        {reports.map(report =>
          <div id='reports' key={report.id} value={report}>
            <h2>TITLE: {report.title}</h2>
            <h3>COMMENTS</h3>
            {/* {reports.comments.map(comment =>
              <div id='comments' key={comment.id} value={comment}>
                <p>{comment.content}</p>
              </div>
            )} */}
          </div>
        )}
      </div>
    )
  }
}

export default Reports;