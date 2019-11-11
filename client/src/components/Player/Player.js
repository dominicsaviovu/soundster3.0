import React from "react";
import "./Player.css";
import ReactPlayer from 'react-player';
import music from "../../music.json";

// var audio = new Audio('https://soundcloud.com/jaykode/shelter-jaykode-remix');
// audio.play()

class Player extends React.Component {
	state = {
		music,
		play: "",
		activeid:""
	};

	handlePlay = (id) => {
		// event.preventDefault();
		this.setState({activeid: id})
		this.refs[`musicCard${id}`].classList.add("playing")
		this.setState({play: true})
	}

	handlePause = id => {
		// event.preventDefault();
		this.setState({play: false})
		this.refs[`musicCard${id}`].classList.remove("playing")
	}

	render() {
		return(
			<div>
				<div >
					<ul className="musicPlayers">
					{this.state.music.map(music => (
					<li 
					id="test" 
					key={music.id} 
					className="music-card"
					ref={`musicCard${music.id}`}>
					  <ReactPlayer 
					  	key={music.id}
					  	className="reactPlayerDisplay" 
					  	url={music.url} 
					  	playing={this.state.play && this.state.activeid === music.id} 
					  	>
					  </ReactPlayer>
					  <div class='image' style= {{backgroundImage: 'url(' + music.image +')'}}></div>
					  
					  <div class='wave'></div>
					  <div class='wave'></div>
					  <div class='wave'></div>
					  
					  <div class='info'>
					    <h2 class='title'>{music.title}</h2>
					    <div class='artist'>{music.artist}</div>
					  </div>
					  
					  <i class="fa fa-pause trigger" ref="fa-pause" id={music.id} onClick={() => this.handlePause(music.id)}></i>
					  <i class="fa fa-play trigger" onClick={ () => this.handlePlay(music.id)}></i>
					</li>
					))}
					</ul>
				</div>



		{/*	<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					<div className="player-container">
					  <div className="square">
						<img className="cd" src="https://www.dropbox.com/s/q79oj13hkztaoj2/cd.png?raw=1" alt="cdimage" /> 
					    <p className="title"> Example {props.title} </p> 
					    <p className="sub"> Example {props.sub} </p>
					    <div className="run"></div>
					    <div className="play"></div>
					    <div className="playbtn"><a href="https://soundcloud.com/jaykode/shelter-jaykode-remix"><img alt="pause" className="pause" src="https://www.dropbox.com/s/ozu8vunv3da8zfg/play%20btn.png?raw=1" /></a></div>
					    <div className="forward"><img className="ff" src="https://www.dropbox.com/s/sb2nkjffzkjmnqx/forward.png?raw=1" alt="forward" /></div>
					    <div className="back"><img className="ff" src="https://www.dropbox.com/s/elkr56m7av551am/back.png?raw=1" alt="back"/></div>
					    <p className="time">2:31</p>
					    <p className="end">-0:43</p>
					    <div className="buttonContainer">
					    	<div className="glyphicon glyphicon-heart-empty icons btn" />
					    	<div className="glyphicon glyphicon-retweet icons btn" />
					    	<div className="glyphicon glyphicon-plus icons btn" />
					    	<div className="glyphicon glyphicon-save icons btn" />

					    </div>
					  </div>

					</div>
				</div>
			</div>*/}

{/*			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					{this.state.music.map(music => (
					<div className="player-container">
					  <div className="square">
						<img className="cd" src={music.image} key={music.id} alt="cdimage" /> 
					    <p className="title">  </p> 
					    <p className="sub">  </p>
					    <div className="run"></div>
					    <div className="play" onClick={this.handlePlay}></div>
					    <div className="playbtn"><a href="https://soundcloud.com/jaykode/shelter-jaykode-remix"><img alt="pause" className="pause" src="https://www.dropbox.com/s/ozu8vunv3da8zfg/play%20btn.png?raw=1" /></a></div>
					    <div className="forward"><img className="ff" src="https://www.dropbox.com/s/sb2nkjffzkjmnqx/forward.png?raw=1" alt="forward" /></div>
					    <div className="back"><img className="ff" src="https://www.dropbox.com/s/elkr56m7av551am/back.png?raw=1" alt="back"/></div>
					    <p className="time">2:31</p>
					    <p className="end">-0:43</p>
					    <div className="buttonContainer">
					    	<div className="glyphicon glyphicon-heart-empty icons btn" />
					    	<div className="glyphicon glyphicon-retweet icons btn" />
					    	<div className="glyphicon glyphicon-plus icons btn" />
					    	<div className="glyphicon glyphicon-save icons btn" />

					    </div>
					  </div>
					</div>
						))}
				</div>
			</div>*/}

			{/*<div className="row player-row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					<ReactPlayer 
						className="player"
						url="https://soundcloud.com/jaykode/shelter-jaykode-remix"
						config={{
							soundcloud: {
								options: {
									sharing: "true"
								}
							}
						}}
						height="150px"
						width="800px"
					/>
					<ReactPlayer 
						className="player"
						url="https://www.mixcloud.com/sergey223/ekali-the-lab-smirnoffhouse-mixmag-lab-03-aug-2016/"
						height="150px"
						width="800px"
					/>
					<ReactPlayer 
						className="player"
						url="https://soundcloud.com/manilakilla/manila-killa-live-holy-ship-2018-theatre-set"
						config={{
							soundcloud: {
								options: {
									sharing: "true"
								}
							}
						}}
						height="150px"
						width="800px"
					/>
					<ReactPlayer 
						className="player"
						url="https://www.mixcloud.com/thissongissick/rl-grime-diplo-and-friends-guest-mix-2013/"
						height="150px"
						width="800px"
					/>
					<ReactPlayer 
						className="player"
						url="https://soundcloud.com/jaykode/shelter-jaykode-remix"
						height="150px"
						width="800px"
					/>
				</div>
				<div className="col-md-2"></div>
			</div>*/}
			</div>

			)
	}
	
};

export default Player;