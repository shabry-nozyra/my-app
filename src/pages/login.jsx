import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [validation, setValidation] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('https://pantauapp.azurewebsites.net/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        const content = await response.json();
        if (content == "success") {
            setRedirect(true);
        } else {
            setValidation(true);
        }
    }
    if (redirect) {
        return <Redirect to="/adminpant4u/" />;
    }
    return (
        <div className="signin bg-danger">
            <div id="result"></div>
            <div className="container mt-0 pt-5">
                <div className="row justify-content-center">
                    <div className="kolom-sign col-12 col-md-6">
                        <div className="card border-0 shadow-sign">
                            <div className="card-body p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-lg-12 sign-kotak">
                                        <div className="text-center">
                                            <h4 className="gray70 welcome-sign"><br /> NOZYRA RANCAK <br /><span className="small">Pantau Suara Pilkada</span></h4>
                                        </div>
                                        
                                        <form className="user px-3 pt-5 mt-3" onSubmit={submit}>
                                        <div className="text-danger text-center p-0 m-0 small">
                                            {
                                                validation == true ? `email atau password salah !` : ""
                                            }
                                        </div>
                                            <div className="form-group">
                                                <label className="gray5b ml-3">Email</label>
                                                <input type="email" className="form-control form-control-user fs13" id="email" name="email" aria-describedby="email" placeholder="Masukkan email pengguna" onChange={e => setEmail(e.target.value)} />

                                            </div>
                                            <div className="form-group">
                                                <label className="gray5b ml-3">Kata Sandi</label>
                                                <input type="password" className="form-control form-control-user fs13" id="password" name="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />

                                            </div>

                                            <div className="form-group d-flex justify-content-between">
                                                <button type="submit" className="px-4 py-2 btn btn-outline-danger btn-user fs13" >
                                                    Masuk
                                                </button>
                                                <div className="small">
                                                    <p className="small">**Isikan semua data dengan benar</p>
                                                </div>

                                            </div>
                                        </form>
                                    </div>

                                    <div className="sign-kotak col-lg-12 p-3">
                                        <div className="col-12 text-center">
                                            <p className="small">Atau login menggunakan</p>
                                            <hr />
                                            <button className="btn btn-danger btn-sm mx-2">Google</button>
                                            <button className="btn btn-primary btn-sm mx-2">Facebook</button>
                                            <button className="btn btn-dark btn-sm mx-2">Apple</button>
                                            <button className="btn btn-info btn-sm mx-2">Microsoft Account</button>
                                        </div>
                                        <br />
                                        <br />
                                        <p className="text-center">Belum punya akun? <i className="text-danger"><a href="/Register">Daftar</a></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body text-center p-5">
                            <div className="mt-3 text-white">© 2020.PT. NOZYRA Global Solusindo. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;