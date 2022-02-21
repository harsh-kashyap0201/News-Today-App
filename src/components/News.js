import React, { Component } from 'react'
import Newscomponent from './Newscomponent'
import Loading from './Loading'
import PropTypes from 'prop-types'
export default class news extends Component {
  static defaultProps = {
    category:'general',
    country:'in'
  }
  static propTypes = {
    category: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }
  constructor(props){
    super(props);
    this.state={ 
      articleArray:[],
      loading:false,
      page:1
    }
    document.title=`News Today - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
  } 
  async componentDidMount(){  
      this.setState({
          loading:true
      })
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=663d889a74b94536a8c50fbf20c3ee48&page=${this.state.page}&pageSize=12`;
      let data= await fetch(url);
      let parsed_data= await data.json();
      this.setState({
          articleArray:parsed_data.articles,
          numOfPages:parsed_data.totalResults/12,
          loading:false
      })
  } 

  async updatepage(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=663d889a74b94536a8c50fbf20c3ee48&page=${this.state.page}&pageSize=12`;
      this.setState({
          loading:true
      })
      let data= await fetch(url);
      let parsed_data= await data.json();
      this.setState({
          articleArray:parsed_data.articles,
          loading:false
      })  
  }
  nextPageHandle=async()=>{  
      this.state.page=this.state.page+1;
      this.updatepage();
  }
  previousPageHandle=async()=>{
      this.state.page=this.state.page-1;
      this.updatepage();  
  }
  render() {
      return(
        <>
        <div className="container my-3 ">
          <h2 className="text-center fw-bold heading"> Today's Headline - {
            this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
          }</h2>
          {this.state.loading?<Loading/>:
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {this.state.articleArray?.map((element)=>{ 
                return <div className="col" key={element.url}>
                <Newscomponent  title={`${element.title}`} description={`${element.description}`} imgUrl={element.urlToImage} readMoreURL={element.url} />
                </div>
                }
            )}
          </div>
          }
        </div>
        <div className="container my-2">
              <div className="d-flex justify-content-between">
                <button type="button" disabled={(this.state.page<=1)} className="btn btn-sm" onClick={this.previousPageHandle} ><b>&#8678;Previous</b>
                </button>
                <button type="button" disabled={(this.state.page>=this.state.numOfPages)} className="btn btn-sm" onClick={this.nextPageHandle} ><b>Next&#x21E8;</b>
                </button>
              </div>
          </div>
        </> 
      )
    }
}
