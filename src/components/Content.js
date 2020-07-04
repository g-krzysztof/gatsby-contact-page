import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import About from '../pages/About.js';
// import Resume from '../pages/Resume.js';
// import Works from '../pages/Works.js';
// import Contact from '../pages/Contact.js';
// import { Scrollbars } from 'react-custom-scrollbars';

function Content() {

    if (window.innerWidth > 768) {
        return (
            <div className="Content">

                <div className="Content__wrapper">
                    {/*<Scrollbars>*/}
                        <div style={{ paddingRight: "20px" }}>
                            {/*<Switch>*/}
                            {/*    <Route path="/" exact component={About} />*/}
                            {/*    <Route path="/resume" component={Resume} />*/}
                            {/*    <Route path="/works" component={Works} />*/}
                            {/*    <Route path="/contact" component={Contact} />*/}
                            {/*</Switch>*/}
                        </div>
                    {/*</Scrollbars>*/}
                </div>
            </div >
        );
    } else {
        return (
            <div className="Content">

                <div className="Content__wrapper">
                    <div style={{ paddingRight: "20px" }}>
                        {/*<Switch>*/}
                        {/*    <Route path="/" exact component={About} />*/}
                        {/*    <Route path="/resume" component={Resume} />*/}
                        {/*    <Route path="/works" component={Works} />*/}
                        {/*    <Route path="/contact" component={Contact} />*/}
                        {/*</Switch>*/}
                    </div>
                </div>
            </div >
        );
    }
}

// console.log(window.innerWidth);

export default Content;
