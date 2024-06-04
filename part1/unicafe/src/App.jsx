import { useState } from 'react';

const Button = (props) => {
    const { onGoodClick, onNeutralClick, onBadClick } = props;
    return (
        <div>
            <button onClick={onGoodClick}>good</button>
            <button onClick={onNeutralClick}>neutral</button>
            <button onClick={onBadClick}>bad</button>
        </div>
    );
};

const StatisticLine = (props) => {
    return (
        <p>
            {props.text} {props.value}
        </p>
    );
};

const Satistics = (props) => {
    const { good, neutral, bad } = props;
    return (
        <>
            <h1>statistics</h1>
            {good + neutral + bad === 0 ? (
                <StatisticLine text='No feedback given' value='' />
            ) : (
                <>
                    <StatisticLine text='good' value={good} />
                    <StatisticLine text='neutral' value={neutral} />
                    <StatisticLine text='bad' value={bad} />
                    <StatisticLine text='all' value={good + neutral + bad} />
                    <StatisticLine text='average' value={(good - bad) / (good + neutral + bad) || 0} />
                    <StatisticLine text='positive' value={`${(good / (good + neutral + bad)) * 100 || 0} %`} />
                </>
            )}
        </>
    );
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleSetGood = () => {
        setGood(good + 1);
    };

    const handleSetNeutral = () => {
        setNeutral(neutral + 1);
    };

    const handleSetBad = () => {
        setBad(bad + 1);
    };

    return (
        <div>
            <h1>give feedback</h1>
            <Button onGoodClick={handleSetGood} onNeutralClick={handleSetNeutral} onBadClick={handleSetBad} />
            <Satistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
