import React, {useState} from "react"
import {FaAngleDoubleRight} from "react-icons/fa"
import data from "./data"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
/* const url = 'https://course-api.com/react-tabs-project'*/
function App() {
  const [jobs, setJobs] = useState(data)
  const [value, setValue] = useState(0)
  const {company, duties, dates, title} = jobs[value]

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, idx) => {
            return (
              <div className="job-desc" key={idx}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
