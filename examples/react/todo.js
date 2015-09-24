let Item = ({ text }, key) => [li key/ { text }];
let TodoList = ({ items }) => [ul/ { items.map(createItem) }];

class TodoApp extends React.Component {
	constructor() {
		this.state = { items: [], text: '' };
	}
	change(e) {
		this.setState({ text: e.target.value });
	}
	submit(e) {
		let { items, text } = this.state;
		e.preventDefault();
		this.setState({
			text: '',
			items: items.concat(text)
		});
	}
	render() {
		let { items, text } = this.state;
		return (
			[div
				[h3/ TODO]
				[TodoList(items)]
				[form onSubmit=::this.submit/
					[input onChange=::this.change value=text]
					[button/ Add #{ items.length + 1 }]
				]
			]
		);
	}
}

React.render(TodoApp, mountNode);
