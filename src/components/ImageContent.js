import React, { useState } from 'react';
import ToolTipDescription from '../components/ToolTipDescription';

const ImageContent = props => {
    const { image, description } = props;
    const [show, setShow] = useState(false);

    return (
        <div className='col-md-3'>
            <img
                src={image}
                onMouseEnter={() => { setShow(true) }}
                onMouseLeave={() => { setShow(false) }}
                alt='images'
            />
            <ToolTipDescription
                description={description}
                show={show}
            />
        </div>
    );
}

export default ImageContent;