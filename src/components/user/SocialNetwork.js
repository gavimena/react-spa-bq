import React, { Component } from 'react';
import Facebook from '../images/facebook.svg';
import Twitter from '../images/twitter.svg';
import Pinterest from '../images/pinterest.svg';
import Google from '../images/google-plus-logo.svg';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countFacebook: 0,
		 	countTwitter: 0,
			countPinterest: 0,
			countGoogle: 0
	 };

	 this.handleClick = this.handleClick.bind(this);
 }

  handleClick(e) {
		var socialName = e.currentTarget.value;
		switch (socialName) {
			case 'facebook':
				this.setState({countFacebook: this.state.countFacebook + 1});
				break;
			case 'twitter':
				this.setState({countTwitter: this.state.countTwitter + 1});
				break;
			case 'pinterest':
				this.setState({countPinterest: this.state.countPinterest + 1});
				break;
			case 'google':
				this.setState({countGoogle: this.state.countGoogle + 1});
				break;
		}
  }

	render() {
		return (
			<div className="App">
				<div className="social">
					<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit" value="facebook" ><img className="icon--social" src={Facebook} alt="x" />Share</button>
							<div className="counter">{this.state.countFacebook}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social"  type="submit" value="twitter"><img className="icon--social" src={Twitter} alt="x" />Tweet</button>
							<div className="counter">{this.state.countTwitter}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit" value="pinterest"><img className="icon--social" src={Pinterest} alt="x" />Pin it</button>
							<div className="counter">{this.state.countPinterest}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit" value="google"><img className="icon--social" src={Google} alt="x" /></button>
							<div className="counter">{this.state.countGoogle}</div>
						</div>
						<div className="box--link">
							<button className="button--social" type="submit">Enlace</button>
						</div>
					</div>
				</div>

		);
	}
}

export default App;
