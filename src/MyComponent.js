import PropTypes from "prop-types";

const MyComponent = (props) => {

    const {name, children, favoriteNumber} = props;

    return (
        <div>
            <br/>
            나의 첫 컴포넌트<br/>
            저의 이름은 {name} 입니다<br/>
            children 값은 {children}<br/>
            제가 좋아하는 숫자는 {favoriteNumber}<br/>
        </div>
    )
}

MyComponent.defaultProps = {
    name: '기본 이름'
};


MyComponent.prototype = {
    name: PropTypes.string,//타입지정
    favoriteNumber: PropTypes.number.isRequired//타입지정 && 필수값
}
export default MyComponent;