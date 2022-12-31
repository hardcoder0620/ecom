import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Header from '../components/Header';
import { FaCheck, FaList } from "react-icons/fa";
import { FiGrid , FiHeart} from "react-icons/fi";
import { BsFillHeartFill} from "react-icons/bs";

export default function products() {
    const router = useRouter()
    const [curPrice, setCurPrice] = useState(0)
    const [curCat, setCurCat] = useState('')
    const [curView, setCurView] = useState('grid')
    return (
        <>
            <Header />
            <div className="allProductsMain">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="leftSec">
                                <div className="catDiv">
                                    <div className="head">
                                        Categories
                                    </div>
                                    <div className="options">
                                        <div className="option" onClick={() => { setCurCat('Backpacks') }}>
                                            <div className="text">
                                                Backpacks
                                            </div>
                                            <div className="icoBox">
                                                {curCat == 'Backpacks' ? <FaCheck /> : null}
                                            </div>
                                        </div>
                                        <div className="option" onClick={() => { setCurCat('Ladies Handbags') }}>
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
                                    <button className="clrBtn">
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
                                        }}>
                                            <FaList />
                                        </div>
                                        <div className={curView == 'grid' ? "box active" : "box"} onClick={() => {
                                            setCurView('grid')
                                        }}>
                                            <FiGrid />
                                        </div>
                                    </div>
                                    <select name="" id="">
                                        <option value="">sort by: price low to hight</option>
                                        <option value="">sort by: price high to low</option>
                                    </select>
                                </div>
                                <div className="productsDiv">
                                    <div className="row gy-4">
                                        <div className="col-lg-3">
                                            <div className="product">
                                                <div className="imgBox">

                                                    <img src="/images/bag.png" alt="bag image" className="w-100 productImg" />
                                                    <div className="likeDivb">
                                                        <FiHeart /> 
                                                        {/* <BsFillHeartFill/> */}
                                                    </div>
                                                </div>
                                                <div className="proName">
                                                Tommy Hilfiger
                                                </div>
                                                <div className="price">
                                                    Rs. 2599
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-3">
                                            <div className="product">
                                                <div className="imgBox">

                                                    <img src="/images/bag.png" alt="bag image" className="w-100 productImg" />
                                                    <div className="likeDivb">
                                                        <FiHeart /> 
                                                        {/* <BsFillHeartFill/> */}
                                                    </div>
                                                </div>
                                                <div className="proName">
                                                Tommy Hilfiger
                                                </div>
                                                <div className="price">
                                                    Rs. 2599
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="productListView">
                                                <div className="imgBox">

                                                    <img src="/images/bag.png" alt="bag image" className="w-100 productImg" />
                                                    <div className="likeDivb">
                                                        <FiHeart /> 
                                                        {/* <BsFillHeartFill/> */}
                                                    </div>
                                                </div>
                                                <div className="content">

                                                <div className="proName">
                                                Tommy Hilfiger
                                                </div>
                                                <div className="price">
                                                    Rs. 2599
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
