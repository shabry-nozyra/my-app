import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-sidebar-app sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/adminpant4u">
                    <div className="sidebar-brand-icon">
                        <img src="https://rancak.nozyra.xyz/assets/images/nozyra-menu.png" height="40px"></img>
                    </div>
                    <div className="sidebar-brand-text mx-3 nama_perusahaan">PT. NOZYRA <br /><small >Global Solusindo</small></div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <a className="nav-link" href="/adminpant4u">
                        <i className="fas fa-fw fa-home"></i>
                        <span>Dashboard</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="/adminpant4u/paslon">
                        <i className="fa fa-fw fa-user-plus"></i>
                        <span>Paslon Bupati</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link " href="/adminpant4u/tps">
                        <i className="fa fa-fw fa-building"></i>
                        <span>TPS</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/adminpant4u/inputsuara">
                        <i className="fa fa-fw fa-keyboard"></i>
                        <span>Input Suara <i className="fa fa-fw fa-star"></i></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/adminpant4u/report">
                        <i className="fa fa-fw fa-file"></i>
                        <span>Laporan</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-user-tie"></i>
                        <span>Petugas</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <a className="collapse-item" href="/adminpant4u/petugastps">Petugas TPS</a>
                            <a className="collapse-item" href="/adminpant4u/petugaskec">Petugas Kecamatan</a>
                            <a className="collapse-item" href="/adminpant4u/petugaskab">Petugas Kabupaten</a>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/adminpant4u" data-toggle="collapse" data-target="#pengaturan"
                        aria-expanded="true" aria-controls="pengaturan">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Pengaturan</span>
                    </a>
                    <div id="pengaturan" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <a className="collapse-item" href="/adminpant4u/lokasi">Pengaturan Lokasi</a>
                            <a className="collapse-item" href="/adminpant4u/halaman">Pengaturan Halaman</a>
                        </div>
                    </div>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0 nont" id="sidebarToggle"></button>
                </div>
            </ul>
        )
    }
}