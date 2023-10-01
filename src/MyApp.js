import logo from './logo.svg';
import ScrollBox from "./ScrollBox";
import {Component} from "react";
import IterationSample from "./IterationSample";

class MyApp extends Component {

    render() {
        return (
            <div>
                {/*scrollBox 라는 변수에 ScrollBox 컴포넌트 주소를 저장.*/}
                {/*<ScrollBox ref={(ref) => this.scrollBox = ref}/>*/}
                {/*<button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>*/}

                <IterationSample/>
            </div>)
    };
}

export default MyApp;
