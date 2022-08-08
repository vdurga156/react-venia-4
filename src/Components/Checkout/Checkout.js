import React, { useState } from 'react'
// import CheckoutAccordion from './CheckoutAccordion';
import '../Checkout/Checkout.css';
import { useForm } from "react-hook-form";
import VerticalLinearStepper from './CheckoutStepper';
import { Link } from "react-router-dom";

function Checkout(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const [qty, setQty] = useState(1);

    function onChange(e) {
        const v = e.target.value;
        if (v <= 0) setQty(0);
        else if (v >= 10) setQty(6);
        else setQty(v);
    }
    function decreaseQty() {
        if (qty <= 1) {
            setQty(1);
        } else {
            setQty(qty - 1);
        }
    }

    function increaseQty() {
        if (qty >= 10) {
            setQty(10);
        } else {
            setQty(qty + 1);
        }
    }
    const totalPrice = qty * itemsPrice + taxPrice + shippingPrice;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        reset();
    };


    return (
        <>
            <div className='checkout'>
                <div className='container'>
                    <center><h1>Checkout</h1></center>
                    <div class="aem-Grid aem-Grid--12">
                        <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                            <div className='checkout__left'>
                                <div className='checkout__left-guest'>
                                    <h3>Guest Checkout</h3>
                                    <h4>Contact information</h4>
                                    <p>We’ll use these details to keep you informed on your delivery.</p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="aem-Grid aem-Grid--12">
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className="form-group">
                                                    <label className="col-form-label">Email</label>
                                                    <input
                                                        type="text"
                                                        placeholder='abc@gmail.com'
                                                        className={`form-control ${errors.email && "invalid"}`}
                                                        {...register("email", {
                                                            required: "There is an error that relates to this field",
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                message: "Invalid Email address",
                                                            }
                                                        })}
                                                        onKeyUp={() => {
                                                            trigger("email");
                                                        }}
                                                    />
                                                    {errors.email && (
                                                        <small className="text-danger">{errors.email.message}</small>
                                                    )}
                                                </div>

                                            </div>
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className="form-group">
                                                    <label className="col-form-label">Phone Number</label>
                                                    <input
                                                        className={`form-control ${errors.phone && "invalid"}`}
                                                        placeholder='2222222222'
                                                        {...register("phone", {
                                                            required: "There is an error that relates to this field",
                                                            maxLength: {
                                                                value: 10,
                                                                message: 'error message' // JS only: <p>error message</p> TS only support string
                                                            }
                                                        })}
                                                        onKeyUp={() => {
                                                            trigger("phone");
                                                        }}
                                                    />
                                                    {errors.email && (
                                                        <small className="text-danger">{errors.phone.message}</small>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <div className='checkout__left-stepper'>
                                    <VerticalLinearStepper />
                                </div> */}
                                <div className='checkout__left-shipinfo'>
                                    <div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <h4>1. Shipping Information</h4>
                                            <div class="aem-Grid aem-Grid--12">
                                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                    <div className="form-group">
                                                        <label className="col-form-label">Country</label>
                                                        <select {...register("country")} className={`form-control`}>
                                                            <option value="country">United States</option>
                                                            <option value="country">United Kingdom</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                    <div className="form-group blank-space">
                                                        <label className="col-form-label">First name</label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${errors.name && "invalid"}`}
                                                            {...register("fname", { required: "There is an error that relates to this field" })}
                                                            onKeyUp={() => {
                                                                trigger("fname");
                                                            }}
                                                        />
                                                        {errors.fname && (
                                                            <small className="text-danger">{errors.fname.message}</small>
                                                        )}
                                                    </div>
                                                </div>
                                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                    <div className="form-group">
                                                        <label className="col-form-label">First name</label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${errors.name && "invalid"}`}
                                                            {...register("fname", { required: "There is an error that relates to this field" })}
                                                            onKeyUp={() => {
                                                                trigger("fname");
                                                            }}
                                                        />
                                                        {errors.fname && (
                                                            <small className="text-danger">{errors.fname.message}</small>
                                                        )}
                                                    </div>
                                                </div>
                                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                    <div className="form-group">
                                                        <label className="col-form-label">Last name</label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${errors.lname && "invalid"}`}
                                                            {...register("lname", {
                                                                required: "There is an error that relates to this field"
                                                            })}
                                                            onKeyUp={() => {
                                                                trigger("lname");
                                                            }}
                                                        />
                                                        {errors.lname && (
                                                            <small className="text-danger">{errors.lname.message}</small>
                                                        )}
                                                    </div>
                                                </div>
                                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                    <div className="form-group">
                                                        <label className="col-form-label">Street Address</label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${errors.address1 && "invalid"}`}
                                                            {...register("address1", { required: "There is an error that relates to this field" })}
                                                            onKeyUp={() => {
                                                                trigger("adress1");
                                                            }}
                                                        />
                                                        {errors.fname && (
                                                            <small className="text-danger">{errors.address1.message}</small>
                                                        )}
                                                    </div>
                                                </div>
                                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                    <div className="form-group">
                                                        <label className="col-form-label address2-label">Street Address 2 <span>Optional</span></label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${errors.address2 && "invalid"}`}
                                                            {...register("address2", {
                                                                required: "There is an error that relates to this field"
                                                            })}
                                                            onKeyUp={() => {
                                                                trigger("address2");
                                                            }}
                                                        />
                                                        {errors.lname && (
                                                            <small className="text-danger">{errors.address2.message}</small>
                                                        )}
                                                    </div>
                                                </div>
                                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                    <div className="form-group">
                                                        <label className="col-form-label">City</label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${errors.city && "invalid"}`}
                                                            {...register("city", { required: "There is an error that relates to this field" })}
                                                            onKeyUp={() => {
                                                                trigger("city");
                                                            }}
                                                        />
                                                        {errors.fname && (
                                                            <small className="text-danger">{errors.city.message}</small>
                                                        )}
                                                    </div>
                                                </div>
                                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                    <div className='state-align'>
                                                        <div class="aem-Grid aem-Grid--12">
                                                            <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                                                <div className="form-group">
                                                                    <label className="col-form-label">State</label>
                                                                    <select {...register("country")} className={`form-control`}>
                                                                        <option value="country">California</option>
                                                                        <option value="country">Texas</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                                <div className="form-group">
                                                                    <label className="col-form-label">ZIP</label>
                                                                    <input
                                                                        type="text"
                                                                        className={`form-control ${errors.lname && "invalid"}`}
                                                                        {...register("lname", {
                                                                            required: "There is an error that relates to this field"
                                                                        })}
                                                                        onKeyUp={() => {
                                                                            trigger("lname");
                                                                        }}
                                                                    />
                                                                    {errors.lname && (
                                                                        <small className="text-danger">{errors.lname.message}</small>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='checkout-buttons'>
                                                    <Link className='button-secondary desktop-btn' to="/shipmethod">CONTINUE TO SHIPPING METHOD</Link>
                                                    <Link className='button-secondary mobile-btn' to="/shipmethod">CONTINUE</Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className='checkout__left-steps'>
                                        <h4>2. Shipping Method</h4>
                                        <h4>3. Payment Information</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                            <div className='checkout__right'>
                                <div className='checkout__right-signin'>
                                    <h5>Sign in for Express Checkout</h5><button className='button-secondary'>SIGN IN</button>
                                </div>
                                <div className='checkout__right-summary'>
                                    <h4>Price Summary</h4>
                                    <div>
                                        <p>Price</p>
                                        <p> ${qty * itemsPrice.toFixed(2)}</p>

                                    </div>
                                    <div>
                                        <p>Coupon</p>
                                        <p>-$0</p>
                                    </div>
                                    <div>
                                        <p>Giftcard</p>
                                        <p>-$0</p>
                                    </div>
                                    <div>
                                        <p>Estimated tax</p>
                                        <p>${taxPrice.toFixed(2)}</p>

                                    </div>
                                    <div>
                                        <p>Estimated shipping</p>
                                        <p>${shippingPrice.toFixed(2)}</p>

                                    </div>
                                    <div className='est-total'>
                                        <b><p>Estimated Total</p></b>
                                        <b> <p>${totalPrice.toFixed(2)}</p></b>
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

export default Checkout;