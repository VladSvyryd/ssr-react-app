import React from 'react';

interface NaMatch {

    location: {
        pathname: string;
    }

}

const NoMatch: React.FC<NaMatch> = ({ location }) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)

export default NoMatch;