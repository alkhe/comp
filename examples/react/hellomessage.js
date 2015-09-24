let HelloMessage = props => (
	[div/
		Hello [this.props.name]
	]
);

let App = () => [HelloMessage name='John'];

React.render(App, mountNode);
