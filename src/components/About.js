import TailwindCSS from "../assets/tailwind.css";
import React from 'react';
import AboutImage from "../assets/images/new-about-image.jpg";

function About() {
return (

<div className="about-container">
    <div className="about-mission text-left pt-32 mx-48 px-56">
        <ul className="about-mission-ul">
            <li className="px-2"><h3 className="mission-first-h uppercase text-4xl font-semibold tracking-widest">Our Mission</h3></li>
            <li className="px-2"><p className="mission-second-p pt-10 text-2xl">Real turkish coffee and a warm, friendly environment is a nostalgic and basic foundation for us Turkish People.</p></li>
            <li className="px-2"><p className="mission-third-p pt-5 text-lg tracking-wider font-medium">As a coffee shop, HUG A MUG seeks to represent this nostalgia and foundation with high-quality ingredients, homemade items, and an influence from both our cultural backgrounds. Through elevated food, beverage, service, and design we seek to inspire and uplift the local community.<br/> We hope you enjoy our cafe!</p></li>
        </ul>
    </div>

    <div className="about-image-container h-screen mt-40">
        <img src={AboutImage} className="h-full w-full" />
    </div>

    <div className="about-story">   
        <ul className="about-story-ul">
            <li><p className="about-first-p">Our Story</p></li>
            <li><p className="about-second-p">HUG A MUG's story starts in the late 90s when Real Turkish Coffee was first introduced to the TR shopping environment.</p></li>
            <li><p className="about-third-p">Our co-founder, Philip Wang immediately felt that boba shops were a unique part of Asian American culture which lead him to work at a cafe through college. Meanwhile Eric Wang, our other co-founder, was developing his love for cooking at a young age, but had to give it up when his parents pushed him for a more secure career
            In 2016, longtime friends Phil and Eric decided that they wanted to live out their culinary and hospitality dreams by opening a cafe of their own.
            After a stressful two year period of developing their product and concept, and struggling to find a location, they finally found their home in the heart of San Gabriel. Now it was time to test their ideas; drinks that used only fresh, real ingredients, and food items that celebrated their bi-cultural upbringing. 
            Eric and Phil knew these concepts would be new and challenging to the local community, but thankfully their intentions to create a vibrant, delicious, and impactful space were welcomed. 
            Now, Phil and Eric seek to continue to provide a unique and high quality food and beverage menu, while also pushing creativity within their cafe and beyond.</p></li>
        </ul>
    </div>
</div>
);  
}


export default About; 