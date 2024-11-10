import './prelogin.css';

function PreLogin(){
    return(
        <div className='PreLogin_pageContainer'>
            <div className='PreLogin_topBackground' />
            <section className='PreLogin_section1' style={{backgroundImage: 'url("https://img.coupangstreaming.com/clients/prelogin/web_prelogin_20240715.jpg?impolicy=bypass")'}}>
                <article>
                    <div>
                        <figure>
                            <img src="https://assets.coupangplay.com/images/bi-logo-full2.webp" alt="Coopang Play" />
                        </figure>
                            <div>
                                <img src="https://static.coupangcdn.com/image/coupang/loyalty/icons/icon-wow-2023.png" alt="badge wow" />
                                <span>쿠팡 와우회원 전용</span>
                            </div>
                                <h1>
                                    <span className='PreLogin_titleLine'>최신 영화, TV시리즈,</span><br />
                                    <span className='PreLogin_titleLine'>스포츠 중계를 모두 한 곳에서</span><br />
                                </h1>
                                <button className='signupBtn'>첫 달 무료로 시작하기</button>
                                <span className='PreLogin_subLogin'>이미 쿠팡 와우회원이라면?</span>
                                <button className='loginBtn'>와우회원 로그인</button>
                    </div>
                </article>
            </section>
            <section className='PreLogin_section2'>
                <article>
                    <div>
                        <div className='section2_item' style={{backgroundImage: 'url("https://assets.coupangplay.com/images/pre-login2-update-13-jan.png")'}} />
                        <div className='section2_item'>
                            <span>
                                <h1>오직 쿠팡플레이에서</h1>
                                <h1>즐길 수 있는 쿠플 시리즈 추천</h1>
                                <h2>다양한 콘텐츠를 모바일, 태블릿, PC, TV로 언제 어디서든 시청</h2>
                            </span>
                        </div> 
                    </div>
                </article>
            </section>
            <section className='PreLogin_section3'>
                <article>

                </article>
            </section>

        </div>
    )
}

export default PreLogin