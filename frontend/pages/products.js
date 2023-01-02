import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Header from '../components/Header';
import { FaCheck, FaList } from "react-icons/fa";
import { FiGrid, FiHeart } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";

import { motion, spring } from 'framer-motion';

export default function products() {


    const router = useRouter()
    const [curPrice, setCurPrice] = useState(0)
    const [curCat, setCurCat] = useState('')
    const [curView, setCurView] = useState('grid')
    const [productsState, setProductstState] = useState([])
    const [anime,setAnime]=useState(true)


    const variants = {
        rotate: { x: [ -100, 0], opacity:[0,1] , transition: {type:"spring" } },
        stop: { x: [ -100, 0], opacity:[0,1] ,transition: {type:"spring"} }

      };

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        getAllProducts(signal)

        return () => {
            controller.abort();
        }
    }, [])

    const getAllProducts = async (signal) => {
        try {
           

            if(router.query.cat){
                const res = await fetch(`http://localhost:5000/api/products?cat=${router.query.cat}`, {
                signal: signal
            })
            const data = await res.json()
            console.log('data>>>>cat', data)
            setProductstState(data.data)
            }else{
                const res = await fetch('http://localhost:5000/api/products', {
                    signal: signal
                })
                const data = await res.json()
                console.log('data>>>>', data)
                setProductstState(data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const filterByCat = async (cat)=>{
        setAnime((state)=>{!state})
        console.log(cat,"category")

        const res = await fetch('http://localhost:5000/api/products')
        const data = await res.json()
        console.log('data>>>>', data)

        const filteredProducts =  data.data.filter((product)=>{
            return product.productCat == cat
        })
        console.log(filteredProducts,'filteredProducts')
       
        setProductstState(filteredProducts)


    }

    const clearFilter = async()=>{
        const res = await fetch('http://localhost:5000/api/products')
        const data = await res.json()
        setProductstState(data.data)
        setCurCat('')
        setAnime((state)=>{!state})

    }

    const sortByPrice = (val)=>{
        console.log(val)
    }


    return (
        <div style={{ overflow: 'hidden' }}>

            <motion.div
                initial={{ opacity: 0, translateX: '-100%' }}
                animate={{ opacity: 1, translateX: '0%' }}
                exit={{ opacity: 0, translateX: '-100%' }}
                transition={{ type: 'spring', stiffness: 60 }}
            >
                <Header />
                <div className="allProductsMain">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="leftSec">
                                    <div className="catDiv ">
                                        <div className="head" >
                                            Categories
                                        </div>
                                        <div className="options">
                                            <div className="option" onClick={() => { 
                                                setCurCat('Backpacks') 
                                                filterByCat('bagpacks')
                                                }}>
                                                <div className="text " >
                                                    Backpacks
                                                </div>
                                                <div className="icoBox">
                                                    {curCat == 'Backpacks' ? <FaCheck /> : null}
                                                </div>
                                            </div>
                                            <div className="option" onClick={() => { 
                                                setCurCat('Ladies Handbags')
                                                filterByCat('other')

                                         }}>
                                                <div className="text">
                                                    Ladies Handbags
                                                </div>
                                                <div className="icoBox">
                                                    {curCat == 'Ladies Handbags' ? <FaCheck /> : null}
                                                </div>
                                            </div>
                                            <div className="option" onClick={() => { setCurCat('Luggage') }}>
                                                <div className="text">
                                                    Luggage
                                                </div>
                                                <div className="icoBox">
                                                    {curCat == 'Luggage' ? <FaCheck /> : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="companyDiv">
                                        <div className="head">Company</div>
                                        <select name="" id="">
                                            <option value="">select company</option>
                                            <option value="1">iphone</option>
                                            <option value="2">nokia</option>
                                            <option value="3">samsung</option>
                                            <option value="4" onClick={() => { console.log('iball') }}>iball</option>
                                            <option value="5">vivo</option>
                                        </select>
                                    </div>
                                    <div className="priceDiv">
                                        <div className="head">
                                            Price
                                        </div>
                                        <div className="value">
                                            Rs {curPrice}
                                        </div>
                                        <input type="range" max="5000" min="1000" onChange={(e) => { setCurPrice(e.target.value) }} />
                                    </div>
                                    <div className="clearDiv">
                                        <button className="clrBtn" onClick={()=>{clearFilter()}}>
                                            Clear Filter
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="rightSec">
                                    <div className="vievDiv">
                                        <div className="viewOpts">
                                            <div className={curView == 'list' ? "box active" : "box"} onClick={() => {
                                                setCurView('list')
                                                setAnime((state)=>!state)
                                            }}>
                                                <FaList />
                                            </div>
                                            <div className={curView == 'grid' ? "box active" : "box"} onClick={() => {
                                                setCurView('grid')
                                                setAnime((state)=>!state)
                                            }}>
                                                <FiGrid />
                                            </div>
                                        </div>
                                        <select name="sortByPrice" id="" onClick={(e)=>{sortByPrice(e.target.value)}}>
                                            <option value="lowToHigh">sort by: price low to hight</option>
                                            <option value="highToLow">sort by: price high to low</option>
                                        </select>
                                    </div>
                                    <div className="productsDiv"
                                   
                                    >
                                        <div className="row gy-4">
                                            {productsState.map((product, index) => {
                                                {
                                                    if (curView == "grid") {
                                                        return (
                                                            <div className="col-lg-3" key={index}
                                                       
                                                             >
                                                                <motion.div className="product"
                                                                 variants={variants}
                                                                 animate={anime?'rotate':'stop'}
                                                                >
                                                                    <div className="imgBox">
                                                                        <img src={`http://localhost:5000${product.productImgs[0]}`} alt="bag image" className="w-100 productImg" />
                                                                        <div className="likeDivb">
                                                                            <FiHeart />
                                                                            {/* <BsFillHeartFill/> */}
                                                                        </div>
                                                                    </div>
                                                                    <div className="proName">
                                                                        {product.productName}
                                                                    </div>
                                                                    <div className="price">
                                                                        Rs. {product.productPrice}
                                                                    </div>
                                                                </motion.div>
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div className="col-12" key={index}>
                                                                <motion.div className="productListView"
                                                                 variants={variants}
                                                                 animate={anime?'rotate':'stop'}
                                                             
                                                                >

                                                                    <div className="imgBox">
                                                                    <img src={`http://localhost:5000${product.productImgs[0]}`} alt="bag image" className="productImg" />
                                                                        <div className="likeDivb">
                                                                            <FiHeart />
                                                                            {/* <BsFillHeartFill/> */}
                                                                        </div>
                                                                    </div>
                                                                    <div className="content">

                                                                        <div className="proName">
                                                                        {product.productName}
                                                                        </div>
                                                                        <div className="price">
                                                                        Rs. {product.productPrice}
                                                                        </div>
                                                                    </div>
                                                                </motion.div>
                                                            </div>
                                                        )
                                                    }
                                                }
                                            })}
                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

    )
}
