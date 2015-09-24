class Timer extends React.Component {
	constructor() {
		this.state = { elapsed: 0 }
	}
	componentDidMount() {
		this.interval = setInterval(this.tick, 1000);
	}
	componentWillUnmount() {
		this.interval = setInterval(this.tick, 1000);
	}
	render() {
		let { elapsed } = this.state;
		return [div/ Seconds Elapsed: { elapsed }];
	}
}

React.render(Timer, mountNode);
