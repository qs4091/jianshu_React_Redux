import React, { Component } from 'react';
import { HomeWrapper,HomeLeft,HomeRight,HeadImg } from './style.js';
import List from './components/List.js';
import Recommande from './components/Recommande.js';
import Writer from './components/Writer.js';
import Topic from './components/Topic.js';

class Home extends Component{
	
	render(){
		return (
			<HomeWrapper>
				<HomeLeft>
					<HeadImg src="https://cdn2.jianshu.io/assets/web/misc-pic3-a3e7f05fee99976afbb936eb6d3c288a.png" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommande />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}

}

export default Home;