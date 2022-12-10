import React from 'react'
import {Link} from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">JAG's Coding Spot!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Tampa,Fl, JAG Coding Spot provides a trained staff ready to meet your coding  needs.</p>
                <address className="public__addr">
                    JAG's Coding Spot<br />
                    101 South ST<br />
                    Tampa, FL 33579<br />
                    <a href="tel:+15555555555">(813) 898-9339</a>
                </address>
                <br />
                <p>Owner: Jeff Gomez</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}

export default Public