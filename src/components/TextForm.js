import React, {useState} from 'react'
export default function TextForm(props) 
{
    const handleupClick = ()=>{
        // console.log("Uppercase has clicked : "+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloClick = ()=>{
      // console.log("Lowercase has clicked : "+ text);
      let newText = text.toLowerCase();
      setText(newText);
  }

    const handleOnChange = (event)=>{
      // console.log("On change");
      setText(event.target.value);
  }

    const handleclClick = ()=>{
      let newText='';
      setText(newText);
    }

    const handlecopy = () =>{
      let newText = document.getElementById('mybox');
      newText.select();
      navigator.clipboard.writeText(newText.value);

    }

  const [text , setText] =useState("");
     // text="hii"; // can't change text like this
     // setText=(new text); //correct way 
  return (
    <>
    <div className='container' style={{color: props.mode=== 'dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
         <div className="mb-3" value={text}>
            {/* <label for="mybox" class="form-label"></label> */}
            <textarea className="form-control"  onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color:  props.mode=== 'dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
         </div>
          {/* <btn-primary>Click to convert Uppercase</btn-primary> */}
          <button className='btn btn-primary mx-2' onClick={handleupClick}>Convert Uppercase</button>
          <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert Lowercasse</button>
          <button className='btn btn-primary mx-2' onClick={handleclClick}>Clear text</button>
          <button className='btn btn-primary mx-2' onClick={handlecopy}>Copy text</button>
    </div>

    <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
      <h2>Your text summery</h2>
      <b> {text.split(" ").length} Words and {text.length} Characters</b> 
      <p>{0.008 * text.split(" ").length} Minutes to read </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter something in textbox to prreview it here'}</p>
    </div>
    </>
  )
}
