import React, { Component } from 'react';
import CategoryLists from '../category/CategoryLists';

class Sidebar extends Component {
   
    render() { 
        return ( 
            <div className="col-sm-3">
            <div className="left-sidebar">
                <h2>Category</h2>
                 <CategoryLists />	
            </div>
            </div>
         );
    }
}

export default Sidebar;