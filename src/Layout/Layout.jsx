import React, { Fragment } from "react"

import Header from '../Components/Header/Header'
import Footer from "../Components/footer/Footer"
import Routers from '../routers/Routers'

const Layout = () => {
    return <Fragment>
        <Header />
        <div>
            <Routers />
        </div>
        <Footer />
    </Fragment>
};

export default Layout;