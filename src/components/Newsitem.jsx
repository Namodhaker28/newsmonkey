import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title,description,urlToImage,url,publishedAt}=this.props
    return (
      
      <div className="card" >
      <img src={urlToImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* <p className="card-text">{description}</p> */}
        <p class="card-text"><small class="text-muted">published At {new Date(publishedAt).toGMTString()}</small></p>
        <a target="_blank" href={url} className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div>
    );
  }
}

export default Newsitem;
