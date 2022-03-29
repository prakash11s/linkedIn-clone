import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import  FiberManualRecordIcon  from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newArticle = (heading, subtitle) => (
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newArticle('Russia, Ukraine to meet in Turkey', 'for face-to-face talks between March 28 and 30')}
            {newArticle('Who called Bharat Bandh and what may get impacted?', 'Everything you need to know')}
            {newArticle('IPL 2022, PBKS vs RCB Highlights:', 'PBKS beat RCB by five wickets')}
            {newArticle('On camera, man tries to attack', 'Bihar chief minister Nitish Kumar, arrested')}
        </div>
    )
}

export default Widgets