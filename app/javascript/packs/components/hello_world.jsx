import React from 'react'
import ReactDom from 'react-dom'
import EditMe from "./edit_me";

class HelloWorld extends React.Component {
    constructor() {
        super();

        this.state = {name: "Halp me"};
    }

    render() {
        return (
            <div>
                <h1>
                    Hello world!
                </h1>

                <EditMe name={this.state.name}/>
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById('component-hello-world');

    ReactDom.render(
        <HelloWorld/>,
        node
    )
});
