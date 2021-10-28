import React from 'react';

const Navbar = () => {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="#">
                        <img src="data:image/png;base64,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" alt="logo" />
                    </a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                             <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CART</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Add a book</a>
                            </li>
                        </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;