import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //  UpdateNews function is wtitten to optimize three functions written below 

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=${page}&pagesize=${props.pagesize}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    
        props.setProgress(100);
    }

    useEffect( () => {

        document.title = `Mukhya Samachar - ${capitalizeFirstLetter(props.category)}`
        updateNews()
    },[])

    // const handlePrevClick = async () => {
    //     setPage(page-1)
    //     updateNews()
    // }

    // const handleNextClick = async () => {
    //     setPage(page + 1)
    //     updateNews()
    // }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4f08ab3e48e549cc81fdcd93d5890d2b&page=${page+1}&pagesize=${props.pagesize}`
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

        return (
            <>
             {/* <div className='container my-4'> --> for buttons */}

                    <h2 className='text-center' style={{ margin: "120px 0 70px 0" }}>Mukhya Samachar - {capitalizeFirstLetter(props.category)}</h2>
                    { loading && <Spinner/>}

                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner />}
                    >

                        <div className="container">
                            <div className="row my-4">
                                {/* { !loading && articles.map((element) => {   -->Used for prev and next button */}
                                {articles.map((element) => {
                                    return <div className="col-md-3" key={element.url}>
                                        {/* <NewsItem title={element.title.slice(0, 50)} description={element.description.slice(0, 88)} newsUrl={element.url} imgUrl={element.urlToImage}/> 

                                element name is used everywhere because it is used as key in map to iterate values
                                All props name like title, urlImage, url, publishedAt, etc. are taken according to names use in newAPI which is neccessary and can't be changed */}

                                        <NewsItem title={element.title} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage} author={element.author} time={element.publishedAt} />
                                    </div>
                                })}
                            </div>
                        </div>

                    </InfiniteScroll>


                    {/* Prev and Next buttons */}
                    {/* <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pagesize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div> */}

             {/* </div> */}

            </>

        )
}

export default News