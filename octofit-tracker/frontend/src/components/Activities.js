import React from 'react';

function Activities() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title text-center text-primary">Activities</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Activity Name</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr>
              <td>1</td>
              <td>Running</td>
              <td>2023-10-01</td>
              <td>30 mins</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Swimming</td>
              <td>2023-10-02</td>
              <td>45 mins</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
