//클래스형 컴포넌트의 state
import {Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>{fixedNumber} 바뀌지 않는값</h2>
                <button onClick={
                    () => {
                        this.setState({number: number + 1},
                            () => {
                                console.log("callback 호출1")
                            });

                        this.setState(
                            prevState => ({
                                number: prevState.number + 1
                            }), () => {
                                console.log("callback 호출2")
                            });
                    }}>
                    +1
                </button>
            </div>
        );
    }

}

export default Counter;