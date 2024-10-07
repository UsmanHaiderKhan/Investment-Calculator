import { useState } from "react";
export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1000,
        expectedReturn: 8,
        duration: 10
    });
    // Function
    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        });
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>  Initial Investment  </label>
                    <input type="number" required id="initial-investment" placeholder="Initial Investment" value={userInput.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>  Annual Investment  </label>
                    <input type="number" required id="Annual-investment" placeholder="Annual Investment" value={userInput.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)} />
                </p>
                <p>
                    <label>  Expected Return  </label>
                    <input type="number" required id="expected-return" placeholder="Expected Return" value={userInput.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>  Duration  </label>
                    <input type="number" required id="Duration" placeholder="Duration" value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    );
}