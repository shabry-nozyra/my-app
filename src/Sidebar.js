import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="bg-dark">
                <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
                        <div className="sidebar-fixed mt-5 pt-5">
                        {/* <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
                                <div className="sidebar-brand-icon rotate-n-15">
                                    <img src="https://rancak.nozyra.xyz/assets/images/nozyra-menu.png" height="40px"></img>
                                </div>
                                <div className="sidebar-brand-text mx-3">PT. NOZYRA <br /><small>Global Solusindo</small></div>
                            </a>

                            <hr className="sidebar-divider mt-0 mb-4 " /> */}

                        

                            <div className="div-sidebar-menu">
                                <li className="nav-item">
                                    <a className="nav-link" href="/" >
                                        <i className="fa fa-fw fa-home"></i>
                                        <span>Beranda</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/paslon">
                                        <i className="fa fa-fw fa-address-card"></i>
                                        <span>Pasangan Bupati</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/tps">
                                        <i className="fa fa-fw fa-building"></i>
                                        <span>TPS</span></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="">
                                        <i className="fa fa-fw fa-address-card"></i>
                                        <span>Petugas TPS</span></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="">
                                        <i className="fa fa-fw fa-file"></i>
                                        <span>Laporan</span></a>
                                </li>

                            </div>

                        </div>
                </ul>
            </div>
        )
    }
}