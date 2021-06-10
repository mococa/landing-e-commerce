import React, {useState} from 'react'

function Category({name, setCat,index,selectedIndex}) {

    const style={
        padding:"10px 20px 0",
        minWidth:'50px',
        textAlign: 'center',
        fontWeight:'bold',
        color: 'var(--theme)',
        cursor: 'pointer',
        textTransform: 'capitalize'        
    }
    return (
        <li style={style} onClick={()=>setCat(index,name)} className={selectedIndex === index ? "cat-select" : ""}>
            {name}
        </li>
    )
}

export default Category
