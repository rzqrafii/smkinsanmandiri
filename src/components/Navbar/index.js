import React from 'react'
import ImageLogo from '../../images/smk_insan_mandiri.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section class="section-navbar">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#"><img src={ImageLogo} alt="logo-smkinsan"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <span class="navbar-wrapper">
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link className="nav-link" to="/"> Home </Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/profil"> Profil </Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/jurusan"> Jurusan </Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/galeri"> Galeri </Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Daftar Alumni</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Hubungi Kami</a>
                                </li>
                            </ul>
                        </div>
                    </span>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
