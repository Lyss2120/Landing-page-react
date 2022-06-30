import React from 'react';
import Card from "./Card";

function Cards() {
  return (
    <div className='container-sm my-3 p-1'>
        <div className="row">
            <div className="col-md-3 mb-3">
                <Card 
                img= '500x325'
                title='Card Title'
                text='Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Velit, vel in! Voluptatem 
                recusandae id excepturi, reiciendis unde eius 
                aliquam veniam!'/>
            </div>
            <div className="col-md-3 mb-3">
                <Card
                img= '500x325'
                title='Card Title'
                text='Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Velit, vel in! Voluptatem 
                recusandae id excepturi, reiciendis unde eius 
                aliquam veniam!'
                />
            </div>
            <div className="col-md-3 mb-3">
                <Card
                img= '500x325'
                title='Card Title'
                text='Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Velit, vel in! Voluptatem 
                recusandae id excepturi, reiciendis unde eius 
                aliquam veniam!'
                />
            </div>
            <div className="col-md-3 mb-3">
                <Card
                img= '500x325'
                title='Card Title'
                text='Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Velit, vel in! Voluptatem 
                recusandae id excepturi, reiciendis unde eius 
                aliquam veniam!'
                />
            </div>
        </div> 
    </div>
  )
}

export default Cards