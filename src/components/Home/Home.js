import React from "react";
import Fade from "react-reveal"
import "./Home.scss"

export class Home extends React.Component {render() {

        return (
            <section className="section home">
                <Fade>
                    <div className="container">
                        <div className="home__box">
                                <div className="home__portrait">
                                </div>
                            <div className="content">
                                <h1 className="home__heading">
                                    Cześć!
                                </h1>
                                <p className="home__paragraph">
                                    Nazywam się Patryk Stanek. Około 2 lata temu postanowiłem zostać Front-End Developerem. Styczność z kodem miałem już wcześniej a sprzyjająca sytuacja życiowa pozwoliła mi na rozpoczęcie nauki. Od tego czasu systematycznie uczę się programowania po stronie front-endu. Ukończyłem intensywny 9-miesięczny kurs programowania pod opieką indywidualnego mentora - Bootcamp Web Developer Plus w Kodilla. Mam też za sobą kilka ciekawych kursów na platformie Udemy. Cały czas ćwiczę i rozwijam swoje umiejętności - szczególnie w JavaScript i React. Obecnie postanowiłem rozszerzyć swoją wiedzę i rozpocząłem naukę języka TypeScript i frameworka Angular w wersji 8. Wiedzę mogę poprzeć licznymi projektami. Aktualnie szukam pierwszej pracy w IT. 
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        )
    }
}