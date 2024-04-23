import React from 'react';
// import map from '../../../assets/Image_Icon/Icon/map-pin-2-fill.png'
// import facebook from '../../../assets/Image_Icon/Icon/Vector.png'
// import instagram from '../../../assets/Image_Icon/Icon/Vector-1.png'
// import linkedin from '../../../assets/Image_Icon/Icon/Vector-2.png'
// import youtube from '../../../assets/Image_Icon/Icon/Vector-3.png'
import { FaFacebook, FaLinkedinIn, FaInstagram,FaYoutube } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
    return (
        <div className='bg-[#0DA14B] mt-10'>
           <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-6 gap-4 py-16">
                <div className="md:col-start-1 md:col-end-3">
                    <div className="flex gap-2 md:p-6">
                    {/* <img src={map} className="w-6 h-6 text-center mt-3" alt="" /> */}
                    <p className='text-white font-[Poppins] font-normal leading-6 md:text-base tracking-wider'>H#000 (0th Floor), Road #00, <br /> New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                    </div>
                    
                </div>
                <div>
                    <h3 className='text-white font-[Poppins] font-semibold text-xl leading-8 tracking-wider'>কোম্পানি</h3>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white mt-4'>ক্যারিয়ার</h4>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>প্রাইভেসি পলিসি</h4>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>রিফান্ড পলিসি</h4>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>ব্যবহারকারীর শর্তাবলি</h4>
                    
                </div>
                <div>
                    <h3 className='text-white font-[Poppins] font-semibold text-xl leading-8 tracking-wider'>অন্যান্য</h3>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white mt-4'>ব্লগ</h4>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>বুক স্টোর</h4>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>নোটস এবং গাইডস</h4>
                     <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>চাকরি প্রস্তুতি</h4>
                </div>
                <div className='md:col-end-7 md:col-span-2 space-y-4'>
                    <h3 className='text-white font-[Poppins] font-semibold text-xl leading-8 tracking-wider'>আমাদের যোগাযোগ মাধ্যম</h3>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white mt-4'>ইমেইল: support@gmail.com</h4>
                    <div className='flex gap-6 '>
                   <FaFacebook  className='w-8 h-8' />
                   <FaLinkedinIn  className='w-8 h-8' />
                   <FaInstagram className='w-8 h-8' />
                   <FaYoutube className='w-8 h-8' />
                    </div>
              </div>
            </div>
           </div> 
        </div>
    );
};

export default Footer;