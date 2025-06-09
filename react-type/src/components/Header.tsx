import React from "react";
import "../assets/css/Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>🛍️ MyShop</h1>
            <nav>
                <a href="#">홈</a>
                <a href="#">장바구니</a>
                <a href="#">마이페이지</a>
            </nav>
        </header>
    );
};

export default Header;
