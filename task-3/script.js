// Quiz Function

function checkAnswer(answer){

    const result = document.getElementById("result");

    if(answer === "a"){
        result.innerHTML = "✅ Correct Answer!";
    }
    else{
        result.innerHTML = "❌ Wrong Answer!";
    }

}

// API Fetch Function

async function getJoke(){

    try{

        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await response.json();

        document.getElementById("joke").innerHTML =
            `${data.setup} 😂 <br><br> ${data.punchline}`;

    }

    catch(error){

        document.getElementById("joke").innerHTML =
            "Failed to load joke.";

    }

}