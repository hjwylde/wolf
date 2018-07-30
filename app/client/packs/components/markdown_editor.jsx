import {CompositeDecorator, Editor, EditorState, Modifier} from 'draft-js'
import React from 'react'

import 'draft-js/dist/Draft.css';

const boldStrategy = (contentBlock, callback, contentState) => {
    findWithRegex(HANDLE_REGEX, contentBlock, callback);
};

const _decorator = new CompositeDecorator([
    {
        strategy: boldStrategy,
        component: BoldSpan,
    }
]);

export default class MarkdownEditor extends React.Component {
    constructor() {
        super();

        this.state = {editorState: EditorState.createEmpty(DECORATOR)};
    }

    render() {
        return (
            <Editor
                editorState={this.state.editorState}
                onChange={this._onChange.bind(this)}
                stripPastedStyles
            />
        );
    }

    _onChange(editorState) {
        let text = editorState.getCurrentContent().getFirstBlock().getText();
        console.log(text);
        let contentState = Modifier.setBlockType(editorState.getCurrentContent(), editorState.getSelection(), 'header-one');
        editorState = EditorState.push(editorState, contentState);


        this.setState({editorState});
    }
}
