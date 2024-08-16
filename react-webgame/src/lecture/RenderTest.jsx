// // 스테이트가 달라지지 않을 때, 불필요한 렌더링을 막는 방법
// // shouldComponentUpdate 활용
// import React, { Component } from 'react';

// class RenderTest extends Component {
//   state = {
//     counter: 0,
//   };

//   shouldComponentUpdate(nextProps, nextState, nextContext) {
//     if (this.state.counter !== nextState.counter) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   onClick = () => {
//     this.setState({});
//   };

//   render() {
//     console.log('렌더링', this.state);
//     return (
//       <div>
//         <button onClick={this.onClick}>클릭</button>
//       </div>
//     );
//   }
// }

// export default RenderTest;

// 스테이트가 달라지지 않을 때, 불필요한 렌더링을 막는 방법
// PureComponent 활용
import React, { PureComponent } from 'react';

class RenderTest extends PureComponent {
  state = {
    counter: 0,
  };

  onClick = () => {
    this.setState({});
  };

  render() {
    console.log('렌더링', this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default RenderTest;
