import React, { Component } from 'react';
import { connect } from 'react-redux';
import {blogListRequest} from '../../redux/blog/blog.actions';
import BlogItem from './BlogItem';
class BlogLists extends Component {
   
    componentDidMount() {this.props.blogListRequest();}
    render() { 
        const {blogLists} = this.props;
      
        return (
            <div className="col-sm-9">
            <div className="blog-post-area">
                <h2 className="title text-center">Latest From our Blog</h2>
                { blogLists && blogLists.map((post)=>{
                   
                    return ( <BlogItem key={post.id} post={post} />)
                }) }
                <div className="pagination-area">
                        <ul className="pagination">
                            <li><a  href="/" className="active">1</a></li>
                            <li><a  href="/">2</a></li>
                            <li><a  href="/">3</a></li>
                            <li><a  href="/"><i className="fa fa-angle-double-right"></i></a></li>
                        </ul>
                </div>
            </div>
            </div>
          );
    }
}
const mapStatetoProps = (state)=>({
    blogLists:state.blogLists  
});
export default connect(mapStatetoProps,{blogListRequest})(BlogLists);
