import React from 'react';

const CategoryItem = ({category})=>{
    
    return ( 
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                        {category.name}
                    </a>
                </h4>
            </div>
        </div>
     );
}

 
 
export default CategoryItem;