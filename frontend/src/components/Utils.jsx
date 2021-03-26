import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import { Spinner } from 'react-bootstrap';

export const LoadingIcon = props => {
    const { promiseInProgress } = usePromiseTracker({ area: props.area });

    return (
        promiseInProgress && <Spinner animation="border" variant="primary" />
    );
}

export const LoadingScreen = props => {
    const { promiseInProgress } = usePromiseTracker({ area: props.area });

    return (
        promiseInProgress && <div className="loadingScreen">
            <div className="loading" style={{ paddingTop: `${window.innerHeight / 2 - 100}px` }}>
                <div className="spinner-border text-white" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    );
}