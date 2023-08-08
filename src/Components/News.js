import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=1&pagesize=${this.props.pagesize}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false
        })
    }

    handlePrevClick= async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page-1,
            articles: parsedData.articles,
            loading:false
        })
    }

    handleNextClick= async () => {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){
    //This if-else is used to stop next button when there is no item left to show (means disable) the next button , this statement may be deleted because I have disabled that button below and left it for learning purpose
        }
        else {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page+1,
            articles: parsedData.articles,
            loading:false
        })
    }
    }

    render() {
        return (
            <div className='container my-4'>
                <h2 className='text-center' style={{margin:"70px"}}>Top Headlines</h2>
                { this.state.loading && <Spinner/>}
                <div className="row my-4">
                    { !this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                                {/* <NewsItem title={element.title.slice(0, 50)} description={element.description.slice(0, 88)} newsUrl={element.url} imgUrl={element.urlToImage}/> */}
                                <NewsItem title={element.title} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage}/>
                            </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News