import { Link } from "react-router-dom"
function Home(){
    return( 
        <div className="container">
            <h1 className="title">Colour Guess Game </h1>
            <p className="content">Welcome to This amazing game that tests your color recognition Skill </p>
            <div className="buttons">
                <Link to="/gameInstruction" className="button">  Learn How To Play </Link>
                <Link to="/gamePage" className="button"> Start Game</Link>
            </div>
        </div>
    )
}
export default Home