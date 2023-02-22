"use client"
import React, { useState, useRef } from 'react';
import Head from 'next/head';

export default function Editor() {
  const textInputRef = useRef(null);





  
  let handleButtonClick = (tag) => {
    const textInput = textInputRef.current;

    const start = textInput.selectionStart;
    const end = textInput.selectionEnd;

    const selectedText = textInput.value.substring(start, end);

    const beforeCursor = textInput.value.substring(0, start);
    const afterCursor = textInput.value.substring(end);

    let newCursorPos = end;
    let newText = "";

    if (tag == "lorem") {
      newText = beforeCursor + (`${tag}`) + selectedText + afterCursor;
      newCursorPos = end + tag.length;
    }
    else if (tag == "") {
      newText = beforeCursor + `${tag}` + selectedText + afterCursor;
      newCursorPos = end + tag.length;
    }

              // for classes *********//
              // for classes *********//
              // for classes *********//
              else if (tag == `Input type = "text"` ||
         tag ==     `img src = "#"` || tag ==  `input type = "text"`
              ) 
              {
                newText = beforeCursor + `<${tag}>` + selectedText + afterCursor;
                newCursorPos = end + tag.length;
              }
              else if (afterCursor.search(`<${tag}>`) > afterCursor.search(`</${tag}>`)
      && beforeCursor.lastIndexOf(`<${tag}>`) > beforeCursor.lastIndexOf(`</${tag}>`)
    ) {
      newText = beforeCursor.substring(0, beforeCursor.length) + `</${tag}>` + selectedText + `<${tag}>` + afterCursor;

      newCursorPos = end + tag.length + 3;


    }

    else if (afterCursor.search(`</${tag}>`, 0) < afterCursor.search(`<${tag}>`, 0) && beforeCursor.lastIndexOf(`<${tag}>`) < beforeCursor.lastIndexOf(`</${tag}>`)) {
      newText = beforeCursor.substring(0, beforeCursor.length) + `<${tag}>` + selectedText + `</${tag}>` + afterCursor;
      newCursorPos = end + tag.length + 2;
    }
    else if (beforeCursor.lastIndexOf(`<${tag}>`) > beforeCursor.lastIndexOf(`</${tag}>`)) {
      newText = beforeCursor.substring(0, beforeCursor.length) + selectedText + `</${tag}>` + afterCursor;
      newCursorPos = end + tag.length + 3;
    }

    
    else if (tag === "lg") {
      newText = beforeCursor + `${tag}` + selectedText + afterCursor;
      newCursorPos = end + tag.length;
    }
    else {
      newText = beforeCursor + `<${tag}>` + selectedText + afterCursor;
      newCursorPos = end + tag.length + 2;
    }
    textInput.value = newText;
    textInput.setSelectionRange(newCursorPos, newCursorPos);
    textInput.focus();
    return handleButtonClick
  };
  
  let classesButton = (classTag) => {
    const textInput = textInputRef.current;
    const start = textInput.selectionStart;
    const end = textInput.selectionEnd;
    const selectedText = textInput.value.substring(start, end);
    const beforeCursor = textInput.value.substring(0, start);
    const afterCursor = textInput.value.substring(end);
    let newCursorPos = end;
    let newText = "";
     if (classTag) {
      newText = beforeCursor + `${classTag}` + selectedText + afterCursor;
      newCursorPos = end + classTag.length;
    }
   
    textInput.value = newText;
    textInput.setSelectionRange(newCursorPos, newCursorPos);
    textInput.focus();
    return classesButton
  };
  const [code, setCode] = useState("")
  const handleKeyUp = () => {
    const code = document.getElementById("code");
    code.innerText = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${textInputRef.current.value}
    
</body>
</html>
     `;

    const text = document.getElementById("demo");
    const codeReact = document.getElementById("Reactcode");
    function react () {
      let a = textInputRef.current.value
      a = a.replaceAll("class=", "className=");
      a = a.replaceAll("<br>", "<br />");
      a = a.replaceAll("<hr>", "<hr />");
      a = a.replaceAll(`<img src = "#">`, `<img src = "#" />`);
      a = a.replaceAll(`<input type = "text">`, `<input type = "text" />`);
      
      return a
    }
    codeReact.innerText  = `
    import React from 'react'

export default function Editor() {
  return (
    <div>
    ${react()}
    </div>
  )
}
  
    `
    // ***************** Styling ********************
    // ***************** Styling ********************
    // ***************** Styling ********************

      setCode(textInputRef.current.value)
  };

  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);

  const handleCopy = () => {
    const text = document.getElementById("Reactcode").innerText;
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  const handleCopyHTML = () => {
    const text = document.getElementById("code").innerText;
    navigator.clipboard.writeText(text);
    setCopied1(true);
  };
  

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      textInputRef.current.value += "<br>";
    }
  };

  return (<>
      <Head>
        <title>Editor</title>
      </Head>
    <div className=' flex-col justify-between bg-gradient-to-tr from-blue-500 to-green-500'>
      <h1 className=' title mt-40
      '>React Converter</h1>
      <div className='flex flex-col w-full'>
  
        <div className=' flex flex-wrap sm:gap-1 gap-3 lg:w-2/4  '>
          <button className="common" onClick={() => handleButtonClick("div")}> 👍 </button>
          <button className="common text-blue-700" onClick={() => handleButtonClick("h1")}>h1</button>
          <button className="common text-green-700" onClick={() => handleButtonClick("h2")}>h2</button>
          <button className="common text-orange-700" onClick={() => handleButtonClick("h3")}>h3</button>
          <button className="common text-yellow-700" onClick={() => handleButtonClick("h4")}>h4</button>
          <button className="common text-blue-300" onClick={() => handleButtonClick("h5")}>h5</button>
          <button className="common text-green-500" onClick={() => handleButtonClick("lorem")}> lorem </button>
          <button className="common text-red-500" onClick={() => handleButtonClick("textarea")}>textarea</button>
          <button className="common text-purple-700" onClick={() => handleButtonClick(`input type = "text"`)}>input</button>
          <button className="common text-lime-700" onClick={() => handleButtonClick(`img src = "#"`)}>img</button>
          <button className="common text-brown-500" onClick={() => handleButtonClick("")}> Result</button>

        
      </div>



      <br />


      {/* tectarea *********** */}
      {/* tectarea *********** */}
      {/* tectarea *********** */}
      <div className='  flex flex-row justify-center'>
        <textarea className='textarea' rows="15" cols="10" ref={textInputRef} onKeyPress={handleKeyPress} onKeyUp={handleKeyUp}></textarea>

        {/*********** classes for css *****************/}
        {/*********** classes for css *****************/}
        {/*********** classes for css *****************/}

        <div className='flex flex-col gap-2 '>
          <button className="common2 text-base text-blue-500" onClick={() => { classesButton(`class=" "`)
             }}>class=</button>
          <button className="common2 text-blue-500" onClick={() => { classesButton(`text-2xl md:text-3xl lg:text-4xl bg-blue-500 text-white rounded-xl`)
             }}>btn</button>
          <button className="common2 text-green-500" onClick={() => classesButton("text-4xl md:text-5xl lg:text-6xl")}>h1</button>
          <button className="common2 text-yellow-600" onClick={() => classesButton("text-3xl md:text-4xl lg:text-5xl")}>h2</button>
          <button className="common2 text-red-500" onClick={() => classesButton("text-sm lg:text-lg md:text-xl")}>p</button>
          <button className="common2 text-green-500" onClick={() => classesButton(" flex flex-row")}>f-row</button>
          <button className="common2 text-red-500" onClick={() => classesButton("flex flex-col")}>f-col</button>
          <button className="common2 text-red-500" onClick={() => classesButton("lg:flex-row md:flex-row flex-col ")}>f-Res</button>

        </div>

        <div className=' display1'>
          <h3 className=' display3 '>Display</h3>

          <div className=' display  bg-red-600' dangerouslySetInnerHTML={{__html: code}}></div>

          
        </div>
        </div>

      </div>
      <br />


      <div className=" relative sm:flex-row flex">

        {/* *************** HtML ***************/}
        {/* *************** HtML ***************/}
        {/* *************** HtML ***************/}

        <div className='code'>
        <button className=' bg-blue-600 text-xl shadow-2xl shadow-black drop-shadow-2xl focus:bg-green-600 text-white rounded-xl ' onClick={handleCopyHTML}>
        {copied1 ? "Copied!" : "Copy to Clipboard"}
      </button>
       
          <h3 className=' codeh3'>HTML</h3>
          <p className=' codep  bg-green-600' id="code"> ................................................ your HTML code
          ................................................................
          </p>

        </div>
        {/* *************** React code ***************/}
        {/* *************** React code ***************/}
        {/* *************** React code ***************/}


        <div className=' bg-red-600 code'>
        <button className=' bg-blue-500 text-xl focus:bg-green-600 shadow-2xl shadow-black text-white rounded-xl ' onClick={handleCopy}>
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
          <h3 className=' codeh3'>React Component</h3>
          <p className=' codep  bg-red-600' id="Reactcode">react:</p>
        </div>

    
          
      </div>
      <hr />

    </div>
             </>
  );
}