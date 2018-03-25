import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import App from '../App'
import template from './template'
import { StaticRouter } from 'react-router'

const server = express();

server.get('*', (req, res) => {
    // const html = ReactDOMServer.renderToString(<div>Hello World</div>);
    // res.send(html);
    const isMobile = true;
    const initialState = { isMobile };
    const appString =  ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App {...initialState} />
        </StaticRouter>
    );

    res.send(template({
        body: appString,
        title: 'Hello World from the server',
        initialState: JSON.stringify(initialState)
    }));

});


server.listen(8080);