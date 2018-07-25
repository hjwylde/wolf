import {Editor, EditorState, RichUtils} from 'draft-js'
import React from 'react'

import 'draft-js/dist/Draft.css';

export default class MarkdownEditor extends React.Component {
    constructor() {
        super();

        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});

        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }

        return 'not-handled';
    }

    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange}
                    handleKeyCommand={this.handleKeyCommand}/>
        );
    }
}

MarkdownEditor.propTypes = {};
