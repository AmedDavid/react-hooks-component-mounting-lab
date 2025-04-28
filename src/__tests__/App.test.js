import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test("App renders a timer on mount", () => {
  render(<App />);
  
  // Check that a timer is rendered (look for the "Mounted" text from Timer component)
  expect(screen.getByText(/Mounted/i)).toBeInTheDocument();
  
  // Optionally, check for the timer count (initially 0)
  expect(screen.getByText("0")).toBeInTheDocument();
});

// describe('<App />', () => {
//   var appWrapper


//     //expect there to be one child element of div.TimerGrid within App
//     expect(appWrapper.children('.TimerGrid').length).to.equal(1)

//     //expect this.state.timers to be an array equal to 1
//     expect(appWrapper.state().timerIDs.length).to.equal(1)

//     appWrapper.unmount()
//   });


// });





// describe('<Timer />', () => {
//   var timerWrapper

//   it('calls componentDidMount', () => {
//     spy(Timer.prototype, 'componentDidMount');

//     timerWrapper = shallow(<Timer />);

//     //component mounted correctly
//     expect(Timer.prototype.componentDidMount.calledOnce, "componentDidMount was not called").to.equal(true);
//     timerWrapper.unmount()
//   });


//   it('calls componentWillUnmount', () => {
//     spy(Timer.prototype, 'componentWillUnmount');
//     timerWrapper = shallow(<Timer />);
//     timerWrapper.unmount()
//     expect(Timer.prototype.componentWillUnmount.calledOnce).to.equal(true);

//   })

// });
