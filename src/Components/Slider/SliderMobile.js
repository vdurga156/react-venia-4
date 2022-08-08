import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import '../Slider/Slider.css';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        imgPath:
            "https://i.postimg.cc/wMZhSPtv/Carousel-image-mobile.png"
    },
    {
        imgPath:
            "https://i.postimg.cc/wMZhSPtv/Carousel-image-mobile.png"
    },
    {
        imgPath:
            "https://i.postimg.cc/wMZhSPtv/Carousel-image-mobile.png"
    }
];

// const tutorialSteps = [
//     {
//         imgPath:
//             "https://images.pexels.com/photos/11283175/pexels-photo-11283175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         imgPath:
//             "https://images.pexels.com/photos/972937/pexels-photo-972937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     }
// ];

const styles = (theme) => ({
    root: {
        maxWidth: "100%",
        flexGrow: 1
    },
    img: {
        height: 480,
        display: "block",
        overflow: "hidden",
        width: "100%"
    }
});

class SwipeableTextMobileStepper1 extends React.Component {
    state = {
        activeStep: 0
    };

    handleNext = () => {
        this.setState((prevState) => ({
            activeStep: prevState.activeStep + 1
        }));
    };

    handleBack = () => {
        this.setState((prevState) => ({
            activeStep: prevState.activeStep - 1
        }));
    };

    handleStepChange = (activeStep) => {
        this.setState({ activeStep });
    };

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = tutorialSteps.length;
        return (
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (

                                <div className="heroslider">
                                    <div class="aem-Grid aem-Grid--12">
                                        <div class="aem-GridColumn aem-GridColumn--default--12">
                                            <img
                                                className={classes.img}
                                                src={step.imgPath}
                                                alt={step.label}
                                            />
                                            <div className="heroslider__title">
                                                <h1 className="slidertitle">Shop the new <br />Signature Collection</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                                <button className="button-primary">shop now</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    nextButton={
                        <Button
                            size="small"
                            onClick={this.handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >

                            {theme.direction === "rtl" ? (
                                <GrPrevious />
                            ) : (
                                <GrNext />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={this.handleBack}
                            disabled={activeStep === 0}
                        >
                            {theme.direction === "rtl" ? (
                                <GrNext />
                            ) : (
                                <GrPrevious />
                            )}
                        </Button>
                    }
                />
            </div>
        );
    }
}
SwipeableTextMobileStepper1.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
    SwipeableTextMobileStepper1
);
