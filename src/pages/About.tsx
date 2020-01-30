import React from 'react';
import { Helmet } from "react-helmet";

const About: React.FC = () => {
    return (<>
        <Helmet>

            <title>About</title>
            <meta name="description" content="Helmet application at About" />
        </Helmet>

        <h1>This is by About page</h1>
    </>
    );
}

export default About;