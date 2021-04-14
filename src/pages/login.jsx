import React from 'react'

const Login = () => {
    return (
        <div class="signin bg-danger">
            <div id="result"></div>
            <div class="container mt-0 pt-5">
                <div class="row justify-content-center">
                    <div class="kolom-sign col-12 col-md-6">
                        <div class="card border-0 shadow-sign">
                            <div class="card-body p-0">
                                <div class="row m-0 p-0">
                                    <div class="col-lg-12 sign-kotak">
                                        <div class="text-center">
                                            <img src="" class="img-signup" alt="gambar-login" />
                                            <h3 class="gray70 welcome-sign">Selamat Datang <br /><br /> NOZYRA RANCAK <br /><span class="small">Pantau Suara Pilkada</span></h3>
                                            <p class="mb-3 gray70 welcome-sign-text mt-3">Silahkan masuk untuk melanjutkan</p>
                                        </div>
                                        <form class="user px-3" action="" method="post">
                                            <div class="form-group">
                                                <label for="email" class="gray5b">Nama Pengguna</label>
                                                <input type="text" class="form-control form-control-user fs13" id="email" name="email" aria-describedby="email" placeholder="Masukkan nama pengguna" value="" />

                                            </div>
                                            <div class="form-group">
                                                <label for="password" class="gray5b">Kata Sandi</label>
                                                <input type="password" class="form-control form-control-user fs13" id="password" name="password" placeholder="Enter Password" />

                                            </div>

                                            <div class="form-group">
                                                <label for="captcha" class="gray5b">Kode Captcha</label>

                                                <input type="text" class="form-control form-control-user fs13 col-7" id="password" name="kode_captcha" placeholder="Masukkan Kode Capcha" />

                                            </div>
                                            <div class="form-group d-flex justify-content-between">
                                                <div class="small">
                                                    <p>Isikan semua data dengan benar</p>
                                                </div>
                                                <a class="btn btn-outline-danger btn-user fs13" href="/adminpant4u">
                                                    Masuk
                                        </a>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="sign-kotak col-lg-12 p-3">
                                        <div class="col-12 text-center">
                                            <p>Atau login menggunakan</p>
                                            <hr />
                                            <button class="btn btn-danger btn-sm mx-2">Google</button>
                                            <button class="btn btn-primary btn-sm mx-2">Facebook</button>
                                            <button class="btn btn-dark btn-sm mx-2">Apple</button>
                                            <button class="btn btn-info btn-sm mx-2">Microsoft Account</button>
                                        </div>
                                        <br />
                                        <br />
                                        <p class="text-center">Belum punya akun? <i class="text-danger"><a href="/Register">Daftar</a></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body text-center p-5">
                            <div class="mt-3 text-white">© 2020.PT. NOZYRA Global Solusindo. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;