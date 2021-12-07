import React from 'react';
import styles from './style.scss';
import { DiDatabase, DiJavascript1 } from 'react-icons/di';
import { SiSpringboot } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { FaAws } from 'react-icons/fa';
import { SiHibernate, SiJava } from 'react-icons/si';

const Footer = () => {
    return (
        <>

            <div className="main-div">

                <section className="main-footer">
                    <footer className="text-center text-white">
                        <div className="container p-2 pb-0">
                            <section className="inside-section">
                                <p className="d-flex justify-content-center align-items-center">
                                    <span className="me-3">Checkpoint Integrador / Turma 3 - Grupo 3</span>
                                </p>
                                <DiJavascript1 />
                                <SiSpringboot />
                                <SiJava />
                                <FaAws />
                                <DiDatabase />
                                <SiHibernate />
                                <GrReactjs />
                            </section>
                        </div>

                        <div className="text-center p-3">
                            <a className="text-white" target="_blank" href="https://www.digitalhouse.com/bolsas/certifiedtechdeveloper">
                                Digital House / Certified Tech Developer</a>
                        </div>
                    </footer>
                </section>

            </div>

        </>
    )

}

export default Footer;