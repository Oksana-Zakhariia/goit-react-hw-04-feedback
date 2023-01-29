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
  // const countTotalFeedback = () => {
  //   const total = good + bad + neutral;
  //   return total;
  // };

  const positiveFeedback = parseInt((good * 100) / (good + bad + neutral));

  const handleFeedback = option => {
    if (option[0] === 'good') {
      setGood(good + 1);
    }
    if (option[0] === 'bad') {
      setBad(bad + 1);
    }
    if (option[0] === 'neutral') {
      setNeutral(neutral + 1);
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
// export class App extends React.Component {
//   static defaultProps = {
//     options: ['good', 'neutral', 'bad'],
//   };
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + bad + neutral;
//     return total;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const positiveFeedback = parseInt((good * 100) / (good + bad + neutral));
//     return positiveFeedback;
//   };
//   handleFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <AppContainer>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleFeedback}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePersentage={this.countPositiveFeedbackPercentage()}
//             ></Statistics>
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </AppContainer>
//     );
//   }
