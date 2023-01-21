import PropTypes from 'prop-types';

const MyComponent = (props) => {
  return (
    <div>
      첫 컴포넌트. 제 이름은 {props.name}입니다.
      <br />
      children 값은 {props.children}입니다.
      <br />
      {props.number}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본값',
};

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
