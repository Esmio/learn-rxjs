import React from 'react';
import { interval, Subscription } from 'rxjs';

interface IPropos {}

interface IState {
  count: number;
}

class Counter extends React.Component<IPropos, IState> {
  subscription: Subscription = new Subscription;
  constructor(props: IPropos) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.subscription = interval(1000).subscribe(
      () => this.setState(state => ({count: state.count + 1}))
    )
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <>
        <h1>Title: UseRxJs</h1>
        <div>{this.state.count}</div>
      </>
    )
  }
}

export default Counter;
