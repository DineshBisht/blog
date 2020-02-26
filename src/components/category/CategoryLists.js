import React, { Component } from 'react';
import { connect } from 'react-redux';
import {categoryRequest} from '../../redux/category/category.actions';
import CategoryItem from './CategoryItem';
class CategoryLists extends Component {
    
    componentDidMount() {
        this.props.categoryRequest();
    }
    render() { 
        const {categoryLists} = this.props.categoryLists;
        return ( 
           
               
                <div className="panel-group category-products" id="accordian">
                { categoryLists && categoryLists.map((category)=>{
                    return (<CategoryItem key={category.id} category={category}/>)
                }) }
                </div>
            
    
        );
    }
}
 const mapStateToProps = (categoryLists)=>({
    categoryLists
 })
export default connect(mapStateToProps,{categoryRequest})(CategoryLists);