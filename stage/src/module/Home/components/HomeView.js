import React from 'react';
import DuckImage from '../assets/Duck.jpg';

import docsDemo from 'Container/DocsDemo';

import HomeDemo1 from './HomeDemo1';
import HomeDemo2 from './HomeDemo2';

export const HomeView = () => {
    let demos = [HomeDemo1, HomeDemo2];

    return (
        <docsDemo className="colorNested layout-margin">
            <h4>This is a duck, because Redux!</h4>
            <img className='duck' src={DuckImage} />

            {
                demos.map((E, i) => (
                    <div className="demo-container" key={i}>
                        {new E().render()}
                    </div>
                ))
            }

        </docsDemo>
    );
};

export default HomeView;
