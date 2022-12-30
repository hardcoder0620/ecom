import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Header from '../components/Header';
import { FaCheck } from "react-icons/fa";

export default function products() {
    const router = useRouter()
    const [curPrice,setCurPrice]=useState(0)
    const [curCat,setCurCat]=useState('')
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
                                        <div className="option" onClick={()=>{setCurCat('Backpacks')}}>
                                            <div className="text">
                                            Backpacks
                                            </div>
                                            <div className="icoBox">
                                                {curCat == 'Backpacks' ?<FaCheck/>:null}
                                            </div>
                                        </div>
                                        <div className="option" onClick={()=>{setCurCat('Ladies Handbags')}}>
                                            <div className="text">
                                            Ladies Handbags
                                            </div>
                                            <div className="icoBox">
                                            {curCat == 'Ladies Handbags' ?<FaCheck/>:null}
                                            </div>
                                        </div>
                                        <div className="option" onClick={()=>{setCurCat('Luggage')}}>
                                            <div className="text">
                                            Luggage
                                            </div>
                                            <div className="icoBox">
                                            {curCat == 'Luggage' ?<FaCheck/>:null}
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
                                        <option value="4" onClick={()=>{console.log('iball')}}>iball</option>
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
                                    <input type="range" max="5000" min="1000" onChange={(e)=>{setCurPrice(e.target.value)}} />
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
                                right
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
