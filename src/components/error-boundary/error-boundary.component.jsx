import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        //process the error
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <div className='error-image-overlay'>
                    <div className='error-image-container' />
                    <div className='error-imageText'>
                        <span>Sorry This Page is Lost in Space</span>
                    </div>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;