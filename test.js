
//Grabing all the Dom tag by their IDs
const longUrl = document.getElementById('longUrl');
const form = document.getElementById("form");
const  parent = document.getElementById("parent");

    form.addEventListener("submit",async (e)=>{
      //If the form submit run the folling code and e.preventDefault is preventing it from submiting empty form
     e.preventDefault()
     const originalLink = longUrl.value;
     const apiUrl = `https://api.shrtco.de/v2/shorten?url=${originalLink}`;

     
     
     try{  
      // A try and catch block for catching errors in apis
         const response = await fetch (apiUrl)
         const data = await response.json();
           console.log(data)
          let link = document.createElement('li');
          link.className='output';
          link.innerHTML = `<a id="p" href="${data.result.full_short_link}" target='_blank'>${data.result.full_short_link}</a>`;
          parent.prepend(link)
        
    }
   catch(e){console.log(e)}
    })
  
    function coop() {
      //The function for  selecting the outputLInk
      const outputElements = document.getElementsByClassName('output');
      if (outputElements.length > 0) {
        const copi = outputElements[0].querySelector('a');
        const textToCopy = copi.href;
    //Below is the code that copy the outPut (link) in the DOM
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    
        alert('Link copied to clipboard');
        submit.disabled = true;//disable the button once the link is copied

        // Re-enable the copy button after a short delay (e.g., 9 seconds)
        setTimeout(() => {
          submit.disabled = false;
        }, 15000); // Adjust the delay as needed
      }
  
      }
    