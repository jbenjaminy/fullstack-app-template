import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

export default connect(actions)(class NewPaula extends React.Component {
	update(e) {
		e.preventDefault();
		this.props.replace_paula(this.refs.paula.value);
		this.props.actions.fetch_hello();
	}

	render() {
		return <form onSubmit={this.update.bind(this)}>
			<input ref="paula" />
			<input type="submit" value="Replace Paula" />
		</form>;
	}
})
