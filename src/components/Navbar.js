import reactLogo from "../img/react-logo.png"


export default function Navbar(){
    return(
        <div>
            <nav className="nav">
                <img
                src={reactLogo}
                alt='Logo'
                className="nav-icon"
                />
                <h3 className="nav-title">ReactFacts</h3>
                <h4 className="nav-text">React Course - Project 1</h4>
            </nav>
        </div>
    )
}