import React, { Component } from "react";
import classnames from "classnames";

import "./style.css";

export default class Candidate extends Component {
	render() {
		if (this.props.candidate === null) {
			return null;
		}

		const { className } = this.props;
		return (
			<div className={classnames("Candidate", className)}>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h2>{this.props.candidate.name}, {this.props.candidate.elected ? (<span className="Elected">Elected {this.props.candidate.role}</span>) : this.props.candidate.role}</h2>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="statement">
							<img
								alt={this.props.candidate.name + " for " + this.props.candidate.role}
								src={`/assets/election/${this.props.year}/${this.props.candidate.image}`}
							/>
							{
								this.props.candidate.statement.split("\n").map((p, i) => (
									<p key={i}>{p}</p>
								))
							}
						</div>
					</div>
				</div>

					{ this.props.candidate.video &&
						(
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<div className="embed-responsive embed-responsive-16by9">
										<iframe className="embed-responsive-item" src={this.props.candidate.video} frameBorder="0" allowFullScreen></iframe>
									</div>
								</div>
							</div>
						)
					}
			</div>
		);
	}
}
