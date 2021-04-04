import React from 'react'

const Register = () => {
    return (
        <div className="signin bg-danger">
        <div id="result"></div>
        <div class="container mt-0 pt-5">
            <div class="row justify-content-center">
                <div class="kolom-sign col-12 col-md-6">
                    <div class="card border-0 shadow-sign">
                        <div class="card-body p-0">
                            <div class="row m-0 p-0">
                                <div class="col-lg-12 sign-kotak">
                                    <div class="text-center">
                                        <img src="" class="img-signup" />
                                        <h1 class="gray70 welcome-sign">Register Here</h1>
                                        <p class="mb-3 gray70 welcome-sign-text">Sign up</p>
                                    </div>
                                    <form class="user px-3" action="" method="post">
                                        <div class="form-group">
                                            <label for="name" class="gray5b">Name</label>
                                            <input type="text" class="form-control form-control-user fs13" id="name" name="name" aria-describedby="name" placeholder="Enter name" value="" />
                                         
                                        </div>
                                        <div class="form-group">
                                            <label for="email" class="gray5b">Email</label>
                                            <input type="text" class="form-control form-control-user fs13" id="email" name="email" aria-describedby="email" placeholder="Enter email" value="" />
                                        
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="gray5b">Password</label>
                                            <input type="password" class="form-control form-control-user fs13" id="password" name="password" placeholder="Enter Password" />
                                          
                                        </div>
                                        <div class="form-group">
                                            <label for="password2" class="gray5b">Confirmasi Password</label>
                                            <input type="password" class="form-control form-control-user fs13" id="password2" name="password2" placeholder="Enter Password" />
                                            
                                        </div>
                                        <div class="form-group d-flex justify-content-between">
                                            <div class="custom-control custom-checkbox small">
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-user fs13" name="register">
                                                Signup
                                            </button>
                                        </div>
                                    </form>
                                    <div class="sign-kotak col-lg-12 p-3">
                                        <div class="col-12 text-center">
                                            <p>Atau login menggunakan</p>
                                            <hr />
                                            <button class="btn btn-danger btn-sm mx-2">Google</button>
                                            <button class="btn btn-primary btn-sm mx-2">Facebook</button>
                                            <button class="btn btn-dark btn-sm mx-2">Apple</button>
                                            <button class="btn btn-info btn-sm mx-2">Microsoft</button>
                                        </div>
                                        <br />
                                        <br />
                                        <p class="text-center">Sudah punya akun? <i class="text-danger"><a href="/Login">Login</a></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body text-center p-5">
                   
                        <div class="mt-3 gray5b">© 2020. PT NOZYRA Global Solusindo. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;