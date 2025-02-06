import { Link } from "react-router-dom"

function GameInstruction(){
    return(
        <div className="container" data-testid='gameInstructions' >
            <h1 className="title"> Game Instruction </h1>
            <p className="content">
                This game tests your color recognition skill.
                You would be required to click on the color box 
                that best matches the displayed color. You get 10
                points for every correct attempt and you lose 5 points for every wrong
                attempt.
            </p> 
            <div className="buttons"> 
                <Link to='/gamePage' className="button"> Got it! Start game now </Link>
                <Link to='/' className="button"> Go to Home page </Link>
            </div>
        </div>
    )
}
export default GameInstruction