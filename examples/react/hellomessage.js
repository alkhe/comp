let HelloMessage = ({ name }) => (
	[div/
		Hello { name }
	]
);

let App = () => [HelloMessage name='John'];

React.render(App, mountNode);
