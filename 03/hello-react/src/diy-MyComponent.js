import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본',
  };
  static propTypes = {
    name: PropTypes.string,
    fnum: PropTypes.number.isRequired,
  };
  render() {
    const { name, fnum, children } = this.props;
    return (
      <div>
        안녕 내이름은 {name}
        좋아하는 숫자는 {fnum}
        children 값은 {children}
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: "기본값",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   fnum: PropTypes.number.isRequired,
// };

export default MyComponent;
