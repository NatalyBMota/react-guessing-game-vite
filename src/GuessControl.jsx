import { useState } from "react";
import Button from "./Button";

const GuessControl = ({onGuess}) => {
    const [currentGuess, setCurrentGuess] = useState("");
    console.log(onGuess);

    const handleInputChange = (event) => {
        setCurrentGuess(event.target.value);
        console.log("current guess", event.target.value);
    };

    const onSubmitGuess = () => {
        console.log("from onSubmitGuess, current guess:", currentGuess);
        onGuess(Number(currentGuess));
        setCurrentGuess("");
    };

    return (
        <div>
            <input
            type="number"
            value={currentGuess}
            onChange={handleInputChange}
            />
            <Button onClick={onSubmitGuess}>Submit Guess</Button>
        </div>
    );
};

export default GuessControl;
