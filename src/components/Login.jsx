export function Login({ setView }) {

    // Event handler function for the "Login" button
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
        <div className="maincontainer d-flex justify-content-center">
            <div className='appContainer card border cardLogin'>

                {/* Login form */}
                <form>
                    <br/>
                    <p className="fs-1 text-center">LOGIN</p><br/>

                    {/* Email input */}
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="mirsingh236@gmail.com"/>
                    </div>

                    <br/>

                    {/* Password input */}
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input type="password" className="form-control" id="password" placeholder="**********"/>
                    </div>

                    <br/>

                    {/* Login button */}
                    <div className="d-flex justify-content-center">
                        <button type="button" className="loginBTN btn btn-success text-center" onClick={button}>Login</button>
                    </div>

                </form>

            </div>
        </div>

    </>
    )
}