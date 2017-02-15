import React, { Component } from 'react';
import classnames from 'classnames';

import Header from './Header'
import Footer from './Footer'

import './style.css';

export default class Layout extends Component {
	render() {
		const { className, ...props } = this.props;
		return(
			<div>
				<Header {...props}/>
				<main className={classnames('Main', className)}>
					<div className="container">
						{ this.props.children }
					</div>
				</main>
				<Footer {...props}/>
			</div>
		);
	}
}