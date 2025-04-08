import React from 'react';

const API_ENDPOINT = 'http://localhost:8000/api/users/'; // Updated with full Django REST API endpoint

function Users() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title text-center text-primary">Users</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
