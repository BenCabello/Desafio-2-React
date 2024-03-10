import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialButton() {
    const style = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '150px',
            margin: '15px',
        },
        icon: {
            cursor: 'pointer',
            backgroundColor: 'white',
        },
    }

    return (
        <div style={style.container}>
            <FontAwesomeIcon icon={faFacebook} style={style.icon} transform="grow-30" />
            <FontAwesomeIcon icon={faGithubAlt} style={style.icon} transform="grow-30" />
            <FontAwesomeIcon icon={faInstagram} style={style.icon} transform="grow-30" />
        </div>
    );
}

export default SocialButton;
