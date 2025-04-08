import React from 'react';

const API_ENDPOINT = 'http://bookish-garbanzo-pj9j56v5vp4w27xg5-8000/api/teams/'; // Updated with full Django REST API endpoint

function Teams() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title text-center text-primary">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Team Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr>
              <td>1</td>
              <td>Team Alpha</td>
              <td>5</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Team Beta</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
