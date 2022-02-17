import React, { Component } from 'react'
import Newscomponent from './Newscomponent'
import Loading from './Loading'
export default class news extends Component {
 
constructor(){
    document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/03/74/13/86/360_F_374138639_MdhViSbJ3gE2Foy7NLJnadYjH23A4fVG.jpg')"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
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
      <div className="container" style={{marginTop: "75px", color:"white"}}>
        <h2 className="text-center fw-bold"> Today's Headline</h2>
       {this.state.loading?<Loading/>:
        <div className="row">
          {this.state.articleArray.map((element)=>{ 
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
            <button type="button" disabled={(this.state.page<=1)} className="btn btn-sm" onClick={this.previousPageHandle} style={{backgroundColor:"#85dfdf"}}><b>&#8678;Previous</b></button>
            <button type="button" disabled={(this.state.page>=this.state.numOfPages)} className="btn btn-sm" onClick={this.nextPageHandle} style={{backgroundColor:"#85dfdf"}}><b>Next&#x21E8;</b></button>
            </div>
        </div>
      </> 
    )
  }
}
