import React,{useState} from 'react'
export default function Textform(props) {
    const [text,setText]=useState("");
       const handleUpClick=()=>{
            console.log("Handle Click" + text);
            const newText=text.toUpperCase();
            setText(newText);
           props.showAlert("Convert to Uppercase!","success");

            
     }
     const handleLoClick=()=>{
 
           const newText=text.toLowerCase();
           setText(newText);
           props.showAlert("Convert to Lowercase!","success");

     }
     const handleClearClick=()=>
     {

         const newText='';
         setText(newText);
         props.showAlert("Clear text!","success");

        }

     const handleOnChange=(event)=>{
        console.log("Handle Change");
        setText(event.target.value);

     }
     const handleCopy=()=>{
        
           navigator.clipboard.writeText(text);
         
          props.showAlert("Copy text to clipboard!","success");

     }
     const removeExtraSpaces=()=>{
        const  newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra spaces!","success");


     }
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3 ">
  <textarea className="form-control mb-3" onChange={handleOnChange} id="mybox" value={text} rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='light'?'black':'white'}} ></textarea>
  <button disabled={text.length===0} className="btn btn-primary mx=1 my-1" onClick={handleUpClick}>Convert To Upper Case</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lower Case</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>





</div>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} character</p>
      <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
