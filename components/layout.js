import { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

import styles from './layout.module.scss'

export default function Layout({ children }) {
    return <Fragment>
        <Header />
        <main>
           {children}
        </main>
        <Footer />
    </Fragment>
}