import React from 'react'
import ReactDom from 'react-dom'

import MarkdownEditor from '../components/markdown_editor';

import 'normalize.css';

import './root/root.css';

class Root extends React.Component {
    render() {
        return (
            <MarkdownEditor/>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById('page-root');

    ReactDom.render(
        <Root/>,
        node
    )
});
