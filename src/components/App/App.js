import { AppContainer } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import React from 'react';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];
  const total = good + bad + neutral;

  const positiveFeedback = parseInt((good * 100) / (good + bad + neutral));

  const handleFeedback = option => {
    if (option[0] === 'good') {
      setGood(prevGood => prevGood + 1);
    }
    if (option[0] === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
    if (option[0] === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    }
  };

  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePersentage={positiveFeedback}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </AppContainer>
  );
}
