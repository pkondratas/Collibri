import React, { Component } from 'react';
import Listcomponent from "./ListComponent";
import {useParams} from "react-router-dom";



export class TestPage extends Component {
    static displayName = TestPage.name;

    // constructor(props) {
    //     super(props);
    //     this.state = { currentCount: 0 };
    //     this.incrementCounter = this.incrementCounter.bind(this);
    // }

    // incrementCounter() {
    //     this.setState({
    //         currentCount: this.state.currentCount + 1
    //     });
    // }

    
    
    render() {
       
        return (
            <div className="App">
                <h1>Sveiki gyvi</h1>

                <p>Cia yra kazkas tai.</p>

                <div>
                    <h1>List Example</h1>
                    <Listcomponent  />
                    {/*<ListShower />*/}
                </div>
                
        </div>
        );
    }
}