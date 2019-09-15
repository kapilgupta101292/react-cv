# React-CV

> A Resume (CV) Component built by React, available for React/Gatsby and fully printable!

React-CV is fully customizable and printable CV / Resumee component for React/Gatsby.
You can easily create your fully printable and beatiful CV / Resume by passing necessary props to React-CV. 
If needed, It is possible to use your own component inside.

[![NPM](https://img.shields.io/npm/v/react-cv.svg)](https://www.npmjs.com/package/react-cv) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<!-- [Live Demo](http://flippy.sbaydin.com "Live Demo") -->


## How to install ?

`npm install react-flippy` or `yarn add react-flippy`


## Basic Usage

```jsx
import React, { Component } from 'react'

import CV from 'react-cv'

class Example extends Component {
  render () {
    return (
      <CV
        personalData={{
          name: 'John Doe',
          title: 'Senior Software Developer',
          image: 'https://bulma.io/images/placeholders/128x128.png',
          contacts: [
            { type: 'email', value: 'john@example.com' },
            { type: 'phone', value: '+00 (123) 456 78 90' },
            { type: 'website', value: 'example.com' },
            { type: 'linkedin', value: 'linkedin.com/in/notexists' },
            { type: 'twitter', value: 'twitter.com/404' },
            { type: 'github', value: 'github.com/404' }
        ]}}
        sections= {[{
          type: 'text',
          title: 'Career Profile',
          content: 'When I was child, I always want to be a developer.',
          icon: 'usertie'
        }]}
	  />
    )
  }
}
```

## Advanced Usage & Prop List

React-CV only requires basic personal data to work. All other props are optional.
Here are the complete list of props and descriptions.

### List of Props
- Personal Data

	Name of Prop: personalData
	Type: Object
	Schema: 
	```js
	{
	name: 'String',
	title: 'String',
	image: 'String', // URL
	contacts: [ // Array of objects
		{ // Single contact object
			type: 'String', // Available values ['email', 'phone', 'website', 'github', 'linkedin', 'twitter']
			value: 'String'
		}
	]
	}
	```

- Sections (Experiences, Projects, Career Profile, Skills, ETC)

	Name of Prop: sections
	Type: Array Of  Objects
	Schema of single objeect: 
	```js
	{
	type: 'String', // Available values ['text', 'common-list', 'projects-list', 'tag-list']
	title: 'String',
	icon: 'String or SVG Icon', // Available values ['graduation', 'book', 'comments', 'tasks', 'archive', 'rocket', 'language', 'cubes', 'usertie'] or FontAwesome SVG Icon
	description: 'String',
	groups: [ // Array of Object, if type is only projects-list
		{ // Schema of single group object
          sectionHeader: 'Company Name',
          description: 'Optional',
          items: [
            { title: 'Project', projectUrl: 'optional', description: 'Optional' },
          ]
		} 
	},
	items: [ // Array of Objects(type:common-list) or Array of Strings(type:tag-list)
		{
			  title: 'Some Conferences / 2019',
			  authority: 'SomeConf',
			  authorityMeta: 'Speaker',
			  authorityWebSite: 'https://www.someconf.somesome',
			  rightSide: 'test'
		}
	]
	```



## License

MIT © [sbayd](https://github.com/sbayd)