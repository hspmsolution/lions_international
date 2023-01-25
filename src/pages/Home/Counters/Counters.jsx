import React from 'react';
import joinusbanner from "../../../assets/img/joinus-banner.png";
import CountUp from 'react-countup';


function Counter() {
    
    class FormCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    
      incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
      }
    }
    onclick = () => {
        // make API call and submit form
        this.props.incrementCount()
    }

    <FormCounter incrementCount={this.incrementCount} />


    return (
        <div className="counter" style={{backgroundImage: `url(${joinusbanner})`}}>
            <h1>Counter </h1>
            <div>
                <CountUp start={this.state.count} end={this.state.count} duration={1}>
                    {({ countUpRef }) => (
                        <div>
                        <span ref={countUpRef} />
                        <p>Forms Submitted</p>
                        </div>
                    )}
                </CountUp>
            </div>
        </div>
    );
}

export default Counter;