import React,{useState} from 'react'
export default function Textform(props) {
    const [text,setText]=useState("Enter text here");
       const handleUpClick=()=>{
            console.log("Handle Click" + text);
            const newText=text.toUpperCase();
            setText(newText);
     }
     const handleLoClick=()=>{
 
           const newText=text.toLowerCase();
           setText(newText);
     }
     const handleClearClick=()=>
     {

         const newText='';
         setText(newText);
        }
     const handleOnChange=(event)=>{
        console.log("Handle Change");
        setText(event.target.value);

     }
     const handleCopy=()=>{
           var text=document.getElementById('mybox');
          // let newText
          text.select();
           navigator.clipboard.writeText(text.value);
          // setText(navigator.clipboard.writeText(newText));
     }
     const removeExtraSpaces=()=>{
        const  newText =text.split(/[ ]+/);
        setText(newText.join(" "));

     }
  return (
    <>
    <div className='container'>
      <h1>{props.heading} </h1>
      <div className="mb-3 ">
  <textarea className="form-control mb-3" onChange={handleOnChange} id="mybox" value={text} rows="8"></textarea>
  <button className="btn btn-primary mx=1" onClick={handleUpClick}>Convert To Upper Case</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lower Case</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
  <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>





</div>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} word and {text.length} character</p>
      <p> {0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
