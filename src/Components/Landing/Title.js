import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SwipeableTextMobileStepper from '../Slider/Slider';
import SwipeableTextMobileStepper1 from '../Slider/SliderMobile';
import signature from '../Landing/home3.png';
import conquer from '../Landing/home4.png';
import { FiMapPin } from "react-icons/fi";

function Title() {
    return (
        <section className='home'>
            <div className='slider__desktop'>
                <SwipeableTextMobileStepper />
            </div>
            <div className='slider__mobile'>
                <SwipeableTextMobileStepper1 />
            </div>

            <div className='home__categories'>
                <div className='container'>
                    <div class="aem-Grid aem-Grid--12">
                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                            <Link to='/women'>
                                <div className='home__categories-type'>
                                    <img src={"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"} />
                                    <div className='categoryname'>
                                        <h3>Shop Women</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                            <Link to='/men'>
                                <div className='home__categories-type'>
                                    <img src={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"} />
                                    <div className='categoryname'>
                                        <h3>Shop Men</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                            <Link to='/jewellery'>
                                <div className='home__categories-type'>
                                    <img src={"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"} />
                                    <div className='categoryname'>
                                        <h3>Jewellery</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                            <Link to='/electronics'>
                                <div className='home__categories-type'>
                                    <img src={"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"} />
                                    <div className='categoryname'>
                                        <h3>Electronics</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='signature__desktop'>
                <div className='product__signature'>
                    <div className='container'>
                        <div class="aem-Grid aem-Grid--12">
                            <div class="aem-GridColumn aem-GridColumn--default--7">
                                <div className='product__signature-left'>
                                    <h2>
                                        Take off in the new <br /> Signature Legging
                                    </h2>
                                    <h5>Lorem Ipsum Dolor Tempor</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.
                                    </p>
                                    <div className='product__signature-buttons'>
                                        <button className='button-secondary'>SHOP COLLECTION</button> <button className='button-primary primary'>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                            <div class="aem-GridColumn aem-GridColumn--default--5">
                                <div className='product__signature-right'>
                                    <img src={signature} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='signature__mobile'>
                <div className='product__signature'>
                    <div className='container'>
                        <div class="aem-Grid aem-Grid--12">
                            <div class="aem-GridColumn aem-GridColumn--phone--12">
                                <div className='product__signature-right'>
                                    <img src={signature} />
                                </div>
                            </div>
                            <div class="aem-GridColumn aem-GridColumn--phone--12">
                                <div className='product__signature-left'>
                                    <h2>
                                        Take off in the new Signature Legging
                                    </h2>
                                    <h5>Lorem Ipsum Dolor Tempor</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.
                                    </p>
                                    <div className='product__signature-buttons'>
                                        <button className='button-secondary'>SHOP COLLECTION</button> <button className='button-primary primary'>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='conqueradventure__desktop'>
                <div className="conqueradventure">
                    <div className='container'>
                        <div className="conquer">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--8">
                                    <div className="conquer__image">
                                        <img src={conquer} alt="women" />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--4">
                                    <div className="conquer__title">
                                        <h3>Conquer your next adventure</h3>
                                        <p>Lorem Ipsum Dolor Tempor</p>
                                        <button className='shop-btn'>SHOP DEVICES</button>
                                        <div className='conquer__navigate'>
                                                <FiMapPin size={40} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='conqueradventure__mobile'>
                <div className="conqueradventure">
                    <div className='container'>
                        <div className="conquer">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--phone--12">
                                    <div className="conquer__image">
                                        <img src={conquer} alt="women" />
                                        <div className='conquer__navigate1'>
                                                <FiMapPin size={30} />
                                        </div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--phone--12">

                                    <div className="conquer__title">
                                        <h3>Conquer your next adventure</h3>
                                        <p>Lorem Ipsum Dolor Tempor</p>
                                        <button className='shop-btn'>SHOP DEVICES</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Title;