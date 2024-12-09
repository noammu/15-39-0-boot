import React from 'react';
import styles from './route.module.scss';
import PikachuPng from '../../../src/assets/pikachu.png';
export default function Ddd() {
    return (
        <div>
            <nav>
                <a href="/home" className={styles.a1}>
                    Home
                </a>{' '}
                | <a href="/projects">Projects</a> | <a href="/about">About</a> |{' '}
                <a href="/contact">Contact Us</a>
            </nav>
            <section>
                <div>
                    <h1>Heading 1</h1>
                </div>
                <span>
                    <img src={PikachuPng} alt="" />
                    text
                </span>
            </section>
            ddd
            <div>
                <button>Butdfd df df d asdfsdfton</button>
                <p>This is a paragraph.</p>
            </div>
            <form>
                <label>First name:</label>
                <br />
                <input type="text" />
                <br />
                <label>Last name:</label>
                <br />
                <input type="text" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
