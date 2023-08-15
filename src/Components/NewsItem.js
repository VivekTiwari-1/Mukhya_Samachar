import React from 'react'
import unloadImg from '../Loading-Icon.webp'

const NewsItem = (props) => {
        let { title, description, imgUrl, newsUrl, sourceName, author, time } = props;  // Destructuring feature of javaScript, else we need to write like props.title at every place where i have used title
        return (
            <div>
                <div className="card">
                    <img src={imgUrl?imgUrl: unloadImg} className="card-img-top" alt="..." /> 
                {/* Using ternary operator we can set an operation in case if the given operation failed like here if image is not present of a news then I have set a default image, similarly in case of Author */}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        
                        <p className='card-text'><small className='text-muted'>{sourceName?sourceName:""} | By {author?author:"Unknown"} on {new Date(time).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem