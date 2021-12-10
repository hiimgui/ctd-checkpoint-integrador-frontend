import React from 'react';
import './style.scss';
import { DiDatabase, DiJavascript1 } from 'react-icons/di';
import { SiSpringboot } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { FaAws } from 'react-icons/fa';
import { SiHibernate, SiJava } from 'react-icons/si';

const Footer = () => {
    return (

            <footer className="main-div pt-4">

                <section className="main-footer">
                    <main className="text-center text-white">
                        <div className="container p-2 pb-0">
                            <section className="inside-section">
                                <p className="d-flex justify-content-center align-items-center">
                                    <span className="me-3">Checkpoint Integrador / Turma 3 - Grupo 3</span>
                                </p>
                                <div className="techIcons">
                                    <DiJavascript1 />
                                    <SiSpringboot />
                                    <SiJava />
                                    <FaAws />
                                    <DiDatabase />
                                    <SiHibernate />
                                    <GrReactjs />
                                </div>
                            </section>
                        </div>

                        <div className="text-center p-3">
                            <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.digitalhouse.com/bolsas/certifiedtechdeveloper">
                                Digital House / Certified Tech Developer</a>
                        </div>
                    </main>
                </section>

            </footer>


    )

}

export default Footer;