import PropTypes from 'prop-types';
import {
  BadFeedback,
  GoodFeedback,
  List,
  NeutralFeedback,
  Positive,
} from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePersentage,
}) => {
  return (
    <div>
      <List>
        <GoodFeedback>
          <p>Good {good}</p>
        </GoodFeedback>
        <NeutralFeedback>
          <p>Neutral {neutral}</p>
        </NeutralFeedback>
        <BadFeedback>
          <p>Bad {bad}</p>
        </BadFeedback>
      </List>
      <h2>Total {total}</h2>
      <Positive>Positive feedback {positivePersentage} %</Positive>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
};
