import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialIcon({ icon, link }) {
    return (
        <a
            // className="w-12 h-12 bg-[#dcddde] flex justify-center items-center rounded-full text-xl hover:bg-[#cb2139] hover:text-white transition-colors duration-300"
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#dcddde] flex justify-center items-center rounded-full text-sm md:text-lg lg:text-xl hover:bg-[#cb2139] hover:text-white transition-colors duration-300"

            href={link}
            target='_blank'
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}

SocialIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
};

export default SocialIcon;
