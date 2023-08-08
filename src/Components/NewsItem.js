import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imgUrl?imgUrl:"https://unsplash.com/photos/E7q00J_8N7A"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem