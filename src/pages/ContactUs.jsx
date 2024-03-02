import React from 'react'
import ProfileCard from '../components/common/ProfileCard'
import {Members} from "../../data/profileDetails"
import HighlightText from '../components/common/HighlightText';
import Pragya from "../assets/Images/Pragya.png"
import Aparna from "../assets/Images/Aparna.jpg"
import Kushagra from "../assets/Images//Kushag.jpg"
import Harshil from "../assets/Images/Harshil.jpg"
import YellowHighlight from '../components/common/YellowHighlight';

const data = Members;
console.log(data);

const ContactUs = () => {

  return (
    <div className='w-11/12 flex flex-col gap-2 justify-center items-center mx-auto bg-black text-[#d3cece] mt-24' >
        {/* Heading */}
        <div className='flex'>
            <h2 className='text-[4rem] '>
                <YellowHighlight text={"KNOW US"}/>  
            </h2>
        </div>

        {/* Sub Heading */}
        <div>
            <p className='text-base '>
                We are team <YellowHighlight text={"DARAI GHOODA"}/> from SRM Institute of Science And Technology
            </p>
        </div>
        {/* Cards */}
        <div className='flex flex-row flex-wrap gap-14 w-[60%] rounded-md mt-14'>

            <ProfileCard
            name={"Pragya Gaur"}
            profile={"Frontend developer"}
            year={"B.Tech 2nd Year"}
            tech={"React.js"}
            image={Pragya}/>

            <ProfileCard
            name={"Aparna Singh"}
            profile={"Designer"}
            year={"B.Tech 1st Year"}
            tech={"Canva"}
            image={Aparna}/>
            
            

            <ProfileCard
            name={"Kushagra Pandey"}
            profile={"Backend Developer"}
            year={"B.Tech 1st Year"}
            tech={"Flask"}
            image={Kushagra}/>
            
            <ProfileCard
            name={"Harshil Srivastav"}
            profile={"Designer"}
            year={"B.Tech 1st Year"}
            tech={"Adobe Illustrator"}
            image={Harshil}/>
            
        </div>

    </div>
  )
}

export default ContactUs