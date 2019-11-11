import React from "react";
import "./Upload.css";
import API from "../../utils/API";

class Upload extends React.Component {
	state = {
		song: [],
		albumCover: "",
		title: "",
		file: "",
		artist: "",
		tags: "",
		description: ""
	};

	loadMusic = event => {
		event.preventDefault();
		API.saveUpload({
		albumCover: this.state.albumCover,
		title: this.state.title,
		file: this.state.file,
		artist: this.state.artist,
		tags: this.state.tags,
		description: this.state.description			
		})
		.then(res => {
			console.log(res.data)
			}
			)
			.catch(err => console.log(err));

		API.getUploads().then(res => {console.log(res.data)}).catch(err => console.log(err))
	};

	handleInputChange = event => {
	   const { name, value } = event.target;
	   this.setState({
	     [name]: value
	   });

	 };

	render() {
		return(
			<div>
				<h1 className="uploadHeader"> Upload </h1>
				<section className="contact-wrap">
				  <form action="" class="contact-form">
				    <div className="col-sm-6">
				      <div className="input-block">
				        <label for=""></label>
				        <input type="text" className="form-control" placeholder="Title" name="title" onChange={this.handleInputChange} value={this.state.title}/>
				      </div>
				    </div>
				    <div className="col-sm-6">
				      <div className="input-block">
				        <label for=""></label>
				        <input type="file" className="form-control" placeholder="File" name="file" onChange={this.handleInputChange} value={this.state.file}/>
				      </div>
				    </div>
				    <div className="col-sm-12">
				      <div className="input-block">
				        <label for=""></label>
				        <input type="text" className="form-control" placeholder="Artist" name="artist" onChange={this.handleInputChange} value={this.state.artist}/>
				      </div>
				    </div>
				    <div className="col-sm-12">
				      <div className="input-block">
				        <label for=""></label>
				        <input type="text" className="form-control" placeholder="Tags" name="tags" onChange={this.handleInputChange} value={this.state.tags}/>
				      </div>
				    </div>
				    <div className="col-sm-12">
				      <div className="input-block textarea">
				        <label for=""></label>
				        <textarea rows="3" type="text" className="form-control" placeholder="Description" name="description" onChange={this.handleInputChange} value={this.state.description}></textarea>
				      </div>
				    </div>
				    <div className="col-sm-12">
				      <button className="square-button" onClick={this.loadMusic}>Upload</button>
				    </div>
				  </form>
				</section>
				<div className="uploadAlbumArt">
					<div className="btn uploadArtButton">Upload Image <input type="file" className="imageFile" name="albumCover" onChange={this.handleInputChange} value={this.state.albumCover}/></div>
				</div>
				<div className="glyphicon glyphicon-paperclip"></div>
			</div>			
		)
	}
	
};
export default Upload;