export function Register({ setView }) {

  // Event handler function for the "Register" button
  const button = (e) => {
      e.preventDefault();
      setView('main');
  }   

  return (
    <>
      {/* Header */}
      <div className="header p-3 mb-3 border-bottom">
        <div className="d-grid">
            <p className="text-center fs-1">React by Mir Singh</p>
        </div>
      </div>

      {/* Main container */}
      <div className="maincontainer d-flex justify-content-center mt-5">
        <div className='appContainer card cardRegister'>
          {/* Registration form */}
          <form>
            <br/>
            <p className="fs-1 text-center">REGISTER</p><br/>

            {/* Fullname input */}
            <div className="mb-3">
              <label className="form-label">Fullname:</label>
              <input type="fullname" className="form-control" id="fullname" placeholder="Mir Singh"/>
            </div>

            {/* Email input */}
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="mirsingh236@gmail.com"/>
            </div>

            {/* Password input */}
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" placeholder="**********"/>
            </div>

            <br/>

            {/* Register button */}
            <div className="d-flex justify-content-center">
              <button type="button" className="loginBTN btn btn-success text-center" onClick={button}>Register</button>
            </div>

          </form>

        </div>
      </div>
    </>
  )
}
