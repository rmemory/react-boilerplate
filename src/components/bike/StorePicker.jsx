/* eslint-disable react/jsx-indent-props */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { getFunName } from './helpers.js';

import './styles.css';

class StorePicker extends React.Component {
	// we use a property here, rather than a regular function so it has
	// access to the Component 'this'.
	goToStore = (event) => {
		/* we aren't hitting a server here, so stop the page from
			submitting to the server, and just handle everything
			client side */
		event.preventDefault();

		// Get the text from the input, and change the page url to
		// /bikes/whatever-storeid, using push state, meaning we
		// don't loose page state.
		// Because StorePicker is an immediate child of the Router
		// here, it means we have access to the Router via props
		this.props.history.push(`/bikes/${this.storeNameInputElement.value}`);
	}

	render() {
		return (
			<Fragment>
				{ /* Events in React are a bit different than events in vanilla
					 js. One difference is there is no querySelect to obtain
					 the element associated with addEventHandler. We just handle
					 the events inline. We do "onEventType" (in this case onSubmit)
					 and point it at an event handler function. */}
				<form className="store-selector" onSubmit={this.goToStore}>
					<h2>Please Enter a Store</h2>
					{/* We use defaultValue here because value (like class) are keywords
						in jsx and thus must be modified to defaultValue and className
						respectively. */}
					<input
						type="text"
						ref={input => // eslint-disable-line no-return-assign
							this.storeNameInputElement = input}
						required
						placeholder="Store Name"
						defaultValue={getFunName()}
					/>
					<button type="submit">Visit Store ➞</button>
				</form>
			</Fragment>
		);
	}
}

StorePicker.propTypes = {
	history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default StorePicker;
