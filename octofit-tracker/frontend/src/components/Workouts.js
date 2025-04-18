import React from 'react';

const API_ENDPOINT = 'https://bookish-garbanzo-pj9j56v5vp4w27xg5-8000.app.github.dev/api/workouts/'; // Updated with Codespace URL

function Workouts() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title text-center text-primary">Workouts</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Workout Name</th>
              <th>Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr>
              <td>1</td>
              <td>Push-ups</td>
              <td>50</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Squats</td>
              <td>70</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;
