import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [product,setProduct]=useState([])
  const [page,setPage]=useState(1)
  async function fetchProducts(){
    let res=await fetch("https://dummyjson.com/products?limit=150")
    let data=await res.json();
    if(data && data.products){
      setProduct(data.products)
    }
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  function pageHandle(value){
    setPage(value)
  }
  return (
    <>
    {
      product.length>0 && 
      <div className='products'>
            {
              product.slice(page*10-10,page*10).map((item,index)=>{
                return <div key={index} className='singleProduct'>
                    <img src={item.thumbnail} alt={item.title}/>
                    <span>{item.title}</span>
                </div>
              })
          }
      </div>
    }
    {
      product.length>0 && <div className='pagination'>
        <span onClick={()=>pageHandle(page-1)} className={page===1?"page_disable":""}><i className="fa-solid fa-angle-left"></i></span>
        {
          [...Array(product.length/10)].map((_,index)=>{
            return <span className={page===index+1?"selectedPage":""} onClick={()=>pageHandle(index+1)} key={index}>{index+1}</span>
          })
        }
        <span onClick={()=>pageHandle(page+1)} className={page===product.length/10?"page_disable":""}><i className="fa-solid fa-angle-right"></i></span>
      </div>
    }
    </>
  );
}

export default App;
