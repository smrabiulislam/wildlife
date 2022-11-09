import React from 'react';

const ShortDiscription = ({ facilitys }) => {
    const { name, details } = facilitys
    return (
        <div>
            <div className='flex'>
                <p>{name} : </p>
                <p className='ml-4'> {details}</p>
            </div>
        </div>
    );
};

export default ShortDiscription;