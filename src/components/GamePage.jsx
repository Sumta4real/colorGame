import { Link } from "react-router-dom"
import ColorBox from "./ColorBox"
import { useState, useEffect} from "react"

function GamePage(){
    const [colors, setColors]  = useState(['red', 'blue','yellow', 'green'])
    const[computerChoice, setComputerChoice] = useState('')
    const [guessResult, setGuessResult] = useState('')
    const [score, setScore] = useState(0)
    const [alertType, setAlertType] = useState("");
    
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) 
        {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

    const setupRound = () => {
        let newColors = [];
        for (let i = 0; i < 5; i++) 
        {
          newColors.push(getRandomColor());
        }
        const compColor = getRandomColor();
        const randomIndex = Math.floor(Math.random() * 4);
        newColors.splice(randomIndex, 0, compColor);
        setColors(newColors);
        setComputerChoice(compColor);
    };

    useEffect(() => {
        setupRound();}, 
        [score]
    );

    const showAlert = (msg, type) => {
        setGuessResult(msg);
        setAlertType(type);
        const duration = type === "correct" ? 2000 : 600;
        setTimeout(() => {
      setGuessResult("");
      setAlertType("");
    }, duration);
    };

    function evaluateGuess(userGuess,computerChoice)
    { 
        if (userGuess === computerChoice)
            {
                setScore((prevScore) => prevScore + 10)
                showAlert('Awesome, you guessed Correctly!','correct')
            }
        else 
            {
                setScore((prevScore) => prevScore - 5)
                showAlert('Oops! your guess is wrong', 'wrong')
            }   
        setupRound();
    }

    function resetGame()
    {
        setScore(0)
        setGuessResult('')
    }


    return( 
        <div className="container">
            <h2> Guess the Color Game </h2>

            <div className="buttons">   
                <span className="score" data-testid='score'>Your Score: {score} </span>
                <button className="reset-btn" data-testid='newGameButton' onClick={resetGame}> Restart Game </button>
            </div>

            <ColorBox bgColor={computerChoice} disabled={true} data-test-id='colorBox'/>

            {guessResult && (
                <div className={`alert ${alertType}`} data-testid='gameStatus'>
                    {guessResult}
                </div>
            )}

            <p data-testid='gameInstructions'> Click on the color box that matches </p>

            <div className="colorBoxes" data-test-id='colorOption'>
                {colors.map ((color, index) => 
                    (
                <ColorBox key = {index} bgColor = {color} onClick={() => evaluateGuess(color,computerChoice, setGuessResult)} />
                    )
                )} 
            </div>
            
            <div className="buttons">
                <Link to='/gameInstruction' className="button"> Learn How to Play </Link>
                <Link to='/' className="button"> Go to Home page </Link>
            </div>
        </div>
    )
}
export default GamePage 