import React from 'react'
import ImageLogo from '../../images/smk_insan_mandiri.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section class="section-navbar">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container container-navbar">
                    <div class="logo-navbar">
                        <a class="navbar-brand" href="/">
                            <img src={ImageLogo} alt="logo-smkinsan"/>
                        </a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link nav-link-ltr" to="/"> Home </Link>
                            </li>
                            <li class="nav-item">
                            <Link className="nav-link nav-link-ltr" to="artikel">{''} 
                                Artikel{''}
                                 </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
