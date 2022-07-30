import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=2c70a216b3cb425fbca9b43ff347e20f&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.state.loading = true;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  // prevclick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=2c70a216b3cb425fbca9b43ff347e20f&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // };

  // nextclick = async () => {
  //   if (
  //     !(
  //       this.state.page + 1 >
  //       Math.ceil(this.state.totalResults / this.props.pagesSize)
  //     )
  //   ) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apiKey=2c70a216b3cb425fbca9b43ff347e20f&page=${
  //       this.state.page + 1
  //     }&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       loading: false,
  //     });
  //   }
  // };

  fetchMoreData = async() =>{
    this.setState({page:this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=2c70a216b3cb425fbca9b43ff347e20f&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    // this.state.loading = true;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles ),
      totalResults: parsedData.totalResults,
      loading: false,
    });

  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center text-primary my-5">
          NewsMonkey - Headlines from {this.props.category}
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResults}
          loader={<Spinner/>}
        ><div className="container my-3">
          <div className="row  mt-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    // description={element.description ? element.description : ""}
                    urlToImage={element.urlToImage}
                    url={element.url}
                    publishedAt={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container my-5 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1 ? true : false}
            type="button"
            class="btn btn-dark"
            onClick={this.prevclick}
          >
            &larr; Previous
          </button>
          {this.state.loading && <Spinner />}

          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            class="btn btn-dark "
            onClick={this.nextclick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
