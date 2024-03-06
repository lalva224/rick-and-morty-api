import pics from '../pics/rick and morty about.png'
export default function Aboutpage(){
    return(
        <>
         <p className="absolute  text-gray-50 text-xl left-20 right-20 leading-8 border-2 ">The series follows Rick Sanchez, an alcoholic, nihilistic super-scientist, and his easily distressed grandson, Morty Smith to parallel dimensions and exotic planets with extraterrestrials. These adventures commonly cause trouble for Morty's family—Jerry, Beth, and Summer—who are often dragged along as well.</p>
        <img className = 'w-full h-full'src ={pics}/>
       
       
        </>
    )
}