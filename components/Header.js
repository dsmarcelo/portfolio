import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <navbar className={`flex justify-between h-20 w-screen fixed ${styles.header}`}>
      <div className="flex justify-between items-center w-4/5 mx-auto">
        <p className="text-xl text-slate-100 font-bold font styles.header-name">
          Marcelo Araujo
        </p>
        <div className="flex gap-8 font-extralight">
          <a
            className="text-xl text-slate-200 hover:text-[#F9F871]"
            href="#contact"
          >
            Contato
          </a>
          <a
            className="text-xl text-slate-200 hover:text-[#F9F871]"
            href="#about"
          >
            Sobre
          </a>
        </div>
      </div>
    </navbar>
  );
}
