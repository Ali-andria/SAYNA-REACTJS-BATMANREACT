import React from 'react';
import '../../styles/footer.css';

const Footer=() => {
    return (
        <div className="container bg-black">
            <div className="single-footer-widget">
                <div className="footer-logo">
                    <img src={process.env.PUBLIC_URL + '/assets/logos/icon_WB.png'} alt="logo WB"/>
                    <p><small>Ce projet respecte l’univers cinématographique des films Batman récents. Version Nolan & Snyder & Reeves</small></p>
                </div>                
                <ul className="footer-logo">
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/logos/logo_sayna_white.png'} alt="logo sayna"/>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/logos/icon_x.png'} alt="icon X"/>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/logos/icon_DC.png'} alt="icon DC"/>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/logos/icon_facebook.png'} alt="icon facebook"/>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/logos/icon_ig.png'} alt="icon instagram"/>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/logos/icon_tw.png'} alt="logo twitter"/>
                    </li>
                </ul>
            </div>
        </div> 
    )
}

export default Footer;
