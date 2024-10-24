export default function UserInput({ onChange, userInput }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>  Initial Investment  </label>
                    <input type="number" required id="initial-investment" placeholder="Initial Investment" value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>  Annual Investment  </label>
                    <input type="number" required id="Annual-investment" placeholder="Annual Investment" value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} />
                </p>
                <p>
                    <label>  Expected Return  </label>
                    <input type="number" required id="expected-return" placeholder="Expected Return" value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>  Duration  </label>
                    <input type="number" required id="Duration" placeholder="Duration" value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    );
}