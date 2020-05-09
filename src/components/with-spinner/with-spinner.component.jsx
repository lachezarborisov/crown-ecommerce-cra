import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles.scss';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <div className='spinner-overlay'>
                <div className='spinner-container'></div>
            </div>
        ) : (
                <WrappedComponent {...otherProps} />
            );
    };

    return Spinner;
};

export default WithSpinner;