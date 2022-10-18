// import PropTypes from 'prop-types'
import { ButtonList, Button } from "./FeedbackOptions.styled";

export default function FeedbackOptions({options}) {
  return (
  <ButtonList>
  {options.map(option => (
    <Button
    key={option}
    type="button"
    onClick={}>
    {option}</Button>
  ))}
  </ButtonList>
 ) 
}


