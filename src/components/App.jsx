import React, { Component } from 'react';
import Section from "./Section/Section";

class App extends Component {
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
