export default function UserInput() {
    return (<section id="user-input">
        <div className="input-group">
            <p>
                <label>  Initial Investment  </label>
                <input type="number" required id="initial-investment" placeholder="Initial Investment" />
            </p>
            <p>
                <label>  Annual Investment  </label>
                <input type="number" required id="Annual-investment" placeholder="Annual Investment" />
            </p>
            <p>
                <label>  Duration  </label>
                <input type="number" required id="Duration" placeholder="Duration" />
            </p>
        </div>
    </section>
    );
}