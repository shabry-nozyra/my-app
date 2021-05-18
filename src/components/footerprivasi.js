import React from 'react'
import '../index.css';
class FooterPrivasi extends React.Component {
    render() {
        return (
            <footer class="sticky-footer mt-auto py-3 bg-white bottomfooter">
                <div class="copyright text-center my-auto">
                    <span> © 2020 PT. NOZYRA Global Solusindo. All rights reserved. - <a href="/privasi" target="_blank" class="text-dark"><u>Ketentuan Privasi</u> </a> </span>
                </div>
            </footer>
        )
    }
};
export default FooterPrivasi;