import React from "react"
import Header from "./components/header"
import Feature from "./components/feature"

import "./assets/css/bootstrap.min.css"
import "./assets/css/main.css"
import "./assets/fonts/line-icons.css"
import "./assets/css/slicknav.css"
import "./assets/css/animate.css"
import "./assets/css/responsive.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/nivo-lightbox.css"
//import "./assets/css/owl.carousel.min.css"
//import "./assets/css/owl.theme.css"

function App() {
    return (
        <div className="App">
            <Header/>
            <Feature/>
        </div>

    )
}

export default App;