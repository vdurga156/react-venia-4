import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";

export default function VerticalLinearStepper() {
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

    const steps = [
        {
            label: <h5>1. Shipping Information</h5>,
            shipinfo: <>
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
            </>,
        },
        {
            label: <h5>2. Shipping Methods</h5>,
            shipmethod: <>
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
            </>,
        },
        {
            label: <h5>3. Payment Methods</h5>,
            paymentmethods: <>
                <div className='paymentmothods'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-check">
                            <label htmlFor="creditcard" className='xyz'>
                                <input
                                    {...register('creditcard', { required: true })}
                                    type="radio"
                                    name="creditcard"
                                    className="form-check-input card-radio"
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
            </>,
        },
    ];



    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption"></Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>
                                {step.shipinfo}
                                {step.shipmethod}
                                {step.paymentmethods}
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                        className="button-secondary"
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
