// dependencies
import React, { useEffect } from 'react';

const Banner = ({ type, message, setBanner }) => {

    useEffect(() => {
        setTimeout(() => {
            setBanner(false);
        }, 5000);
    }, []);

    return (
        <div className={`flex justify-center items-center w-full h-8 rounded-xl
        ${type === 'success' ? 'bg-emerald-400' : 'bg-red-600'}`}
        >
            <div>
                {message}
            </div>
        </div >
    );
};

export default Banner;