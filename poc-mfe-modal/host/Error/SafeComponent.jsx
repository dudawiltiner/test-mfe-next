import React from "react";
import ShowFallbackMessageError from "./ShowFallbackMessageError";

export default class SafeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch() { }

    render() {
        if (this.state.hasError) {
            return <ShowFallbackMessageError />;
        }

        return this.props.children;
    }
}