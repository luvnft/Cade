import React from 'react';

const OverlayImages = () => {
    return (
        <div className="relative ">
            <div className='flex justify-center'>
                <img
                    src="/arcadetesting.png"
                    alt="Image 1"
                    className="w-50 h-50 object-cover"
                />
            </div>
            <div className=''>
                <img
                    src="/sf.png"
                    alt="Image 2"
                    className="mt-20 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36  h-36 object-cover z-20"
                />

            </div>
        </div>
    );
};

export default OverlayImages;



// IFrameComponent.js

