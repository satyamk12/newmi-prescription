import React from 'react';
import "./NewmiPrescription.css";

const NewmiPrescription = () => {
  return (
    <>
    <div className="container-fluid">

        {/* Header Section */}

        <div className="header">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 newmi-haeder-padding">
                    <div className="newmi-section">
                    <h1 className='newmi-h1'>Femheal Women Care</h1>
                    </div>
                    <hr className='newmi-hr-one' />
                </div>
            </div>
        </div>


       

       {/* Main Section */}

       <div className="main">
            <div className="row">
                    <div className="col-lg-6">
                        <h2 className='text-start newmi-text newmi-text-color'>DR.PPREETI PAHWA</h2>
                        <h3 className='text-start newmi-text-color'>MBBS,DGO,DNB,FMAS <br /> SENIOR CONSULTANT</h3>
                        <p className='text-start newmi-text-color'>OBSTETRICIAN &#38; GYNAECOLOGIST <br /> LAPAROSCOPIC SURGEON</p>
                        <p className='text-start newmi-text-color'>HMC No. 010346</p>
                    </div>

                    <div className="col-lg-6">
                        <h4 className='newmi-left newmi-text newmi-text-color'>TIMINGS &#8758;</h4>
                        <h5 className='newmi-left-h5-one newmi-text-color'>Monaday &minus; Saturday <br /> 10AM &minus; 2PM</h5>
                        <p className='newmi-left-h5-two newmi-text-color'>Sunday by appointment</p>
                        <p className='newmi-left-p-three newmi-text-color'>femhealwomencare@gmail.com</p>
                        <p className='newmi-left newmi-text-color'>&#43;91880830433</p>
                    </div>
            </div>
       </div>

       <div className="newmi-presciption-area">

       </div>

       {/* Footer Section */}

      <div className="footer">
            <hr className='newmi-hr-two' />

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4>VISITING CONSULTANT : ARTEMIS,CIK BIRLA ,CLOUDNINE,FORTIS,PARAS,W PRATIKSHA HOSPITALS</h4>

                        <h5>Formerly At Artemis,Sitaram Bhatia And Moolchand Hospitals</h5>
                </div>
            </div>

             <hr className='newmi-hr-two' />

            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <img src="https://d2pyicwmjx3wii.cloudfront.net/s/6123687a0e3882eabaee1e6e/63294ddb96a44f788bd7feae/webp/480400.png" className='newmi-image-one' alt="newmi-image"  />
                    <p>India's Largest Health &#38; <br /> Wellness Platform for Women</p>
                </div>
                
                <div className="col-lg-1">
                    <div className="v1"></div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                    <p><strong>Our Services</strong></p>
                    <p className='text-center'>Yoga &#38; Meditaion &#8739; Diet Management &#8739; Mental Wellness &#8739; Sexual <br /> Wellness &#8739; Garbhshanskar For Pregnancy &#8739; Childbirth Classes &#8739; Location Councelling &#8739; Pre &#38; Postnatal Messages</p>
                </div>

                <div className="col-lg-1">
                    <div className="v2"></div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12">
                    <img src="Images/Google_Apple_image.jpg" className='newmi-image-two' alt="GooglePlay and ApplePlay Image" />
                </div>
            </div>

       </div>

    </div>
    </> 
  )
}

export default NewmiPrescription;