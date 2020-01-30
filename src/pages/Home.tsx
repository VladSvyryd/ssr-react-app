import React from 'react';
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Helmet application at HOME" />
                <title>Home</title>

            </Helmet>

            <h1>This is by Home page</h1>
        </>
    );
}

export default Home;