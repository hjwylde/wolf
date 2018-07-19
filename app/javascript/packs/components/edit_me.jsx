import PropTypes from 'prop-types'
import React from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js'

import 'draft-js/dist/Draft.css';

export default class EditMe extends React.Component {
    constructor() {
        super();

        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = (command, editor) => {
            RichUtils.handleKeyCommand(editor, command)
        };
    }

    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange}
                    handleKeyCommand={this.handleKeyCommand}/>
        );
    }
}

EditMe.propTypes = {
    name: PropTypes.string.isRequired,
};
