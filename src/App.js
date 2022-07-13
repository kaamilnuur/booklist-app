   import React,{useState,useEffect} from "react";
   import {View} from './component/View'

 ///geting data from local storage
//  function getDatafromLs(){
//   const data=localStorage.getItem("bookds")
//   if(data){
//     return JSON.parse(data)
//   }else{
//     return []
//   }
//  }

function App() {
  //  main array of an object state 
  const loadedTodos = localStorage.getItem("books")
  ? JSON.parse(localStorage.getItem("books"))
  : []; 
  const [books,setbooks]=useState(loadedTodos)
  // input fields


  const [title,settitle]=useState("")
  
  const [author,setauthor]=useState("")
  const [isbn,setisbn]=useState("")


  ////  event handler
  function handleaddd(e){
      e.preventDefault();
        
      ///  create an object
      const book={
        title,
        author,
        isbn
      }
      setbooks([...books,book])
      setauthor("")
      setisbn("")
      settitle("");
  }

    // delete book from LS
    const deleteBook=(isbn)=>{
      const filteredBooks=books.filter((element,index)=>{
        return element.isbn !== isbn
      })
      setbooks(filteredBooks);
    }
  
  
      /// saving data into local storage 
      useEffect(()=>{
     localStorage.setItem("books", JSON.stringify(books))
      },[books])

     
  return (
    <div className="wrapper">
      <h1>Booklist App</h1>
      <p>Add and view your books using local storage</p>
    <div className="main">
      <div className="form-container">

        <form autoComplete="off" className="form-group"
        onSubmit={handleaddd}>
          <label>Title</label>
          <input type="text"  className="form-control" required
          onChange={(e)=> settitle(e.target.value)} value={title}></input> 
          <br></br>
          <label>Author</label>
          <input type="text" required className="form-control" 
           onChange={(e)=> setauthor(e.target.value)} value={author}></input> 
          <br></br>
          <label>ISBN#</label>
          <input type="number" required className="form-control"
            onChange={(e)=> setisbn(e.target.value)} value={isbn}></input> 
          <br></br>
          <button type="submit" className="btn btn-primary btn-md">
            Add Book List
          </button>
        </form>

      </div>
      <div className="view-container">
        {books.length>0 && <>
          <div className="table-responsive">
            <table className="table">
            <thead>
              <tr>
                <th>
                  ISBN#
                </th>
                <th>
                  Title
                </th>
                <th>
                  Author
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <View  bookss={books}  deleteBook={deleteBook}/>
            </tbody>
            </table>
           
          </div>
          <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button>
        </>}
        {books.length <1  && <div className="nodata">Not data found </div>}
      </div>
    </div>
    </div>
  );
}

export default App;
