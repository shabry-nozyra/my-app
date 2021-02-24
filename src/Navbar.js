// class component (untuk componen yang besar_)
// rcc

// import React, { Component } from 'react'

// export default class Navbar extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Test drive</h3>
//             </div>
//         )
//     }
// }

//function componen (rfc)

// import React from 'react'

// export default function Navbar() {
//     return (
//         <div>
            
//         </div>
//     )
// }


//menggunakan arrow function rfac
//untuk yang kecil

// import React from 'react'

// const Navbar = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }
// export default Navbar



import React from 'react'
export const Navbar = () => {
    return (
      <div>
            <nav className="navbar navbar-expand navbar-light topbar fixed-top color-nav ">
            <div className="d-none d-sm-block">
                <div className="dropdown d-inline-block">
                    <img src="../assets/images/logo-rancak-white.png" alt="" width="200px"></img>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#"></a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>
            <ul className="navbar-nav ml-auto">
              
                <li className="nav-item dropdown no-arrow mx-1">
                    <div className="dropdown">
                        <a className="nav-link" href="" target="_blank">
                            <div className="mb-0 text-white"><i className="fa fa-fw fa-desktop"></i> View Website</div>
                        </a>
                    </div>
                </li>


                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="text-white">user_nama</span>
                        <img className="img-profile rounded-circle ml-2" src="../assets/images/profile/default.jpg" height="60px;"></img>
                        <i className="fa fa-fw fa-chevron-down fa-sm small"></i>
                    </a>
                   
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="dropdownMenuButton1">
                        <a className="dropdown-item" href="">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Pengaturan Akun
                        </a>
                 
                        <a className="dropdown-item" href="">
                            <i className="fas fa-phone fa-sm fa-fw mr-2 text-gray-400"></i>
                            Bantuan
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Keluar
                        </a>
                    </div>
                </li>

            </ul>

        </nav>
      </div>
    )
}




