class Editor extends React.Component {
	constructor() {
		this.state = { value: 'Type some Markdown here' };
	}
	change(e) {
		this.setState({ value: e.target.value })
	}
	render() {
		let { value } = this.state;
		return (
			[div class='MarkdownEditor'/
				[h3/ Input]
				[textarea
					onChange=::this.change
					value
				]
				[h3/ Output]
				[div class='content'!
					{ marked(value, { sanitize: true }) }
				]
			]
		)
	}
}
