import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <div>
            <div class="container-nav">
                <a href="../../index.html">
                    <span class="brandname">E-mart</span>
                </a>
                <div class="flex">
                    <input class="searchbar" type="text" placeholder="Search" />
                    <i class="search-icon fas fa-search" aria-hidden="true"></i>
                </div>
                <div class="nav-options">
                    <a class="nav-item" href="./login.html"> Login </a>
                    <a href="../wishlist/wishlist.html">
                        <i class="nav-icon fa-regular fa-heart badge-icon">
                            <div class="badge-number">
                                6
                    </div>
                        </i>
                    </a>
                    <a href="../cart/cart.html">
                        <i class="nav-icon fas fa-shopping-cart badge-icon" aria-hidden="true">
                            <div class="badge-number">
                                1
                    </div>
                        </i>
                    </a>
                </div>
            </div>

        </div>
    )
}