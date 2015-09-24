# comp

A clean markup language for the web.

## JSX to Comp

```js
<div>Text</div>

// =>

[div/ Text]
```

```js
<img src='./cat.jpg' />

// =>

[img src='./cat.jpg']
```

```js
<div>Hello, { name }!</div>

// =>

[div/ Hello, { name }!]
```

```js
<div>
	<h3>Important</h3>
	Description
</div>

// =>

[div/
	[h3/ Important]
	Description
]
```

```js
<div dangerouslySetInnerHTML={{ __html: marked(x) }} />

// =>

[div! { marked(x) }]
```

```js
let ListItem = ({ item, color, children }) => <div style={{ color }}>{ item }{ children }</div>;

<ListItem key={ key } item={ item } color='red'>
	Data
</ListItem>

// =>

let ListItem = ({ item, color, children }) => [div style={ color }/ { item }{ children }];

[ListItem key item color='red'/ Data]
```
