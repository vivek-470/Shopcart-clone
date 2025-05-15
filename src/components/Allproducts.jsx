import React, {useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

const Allproducts = ({Addtocart}) => {
  const [categories, setCategories] = useState([]);
  const [product,setProduct]=useState([]);
  const [searchProduct,setSearchProduct]=useState("")
  const [allProducts, setAllProducts] = useState([]);


  const [selectProduct,setselectProduct]=useState("");
  const filterProduct=(event)=>{
    setselectProduct(event.target.value)

  }
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = selectProduct
          ? `https://dummyjson.com/products/category/${selectProduct}`
          : `https://dummyjson.com/products`;

        const res = await fetch(url);
        const data = await res.json();
     console.log(data)
    

        if (data.products) {
          setProduct(data.products);
          setAllProducts(data.products); 
        } else {
          console.warn("Unexpected response:", data);
          setProduct([]); 
        }

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectProduct]);
  
        
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products/categories');
        const data = await res.json(); 
        setCategories(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  
    fetchCategory(); 
  }, []);
  
  //search item
   const filterSearch = (e) => {
  const query = e.target.value;
   setSearchProduct(query)

  const filtered = allProducts.filter((item) =>
    item.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

  setProduct(filtered);
};

  return (
    <div className='flex flex-col  py-[70px] gap-3  w-full max-w-[1530px] '>
    

      <h1 className='font-bold text-3xl text-pink-600'>ALL CATEGORIES</h1>
        <div className=' flex justify-center items-center '>
          <input type="text"  placeholder='Enter something....' className="w-52 h-9 px-3 border-2  rounded-md focus:outline-none focus:border-pink-500 transition-colors duration-200"  value={searchProduct} onChange={(e)=>filterSearch(e)}/>

        </div>
    <div className=' flex flex-wrap gap-3 mt-[20px]'> 
      <select  className='ml-[30px] border-2 rounded-sm' onChange={filterProduct}  >
        <option>Select a category</option>
      {categories.map((item,index)=>(
        
          
            <option key={index} className='text-white border-2 bg-black px-3 rounded-sm py-2' value={item.name} >{item.name}</option>
  
    
      ))}
      </select>
      </div>
    <div className='flex gap-5 flex-wrap px-3 items-center flex-col'>
      <h1 className='text-2xl font-bold border-2 px-10 py-2 rounded-xl bg-pink-500 text-white'>Products</h1>
      <div className='flex flex-wrap px-4 gap-4'>
      {product.map((item,key)=>(
        <Link key={key} className='border-2 rounded-[7px] flex flex-col  px-4 sm:w-[350px] md:w-[353px] pb-5' to={`singleproduct/${item.id}`}>
          <img src={item.thumbnail} alt="" />
          <h1 className='text-black font-bold text-[17px]'>Name: {item.title}</h1>
          <h1 className='text-black font-semibold'>Price : {item.price} $</h1>
          <h1 className='text-black font-semibold'>Rating : {item.rating}/5</h1>
          <div className='border-2 bg-blue-600 text-white w-[130px] py-2 flex justify-center text-center mt-4 rounded-xl cursor-pointer active:bg-blue-900' onClick={()=>Addtocart(item)}>Add to Cart</div>
          
        </Link>

      ))}
      </div>
    </div>
    </div>
  )
}

export default Allproducts
