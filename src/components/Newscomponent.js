import React, { Component } from 'react'

export default class Newscomponent extends Component {

  copyURL = () => {
    navigator.clipboard.writeText(this.props.readMoreURL);
    alert("URL Copied to clipboard");
    return true;
  }

  render() {
    let { title, name, description, imgUrl, readMoreURL } = this.props;
    return (
      <div>
        <div className="card my-3 shadow-lg p-2 mb-5 rounded" >
          <img src={(imgUrl === null) ? "https://media.istockphoto.com/vectors/breaking-news-vector-illustration-poster-banner-logo-badge-on-white-vector-id891605714?b=1&k=20&m=891605714&s=612x612&w=0&h=HR6jezIN5wQ7B8imsxws65esrjQTEUIu8IAY38f4ZQc=" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{(title === "null") ? "" : title}</h5>
            <small className  ="text-muted">{(name==="null")?"":name}</small>
            <p className="card-text">{(description === "null") ? "" : description}</p>

            <div className="d-flex justify-content-between">
              <a href={readMoreURL} className="btn btn-sm buttonReadMore" target="_blank" rel="noopener noreferrer">
                View Full Coverage
              </a>
              <button className="btn btn-sm buttonShare" onClick={this.copyURL}>
                <b>Copy Url</b>
              </button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
