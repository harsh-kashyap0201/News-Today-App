import React, { Component } from 'react'
import Newscomponent from './Newscomponent'
import Loading from './Loading'
export default class news extends Component {
 
constructor(){
  super();
  this.state={
    articleArray:[],
    loading:false,
    page:1
  }
} 
async componentDidMount(){  
    this.setState({
        loading:true
    })
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=663d889a74b94536a8c50fbf20c3ee48&page=${this.state.page}&pageSize=12`;
    let data= await fetch(url);
    let parsed_data= await data.json();
    this.setState({
        articleArray:parsed_data.articles,
        numOfPages:parsed_data.totalResults/12,
        loading:false
    })
 } 

nextPageHandle=async()=>{ 
    console.log("next page");
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=663d889a74b94536a8c50fbf20c3ee48&page=${this.state.page+1}&pageSize=12`;
    this.setState({
        loading:true
    })
    let data= await fetch(url);
    let parsed_data= await data.json();
    this.setState({
        articleArray:parsed_data.articles,
        page:this.state.page+1,
        loading:false
    })  
    
}
previousPageHandle=async()=>{
    console.log(this.state.pa);
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=663d889a74b94536a8c50fbf20c3ee48&page=${this.state.page-1}&pageSize=12`;
    this.setState({
        loading:true
    })
    let data= await fetch(url);
    let parsed_data= await data.json();
    this.setState({
        articleArray:parsed_data.articles,
        page:this.state.page-1,
        loading:false   
    })  
}

  render() {
    return (
      <>
      <div className="container">
        <h2 className="text-center fw-bold heading"> Today's Headline</h2>
        {this.state.loading?<Loading/>:
        <div className="row">
          {this.state.articleArray?.map((element)=>{ 
              return <div className="col md-4" key={element.url}>
              <Newscomponent  title={`${element.title}`} description={`${element.description}`} imgUrl={element.urlToImage} readMoreURL={element.url} />
              </div>
          }
          )}
        </div>
  }
      </div>
     
      <div className="container my-2">
            <div className="d-flex justify-content-between">
            <button type="button" disabled={(this.state.page<=1)} className="btn btn-sm" onClick={this.previousPageHandle} ><b>&#8678;Previous</b></button>
            <button type="button" disabled={(this.state.page>=this.state.numOfPages)} className="btn btn-sm" onClick={this.nextPageHandle} ><b>Next&#x21E8;</b></button>
            </div>
        </div>
      </> 
    )
  }
}
