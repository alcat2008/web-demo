import * as React from "react";
export class HelloComponent extends React.Component {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
