import horse from './assets/horse.jpeg'
import draw2 from './assets/draw2.jpg'
import draw1 from './assets/draw1.jpg'
import color_portrait from './assets/color_portrait.jpeg'
import ratan_tata from './assets/ratan_tata.jpeg'
import './App.css'
import { useState } from "react";


function App() {
const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>

      <h1>⟡ WELCOME TO THE ART GALLERY ⟡</h1>
      <h3> EXPLORE THE LATEST ART COLLECTION 👀</h3>
      <h3>🎀NIKITA'S COLLECTION🎀</h3>
      <hr/>

     <h4> ❤︎ PENCIL SKETCHES ✍ </h4>
      
      
      <div className='image-container'>
      <div className='clickable-image'>
      <img src={horse} height={400} width={300} 
                onClick={()=>
                setSelectedImage({title:"Horse Sketch",
                description:"A beutiful horse sketch which took around 5+ hours to complete",price:350})}/>
      </div>
      <div className='clickable-image'>
      <img src={draw2} height={400} width={300}
               onClick={()=>setSelectedImage({title:"Pencil sketch",description:"A beutiful girl whose sketching time is around 4+ hours",price:300})}/>
      </div>
      </div>
    <hr/>
    <hr/>
      {selectedImage && (
        <div className="image-details">
          <h2>{selectedImage.title}</h2>
          <p>{selectedImage.description}</p>
          <p>Price: {selectedImage.price}</p>
        </div>
      )}
      <hr/>
      <hr/>
      <h4> ❤︎ PORTRAITS ✍ </h4>
     
      <div className='image-container'>
      <div className='clickable-image'>
      <img src={draw1} height={400} width={400}
                onClick={()=>
                setSelectedImage({title:"Pencil sketch",description:"Handmade portrait perfect for gifts",price:400})
                }/>
      </div>
      <div className='clickable-image'>
      <img src={color_portrait} height={400} width={300}
                onClick={()=>setSelectedImage({title:"Colour portrait",description:"Handmade color portrait perfect for gifts",
                price:500
                })}/>
      </div>
      <div className='clickable-image'>
      <img src={ratan_tata} height={400} width={300}
                onClick={()=>setSelectedImage({title:"Ratan Tata Pencil Sketch",description:"A perfect sketch for motivation, can keep it on your study table",
                price:300
                })}></img>
      </div>
      </div>
      <hr/> 
      
    </>
  )
}

export default App


