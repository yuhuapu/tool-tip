import React from 'react';

const ToolTipDescription = props => {
    const { description, show } = props;

    if (show) {
        return(
            <div className='tool-tip-description'>
                <p>{description}</p>
            </div>
        );
    } else {
        return(null);
    }
}

export default ToolTipDescription;