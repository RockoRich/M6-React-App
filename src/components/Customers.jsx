export function Customers({setView}) {

    // Event handler function for the "Home" button
    const Mainmenu = (e) => {
        e.preventDefault();
        setView('main');
    }

    // Event handler function for the "Logout" button
    const Login = (e) => {
        e.preventDefault();
        setView('login');
    }

    return (
    <>
        {/* Header */}
        <div className="header p-3 mb-3 text-white " id="bg-black">
            <div className="text-center">
                <p className="display-3">CUSTOMERS</p><br/>
                {/* "Home" button */}
                <button className="btn btn-outline-light mb-1" type="button" onClick={Mainmenu}>Home</button>&nbsp;&nbsp;&nbsp;
                {/* "Logout" button */}
                <button className="btn btn-outline-light mb-1" type="button" onClick={Login}>Logout</button>
            </div>
        </div>

        <br/>

        {/* Main container */}
        <div class="container">
            {/* Card row */}
            <div class="row mt-2">

                {/* Card 1 */}
                <div class="col card align-items-center border-0">
                    <img class="card-img-top customers" src="./images/musk.jpg" alt="Card image"></img>
                    <div class="p-3 card-body text-center text-decoration-none">
                        <h4 class="card-title">Multimillionaire</h4>
                        <p class="card-text">Elon Musk is an entrepreneur, investor and owner of Tesla and SpaceX</p>
                    </div>                  
                </div>

                {/* Card 2 */}
                <div class="col card align-items-center border-0">
                    <img class="card-img-top customers" src="./images/rock.jpg" alt="Card image"></img>
                    <div class="p-3 card-body text-center text-decoration-none">
                        <h4 class="card-title">The Rock</h4>
                        <p class="card-text">Dwayne Johnson is an American actor and professional wrestler</p>
                    </div>                 
                </div>

                {/* Card 3 */}
                <div class="col card align-items-center border-0">
                    <img class="card-img-top customers" src="./images/messi1.jpg" alt="Card image"></img>
                    <div class="p-3 card-body text-center text-decoration-none">
                        <h4 class="card-title">GOAT</h4>
                        <p class="card-text">Lionel Messi is an Argentine soccer player who plays as a striker, known as the GOAT</p>
                    </div>
                </div>

            </div>
        </div>        
    </>
    );
}