import React from "react";
import {Icon} from 'react-icons-kit'
import '../index.css';
import {trash} from 'react-icons-kit/feather/trash'
export const  View =({bookss, deleteBook})=>{
    console.log("data",bookss)
   return bookss.map(book =>
  
    <tr key={book.isbn}>
          <td>{book.isbn} </td>
          <td>{book.title} </td>
          <td>{book.author} </td>
          <td className='delete-btn delete' onClick={()=>deleteBook(book.isbn)}>
                <Icon icon={trash}/>
            </td>  
    </tr>
   )
}