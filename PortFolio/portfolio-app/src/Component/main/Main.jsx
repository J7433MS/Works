import { useEffect } from "react"
import "./main.css"
import usericon from "../../assets/icon/user.png"
import phoneicon from "../../assets/icon/phone.png"
import mapicon from "../../assets/icon/maps.png"
import calendaricon from "../../assets/icon/calendar.png"
import emailicon from "../../assets/icon/email.png"
import pencilicon from "../../assets/icon/pencil.png"

function Main(){

useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar_box');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 추가한 리스너 제거하는 코드
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll2 = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // 요소의 Y 위치
      const offsetPosition = elementPosition - 75; // 100px 위로 스크롤 조정
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };


    return(
        <>
        <section id="home" className="top_section">
            <div className="navbar_box">
                <div className="navbar_title">
                    <h1>JMS's Portfolio</h1>
                </div>
                <div className="navbar_contents">
                    <p onClick={() => handleScroll2("home")}>Home</p>
                    <p onClick={() => handleScroll2("about")}>About me</p>
                    <p onClick={() => handleScroll2("projects")}>Projects</p>
                </div>
            </div>
            <div className="top_title">
                <h1 className="title">- 정민수 -<br/>
                    프론트 엔드 개발자 포트폴리오</h1>
            </div>
            <div className="top_contents">
                <h2>안녕하세요.<br/>
                    본질에 집중하는 프론트 엔드 개발자<br/>
                    정민수입니다.</h2>
            </div>
        </section>
        <section id="about" className="second_section">
            <div className="second_title">
                <h1>Personal Profile</h1>
            </div>
            <div className="second_contents">
                <div className="flex_icons">
                    <div className="icons1">
                        <img src={usericon} alt="user"/>
                    </div>
                    <div className="icons2">
                        <img src={calendaricon} alt="calendar"/>
                    </div>
                    <div className="icons3">
                        <img src={mapicon} alt="maps"/>
                    </div>
                </div>
                <div className="flex_content">
                    <div className="icons_title1">
                        <h1>이름</h1><p>정민수</p>
                    </div>
                    <div className="icons_title2">
                        <h1>생년월일</h1><p>1997.09.15</p>
                    </div>
                    <div className="icons_title3">
                        <h1>위치</h1><p>경상북도 경산시</p>
                    </div>
                </div>
                <div className="flex_icons">
                    <div className="icons1">
                        <img src={phoneicon} alt="phone"/>
                    </div>
                    <div className="icons2">
                        <img src={emailicon} alt="email"/>
                    </div>
                    <div className="icons3">
                        <img src={pencilicon} alt="school"/>
                    </div>
                </div>
                <div className="flex_content">
                    <div className="icons_title1">
                        <h1>전화번호</h1><p>010-7433-5582</p>
                    </div>
                    <div className="icons_title2">
                        <h1>이메일</h1><p>jms7433@naver.com</p>
                    </div>
                    <div className="icons_title3">
                        <h1>학력</h1><p>한국폴리텍 VI대학 구미캠퍼스</p>
                        <p>AI 소프트웨어학과</p>
                    </div>
                </div>
                <div className="contents_skill">
                    <h1>Skills</h1>
                    <div className="skills_img">
                        <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
                        <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                        <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                        <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
                    </div>
                </div>
            </div>
        </section>
        <section id="projects" className="third_section">
            <div className="third_title">
                <h1>PROJECTS</h1>
            </div>
            <div className="third_contents">
                <div className="card_line">
                    <div className="contents_card">
                        <h1 className="card_title">환자 정보 검색 사이트</h1><br/>
                        <span className="card_date">2024.06 ~ 2024.09 (4인 팀프로젝트)</span><br/>
                        <h2 className="contents_title">MySQL과 연동하여 개발한 환자모니터링 웹</h2>
                        <ul>
                            <li>학교에서 진행한 팀프로젝트</li>
                            <li>React를 활용한 웹사이트 개발</li>
                            <li>MySQL과 express를 활용하여 웹과 연동</li>
                            <li>로그인, 로그아웃, 회원가입, 환자 검색, 환자 정보 데이터 그래프로 표현 기능 개발</li>        
                        </ul>
                        <a href='https://www.naver.com'
                        target="_blank"
                        rel="noopener noreferrer">https://www.naver.com</a><br/>
                        <span className='contents_skills'>React, MySQL, express</span>
                    </div>
                    <div className="contents_card">
                        <h1 className="card_title">환자모니터링시스템</h1><br/>
                        <span className="card_date">2024.06 ~ 2024.09 (4인 팀프로젝트)</span><br/>
                        <h2 className="contents_title">MySQL과 연동하여 개발한 환자모니터링 웹</h2>
                        <ul>
                            <li>학교에서 진행한 팀프로젝트</li>
                            <li>React를 활용한 웹사이트 개발</li>
                            <li>MySQL과 express를 활용하여 웹과 연동</li>
                            <li>로그인, 로그아웃, 회원가입, 환자 검색, 환자 정보 데이터 그래프로 표현 기능 개발</li>        
                        </ul>
                        <a href='https://www.naver.com'
                        target="_blank"
                        rel="noopener noreferrer">https://www.naver.com</a><br/>
                        <span className='contents_skills'>React, MySQL, express</span>
                    </div>
                </div>
                <div className="card_line">
                <div className="contents_card">
                        <h1 className="card_title">환자모니터링시스템</h1><br/>
                        <span className="card_date">2024.06 ~ 2024.09 (4인 팀프로젝트)</span><br/>
                        <h2 className="contents_title">MySQL과 연동하여 개발한 환자모니터링 웹</h2>
                        <ul>
                            <li>학교에서 진행한 팀프로젝트</li>
                            <li>React를 활용한 웹사이트 개발</li>
                            <li>MySQL과 express를 활용하여 웹과 연동</li>
                            <li>로그인, 로그아웃, 회원가입, 환자 검색, 환자 정보 데이터 그래프로 표현 기능 개발</li>        
                        </ul>
                        <a href='https://www.naver.com'
                        target="_blank"
                        rel="noopener noreferrer">https://www.naver.com</a><br/>
                        <span className='contents_skills'>React, MySQL, express</span>
                    </div>
                    <div className="contents_card">
                        <h1 className="card_title">환자모니터링시스템</h1><br/>
                        <span className="card_date">2024.06 ~ 2024.09 (4인 팀프로젝트)</span><br/>
                        <h2 className="contents_title">MySQL과 연동하여 개발한 환자모니터링 웹</h2>
                        <ul>
                            <li>학교에서 진행한 팀프로젝트</li>
                            <li>React를 활용한 웹사이트 개발</li>
                            <li>MySQL과 express를 활용하여 웹과 연동</li>
                            <li>로그인, 로그아웃, 회원가입, 환자 검색, 환자 정보 데이터 그래프로 표현 기능 개발</li>        
                        </ul>
                        <a href='https://www.naver.com'
                        target="_blank"
                        rel="noopener noreferrer">https://www.naver.com</a><br/>
                        <span className='contents_skills'>React, MySQL, express</span>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Main