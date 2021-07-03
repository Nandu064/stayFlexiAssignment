import React from 'react';
import {Card ,Button} from "react-bootstrap";

function display({playerList,upadateHandler,deleteEmpHandler}) {
    return(
        playerList.map((item,index)=>{
            return(<div className="row" key={index} style={{margin:'15px',width:'288px',display:'inline-block',height:'auto'}}>
                <Card style={{ width: '19rem',backgroundColor:'lightgray',height:'auto' }} >
                <Card.Body>
                  <Card.Text style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                    <span style={{color:'black'}}>Id: {item.no}  </span>
                    <span style={{color:'black'}}>Name: {item.name}  </span>
                    <span style={{color:'black'}}>Age : {item.age} </span>
                    <span style={{color:'black'}}>Current Club : {item.currentclub} </span>
                    <span style={{color:'black'}}>Position : {item.position} </span>
                    <span style={{color:'black'}}>Debut Year : {item.debutyear} </span>
                    <span style={{color:'black'}}>Previous Club : {item.previousclub} </span>
                    <span style={{color:'black'}}>Goals : {item.goals} </span>
                    <span style={{color:'black'}}>Assists : {item.assists} </span>
                    <span style={{color:'black'}}>Free Kicks Scored : {item.freekickscored} </span>
                  </Card.Text>
                  <Button variant="secondary" onClick={()=>upadateHandler(item,index)} style={{margin:'10px'}}>Edit</Button>
                  <Button variant="danger" onClick={()=>deleteEmpHandler(index)}  >Delete</Button>
                </Card.Body>
              </Card>
            </div>)
         })
    )
    
}

export default display
