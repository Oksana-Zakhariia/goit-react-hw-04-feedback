import PropTypes from 'prop-types';
import { Button } from './FeedbackOptionsstyled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <Button
        type="button"
        key={[option]}
        onClick={() => {
          onLeaveFeedback([option]);
        }}
      >
        {option[0].toUpperCase() + option.slice(1, option.length)}
      </Button>
    );
  });
};
Button.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
