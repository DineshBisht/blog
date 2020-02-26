import React from 'react';

const BlogItem = ({post})=>{
    return (
        <div className="single-blog-post">
            <h3 style={{marginTop:"10px"}}>{post.title}</h3>
            <div className="post-meta">
                <ul>
                    <li><i className="fa fa-user"></i> Mac Doe</li>
                    <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                    <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                </ul>
                <span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                </span>
            </div>
            <a href="/"><img src={post.image} alt=""/></a>
            <p>{post.description}</p>
            <a  className="btn btn-primary"  href="/">Read More</a>
        </div>
    )
}
export default BlogItem;