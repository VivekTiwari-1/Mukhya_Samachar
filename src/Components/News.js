import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Aimee Lewis",
            "title": "US knocked out of Women’s World Cup after penalty shootout loss to Sweden - CNN",
            "description": "The US’ participation in the Women’s World Cup is over, ending in the cruelest of defeats.",
            "url": "https://www.cnn.com/2023/08/05/football/usa-sweden-womens-world-cup-2023-spt-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230806075838-bt15-usa-sweden-0806.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-08-06T18:06:00Z",
            "content": "The US participation in the Womens World Cup is over, ending in the cruelest of defeats. \r\nAfter a tense match, the sort which causes the stomach to churn, it is Sweden which progresses to the quarte… [+5368 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "Niger: thousands gather for rally to cheer generals who led coup - The Guardian",
            "description": "Supporters wave Niger and Russia flags as Ecowas deadline for military to cede power approaches",
            "url": "https://www.theguardian.com/world/2023/aug/06/niger-thousands-gather-for-rally-to-cheer-generals-who-led-coup",
            "urlToImage": "https://i.guim.co.uk/img/media/0849382645aec70c405434d766b5b7201ef85c6c/0_127_4297_2579/master/4297.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=553020c477efed42706d06c8a7c18c5f",
            "publishedAt": "2023-08-06T17:36:00Z",
            "content": "Thousands of coup supporters in Niger gathered on Sunday for a rally to cheer on the generals claiming power, as a deadline set by the west African bloc for the military to relinquish control or face… [+8724 chars]"
        }
    ]
    constructor() {
        super();
        console.log("I am a Constructor");
        this.state = {
            articles: this.articles,
            loading: false,
            page : 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=1&pagesize=20"
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlePrevClick= async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=${this.state.page-1}&pagesize=20`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page-1,
            articles: parsedData.articles
        })
    }

    handleNextClick= async () => {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

        }
        else {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=${this.state.page+1}&pagesize=20`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page+1,
            articles: parsedData.articles
        })
    }
    }

    render() {
        return (
            <div className='container my-4'>
                <h2>Top Headlines</h2>
                <div className="row my-4">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                                {/* <NewsItem title={element.title.slice(0, 50)} description={element.description.slice(0, 88)} newsUrl={element.url} imgUrl={element.urlToImage}/> */}
                                <NewsItem title={element.title} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage}/>
                            </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News