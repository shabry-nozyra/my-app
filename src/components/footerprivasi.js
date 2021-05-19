import React from 'react'
import '../index.css';
class FooterPrivasi extends React.Component {
    render() {
        return (
            <footer className="sticky-footer mt-auto py-3 bg-white bottomfooter">
                <div className="copyright text-center my-auto">
                    <span> © 2020 PT. NOZYRA Global Solusindo. All rights reserved. - <a href="/privasi" target="_blank" className="text-dark"><u>Ketentuan Privasi</u> </a> </span>
                </div>
            </footer>
        )
    }
};
export default FooterPrivasi;