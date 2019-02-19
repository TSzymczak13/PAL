import React from 'react'
import Auxiliary from '../Auxiliary/Auxiliary'
import Footer from '../../Components/Footer/Footer'
import classes from './Layout.css'
import Header from '../../Components/Header/Header'

const Layout = (props) => {

    const {children} = props
    
    return (
        <Auxiliary>
            <Header />
            <main className={classes.Content}>
                {children}
            </main>    
            <Footer />
        </Auxiliary>
    )
}

export default Layout

