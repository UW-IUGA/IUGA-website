import React, { Component } from "react";

import axios from "axios";
import FeedEvent from "./FeedEvent";

import "./style.css";

const FEED_URL = "https://iuga.info/api/v1/events";

export default class Events extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: null
		};
	}

	componentDidMount() {
		axios.get(FEED_URL)
			.then(res => {
				this.setState({
					events: res.data,
				});
			}).catch(() => {});
	}
	
	render() {
		let events = this.state.events;

		return (
			<div>
				<h1>Upcoming IUGA Events</h1>
				{events != null ? (
					events.reverse().map((event) => (
						<FeedEvent event={event} key={event.id}></FeedEvent>
					))
				) : (
					<center><p>Due to recent changes to Facebook's Graph API, this events page is unable to fetch the information needed to display IUGA events.</p></center>
				)}
			</div>
		);
	}
}
