import React from "react";
import "./About.scss";
import Fade from "react-reveal";

export class About extends React.Component {
    render() {
        return (
            <section className="section about">
                <Fade>
                    <div className="icon-head-container">
                        <i className="icon-head lnr lnr-user"></i>
                    </div>
                    <div className="about__container container content">
                        <div className="about__text">
                            <div className="about__box about__box--1">
                                <h2 className="box-title-basic">
                                    Start
                                </h2>
                                <p className="box-paragraph-basic">
                                    Pierwsze moje styczności z kodem sięgają czasów szkolnych. Rozpoczynając od edytowania szablonów na blogi m.in. w systemie Wordpress po amatorskie próby tworzenia prostych aplikacji w języku C++. Moja dotychczasowa kariera zawodowa spowodowana sytuacją życiową obrała niestety inny kierunek - przez ostatnie 6 lat pracowałem jako mechanik maszynowy w Holandii.
                                </p>
                            </div>
                            <div className="about__box about__box--2">
                                <h2 className="box-title-basic">
                                    Nauka
                                </h2>
                                <p className="box-paragraph-basic">
                                    Jako że na naukę nigdy nie jest za późno, od końca 2017 roku systematyczne poszerzam swoje umiejętności. Ukończyłem intensywny 9-miesięczny kurs programowania pod opieką indywidualnego mentora - Bootcamp Web Developer Plus w Kodilla. Wcześniej miałem też za sobą kilka kursów na platformie Udemy, m.in. Zaawansowane projekty w CSS. Obecnie poszerzam swoją wiedzę i rozpocząłem naukę języka TypeScript i frameworka Angular w wersji 8. Cały czas ćwiczę realizując proste projekty dzięki którym mogę robić to, co daje mi radość, wzbudza ciekawość i motywuje do działania.
                                </p>
                            </div>
                        </div>
                        <div className="about__text">
                            <div className="about__box about__box--3">
                                <h2 className="box-title-basic">
                                    Cechy
                                </h2>
                                <ul className="box-paragraph-basic about__list">
                                    <li className="about__item">
                                        Cechuje mnie upartość co całkiem nieźle komponuje się z programowaniem - nie poddaję się i szukam rozwiązania do skutku nie uznając kompromisów.
                                    </li>
                                    <li className="about__item">
                                        Cenię sobie zasady KISS oraz DRY.
                                    </li>
                                    <li className="about__item">
                                        Do działania napędza mnie rozwiązany problem, zaś do nauki ciekawość.
                                    </li>
                                    <li className="about__item">
                                        Bliskie jest mi pixel perfect.
                                    </li>
                                </ul>
                            </div>
                            <div className="about__box about__box--4">
                                <h2 className="box-title-basic">
                                    Aktualnie
                                </h2>
                                <p className="box-paragraph-basic">
                                    Nadszedł czas aby zdobyć doświadczenie i współtworzyć prawdziwe projekty. Aktualnie szukam pracy w IT jako Junior Front-end Developerem. Ponadto chętnie wezmę udział w projektach typu open-source, szczególnie w JavaScript, React.
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        )
    }
}