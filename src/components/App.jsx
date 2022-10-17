import React, { Component } from 'react';
import Section from "./Section/Section";
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  countTotalFeedback = () => {

  } 

  countPositiveFeedbackPercentage = () => {

  }

  render() {
    return (
  <>
  <Section title="Please leave feedback">
    {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
  </Section>
  <Section title="Statistics">
    {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
  </Section>
  </>      
    )}
}

export default App;
