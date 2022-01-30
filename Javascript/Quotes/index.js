const quotes = document.getElementById("quotes");
        const author = document.getElementById("author");
        const nQuotes = document.getElementById("nQuotes");
        const tweetMe = document.getElementById("tweetMe");
        let realData = "";
        let quotesData = "";

        const tweetNow = ()=>{
            let  tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
            window.open(tweetPost);
        }  
           const getNewQuotes = () =>{
               let rnum = Math.floor(Math.random() * 1500)
               quotesData = realData[rnum];
               quotes.innerHTML = `${quotesData.text}`;
               quotesData.author == null
                ? (author.innerText = Unknown)
                :(author.innerText =`By ${quotesData.author}`);
           }
        const getQuotes = async ()=>{
            const api = "https://type.fit/api/quotes";
            try{
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes();
            } catch(err){

            }
        }
        tweetMe.addEventListener("click", tweetNow)
        nQuotes.addEventListener('click', getQuotes);
        getQuotes();