function App() {
  return (
    <div className="container">
      <div className="mt-5 p-5 border border-jnjred bg-mygreen rounded-5">
        <h2 className="text-center">Register</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">
            Tell us about you
          </label>
          <textarea className="form-control" id="bio" rows="3"></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-jnjred" type="submit">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
