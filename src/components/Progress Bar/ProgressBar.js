import React from 'react';

const ProgressBar = ({ currentStep }) => {
    return (
        <div className="pt-10 flex justify-center items-center ">
            {[...Array(6)].map((_, index) => (
                <React.Fragment key={index}>
                    {/* Left Dot */}
                    <div className="relative flex items-center ">
                        <div
                            className={`w-1 h-1 rounded-full ${index > 0 && (index < currentStep ? 'bg-[#222d37]' : 'bg-[#222d37]')} transition-colors duration-200 ease-in-out`}
                        ></div>
                    </div>
                    {/* Dot and Number Container */}
                    <div className="relative flex flex-col items-center">
                        <div
                            className={`w-12 h-12 flex justify-center items-center rounded-full text-sm md:text-lg font-bold
                                ${index + 1 === currentStep ? 'bg-[#cb2139] text-white' : 'bg-[#222d37] text-white'}
                                transition-colors duration-500 ease-in-out`}
                        >
                            {index + 1}
                        </div>
                    </div>
                    {/* Line and Right Dot */}
                    {index < 5 && (
                        <div className="relative flex items-center">
                            <div className="lg:w-24 md:w-16 w-10 border-t-2 border-dotted border-gray-400 widthPro"></div>
                            <div
                                className={`absolute left-[-1px] w-1 h-1 rounded-full ${index + 1 < currentStep ? 'bg-[#222d37]' : 'bg-[#222d37]'} transition-colors duration-500 ease-in-out`}
                            ></div>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProgressBar;