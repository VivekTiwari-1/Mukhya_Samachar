import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        console.log("I am a Constructor");
        this.state = {
            articles: [],
            loading: false,
            page : 1
        }
        document.title = `Mukhya Samachar - ${this.capitalizeFirstLetter(this.props.category)}`
    }

    //  UpdateNews function is wtitten to optimize three functions written below 

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=${this.state.page}&pagesize=${this.props.pagesize}`
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

    async componentDidMount(){
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=1&pagesize=${this.props.pagesize}`
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData)
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading:false
        // })
        this.updateNews()
    }

    handlePrevClick= async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     page : this.state.page-1,
        //     articles: parsedData.articles,
        //     loading:false
        // })
        this.setState({page : this.state.page-1})
        this.updateNews()
    }

    handleNextClick= async () => {
    //     if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){
    // //This if-else is used to stop next button when there is no item left to show (means disable) the next button , this statement may be deleted because I have disabled that button below and left it for learning purpose
    //     }
    //     else {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
    //     this.setState({loading:true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         page : this.state.page+1,
    //         articles: parsedData.articles,
    //         loading:false
    //     })
    // }
    this.setState({page : this.state.page+1})
    this.updateNews()
    }

    render() {
        return (
            <div className='container my-4'>
                <h2 className='text-center' style={{margin:"70px"}}>Mukhya Samachar - {this.capitalizeFirstLetter(this.props.category)}</h2>
                { this.state.loading && <Spinner/>}
                <div className="row my-4">
                    { !this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                                {/* <NewsItem title={element.title.slice(0, 50)} description={element.description.slice(0, 88)} newsUrl={element.url} imgUrl={element.urlToImage}/> 
                                element name is used everywhere because it is used as key in map to iterate values
                                All props name like title, urlImage, url, publishedAt, etc. are taken according to names use in newAPI which is neccessary and can't be changed */}
                                <NewsItem title={element.title} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage} author={element.author} time={element.publishedAt}/>
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