import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useForm } from "react-hook-form";

export default function CheckoutAccordion() {

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
        <div>
            <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><h5>1. Shipping Information</h5></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="aem-Grid aem-Grid--12">
                                    <div class="aem-GridColumn aem-GridColumn--default--6">
                                        <div className="form-group">
                                            <label className="col-form-label">Country</label>
                                            <select {...register("country")} className={`form-control`}>
                                                <option value="country">United States</option>
                                                <option value="country">United Kingdom</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="aem-GridColumn aem-GridColumn--default--6">
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
                                    <div class="aem-GridColumn aem-GridColumn--default--6">
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
                                    <div class="aem-GridColumn aem-GridColumn--default--6">
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
                                    <div class="aem-GridColumn aem-GridColumn--default--6">
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
                                    <div class="aem-GridColumn aem-GridColumn--default--6">
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
                                    <div class="aem-GridColumn aem-GridColumn--default--6">
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
                                    <div class="aem-GridColumn aem-GridColumn--default--6">
                                        <div className='state-align'>
                                            <div class="aem-Grid aem-Grid--12">
                                                <div class="aem-GridColumn aem-GridColumn--default--8">
                                                    <div className="form-group">
                                                        <label className="col-form-label">State</label>
                                                        <select {...register("country")} className={`form-control`}>
                                                            <option value="country">California</option>
                                                            <option value="country">Texas</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="aem-GridColumn aem-GridColumn--default--4">
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
                                        <button className='button-secondary'>CONTINUE TO SHIPPING METHOD</button>
                                    </div>
                                </div>
                            </form>
                        </>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography><h5>2. Shipping Method</h5></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className='shipmethods'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-check">
                                    <label htmlFor="ship">
                                        <input
                                            {...register('standard', { required: true })}
                                            type="radio"
                                            name="ship"
                                            className="form-check-input"
                                            checked
                                        />{' '}
                                        Standard Shipping (4-8 business days via USPS) FREE
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label htmlFor="ship">
                                        <input
                                            {...register('express', { required: true })}
                                            type="radio"
                                            name="ship"
                                            className="form-check-input"
                                        />{' '}
                                        Express Delivery (2-5 business days via USPS) $17.95
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label htmlFor="fries">
                                        <input
                                            {...register('nextday', { required: true })}
                                            type="radio"
                                            name="ship"
                                            className="form-check-input"
                                        />
                                        Next Day Delivery (Next business days via FedEx) $53.61
                                    </label>
                                </div>
                                <div className="text-danger mt-3">
                                    {errors.food?.type === 'required' &&
                                        'Please select Shipping Method.'}
                                </div>
                                <div className='checkout-buttons'>
                                    <button type="submit" className="button-secondary">
                                        CONTINUE TO PAYMENT
                                    </button>
                                </div>
                            </form>
                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography><h5>3. Payment Information</h5></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className='paymentmothods'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-check">
                                    <label htmlFor="creditcard">
                                        <input
                                            {...register('creditcard', { required: true })}
                                            type="radio"
                                            name="creditcard"
                                            className="form-check-input card-radio"
                                            checked
                                        />{' '}
                                        Credit Card
                                    </label>
                                </div>
                                <div class="aem-Grid aem-Grid--12">
                                    <div class="aem-GridColumn aem-GridColumn--default--6">
                                        <div className="form-group">
                                            <label className="col-form-label">Name on Card</label>
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
                                        <div className='form-group'>
                                            <label className="col-form-label">Credit Card Number</label>
                                            <input
                                                className={`form-control ${errors.phone && "invalid"}`}

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
                                        <div className='state-align'>
                                            <div class="aem-Grid aem-Grid--12">

                                                <div class="aem-GridColumn aem-GridColumn--default--8">
                                                    <div className="form-group">
                                                        <label className="col-form-label">Expiration Date</label>
                                                        <input
                                                            className={`form-control ${errors.phone && "invalid"}`}

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
                                                <div class="aem-GridColumn aem-GridColumn--default--4">
                                                    <div className="form-group">
                                                        <label className="col-form-label">CVV</label>
                                                        <input
                                                            className={`form-control ${errors.phone && "invalid"}`}

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
                                        </div>
                                    </div>
                                    <div class="aem-GridColumn aem-GridColumn--default--6"></div>
                                </div>
                            </form>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
