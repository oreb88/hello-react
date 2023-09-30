import logo from './logo.svg';
import './App.css';
import './MyComponent'
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

function App() {

    const name = "리액트1";

    return (
        <>
            <h1>{name}, 안녕</h1>
            {name === '리액트' ? (<h1>리액트 입니다.</h1>) : (<h1>리액트가 아닙니다.</h1>)}
            {name === '리액트' ? (<h1>리액트 입니다.</h1>) : null}

            {/*주석 작성*/}

            <MyComponent/>{/* 기본 변수값 지정 */}
            <MyComponent name="React" favoriteNumber={1}/> {/* 사용 변수값 즉시 지정 */}
            <MyComponent> 차일드리액트</MyComponent> {/* children  지정 */}
            <Counter></Counter>
            <br/>
            <Say></Say>
        </>
    );
}

export default App;
