import vembadi from '../assets/vembadi.png';
import hackelite from '../assets/hackelite.jpg';
import spiritx from '../assets/spiritx.jpeg';


const Achievements_data = [
    {
        a_name: "G.C.E A/L EXAMINATION Result",
        a_desc: "Successfully completed the G.C.E Advanced Level Examination with outstanding results at  J/Vembadi Girls' High School.",
        img_src: vembadi,
        details: [
            { Category: "Stream", Value: "Physical Science Stream" },
            { Category: "Z-Score", Value: "2.5340" },
            { Category: "Island Rank", Value: "124" },
            { Category: "District Rank", Value: "9" }  
        ],
    },
    {
        a_name: "Hackelite1.0 1st Runnerup",
        a_desc: "Secured 1st runner-up position in Hackelite 1.0, an intense competition featuring AI/ML problem-solving, programming challenges, and an idea-pitching round.",
        img_src: hackelite,
        details: [
            { Category: "Rank", Value: "1st Runner-up" } 
        ],
    },

    {
        a_name: "SpiritX - Most Popular Idea Award",
        a_desc: "Won the Most Popular Award at SpiritX, a national-level innovation challenge organized by MoraSpirit, for our impactful and creative project that captivated both the panel and the public.",
        img_src: spiritx,
        details: [
            { Category: "Award", Value: "Most Popular Idea" },
            { Category: "Organized By", Value: "MoraSpirit" },
            { Category: "Event", Value: "SpiritX" }
        ],
    },
    
    
    
];

export default Achievements_data;
