import React from 'react'

const Register = () => {
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
                                        <img src="" className="img-signup" alt="gambar1" />
                                        <h1 className="gray70 welcome-sign">Register Here</h1>
                                        <p className="mb-3 gray70 welcome-sign-text">Sign up</p>
                                    </div>
                                    <form className="user px-3" action="" method="post">
                                        <div className="form-group">
                                            <label for="name" className="gray5b">Name</label>
                                            <input type="text" className="form-control form-control-user fs13" id="name" name="name" aria-describedby="name" placeholder="Enter name" value="" />
                                         
                                        </div>
                                        <div className="form-group">
                                            <label for="email" className="gray5b">Email</label>
                                            <input type="text" className="form-control form-control-user fs13" id="email" name="email" aria-describedby="email" placeholder="Enter email" value="" />
                                        
                                        </div>
                                        <div className="form-group">
                                            <label for="password" className="gray5b">Password</label>
                                            <input type="password" className="form-control form-control-user fs13" id="password" name="password" placeholder="Enter Password" />
                                          
                                        </div>
                                        <div className="form-group">
                                            <label for="password2" className="gray5b">Confirmasi Password</label>
                                            <input type="password" className="form-control form-control-user fs13" id="password2" name="password2" placeholder="Enter Password" />
                                            
                                        </div>
                                        <div className="form-group d-flex justify-content-between">
                                            <div className="custom-control custom-checkbox small">
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-user fs13" name="register">
                                                Signup
                                            </button>
                                        </div>
                                    </form>
                                    <div className="sign-kotak col-lg-12 p-3">
                                        <div className="col-12 text-center">
                                            <p>Atau login menggunakan</p>
                                            <hr />
                                            <button className="btn btn-danger btn-sm mx-2">Google</button>
                                            <button className="btn btn-primary btn-sm mx-2">Facebook</button>
                                            <button className="btn btn-dark btn-sm mx-2">Apple</button>
                                            <button className="btn btn-info btn-sm mx-2">Microsoft</button>
                                        </div>
                                        <br />
                                        <br />
                                        <p className="text-center">Sudah punya akun? <i className="text-danger"><a href="/Login">Login</a></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body text-center p-5">
                   
                        <div className="mt-3 gray5b">© 2020. PT NOZYRA Global Solusindo. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;