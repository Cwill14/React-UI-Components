import React from 'react';
import './Header.css';
import HeaderText from './HeaderText';
import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
    return (
        <div className="header-content">
            <HeaderTitle />
            <HeaderText />
        </div>
    );
};

export default HeaderContent;