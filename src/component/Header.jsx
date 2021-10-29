import React, { useState, Fragment } from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
const cookies = new Cookies();

function Header() {
    const [cookie, setCookie] = useState(()=>{
        return cookies.get('name') === undefined?'사용자':cookies.get('name');
    });
    const [cookieSwich, setCookieSiwch] = useState(()=>{
        if(cookies.get('name') === undefined){
            return (
                <Fragment>
                    <input id="cookie" type="text" />
                    <button onClick={cookieAdd}>쿠키추가</button>
                </Fragment>
            );
        }else{
            return (
                <button onClick={cookieRemove}>쿠키삭제</button>  
            );
        }
    });
    function cookieRemove(){
        cookies.remove('name');
        setCookie('사용자');
        setCookieSiwch(
            <Fragment>
                <input id="cookie" type="text" />
                <button onClick={cookieAdd}>쿠키추가</button>
            </Fragment>
        );
    }
    function cookieAdd(){
        if(document.getElementById('cookie').value === '') {
            return;
        }else{
            cookies.set('name', document.getElementById('cookie').value, { path: '/' });
            setCookie(cookies.get('name'));
            setCookieSiwch(
                <Fragment>
                    <button onClick={cookieRemove}>쿠키삭제</button>
                </Fragment>  
            );
        }
    }
    return(
        <header>
            <div className="center">
                <div className="client">
                    <p>{cookie}님<br/> 환영합니다</p>
                   {cookieSwich}
                </div>
                <nav>
                    <Link to="/about">About </Link>
                    <Link to="/work">Work </Link>
                    <Link to="/contact">Contact </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;