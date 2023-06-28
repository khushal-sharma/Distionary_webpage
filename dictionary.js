// let searchBtn = document.getElementById('search')
// let input = document.getElementById('input')
// let apiKey = '56cb2509-ff83-4c01-a857-9785bbd5134d'
// let notFound = document.getElementsByClassName('.not_found')

// searchBtn.addEventListener('click', function(e){
//     e.preventDefault()

//     let word = input.value;



//     if(word===''){
//         alert('please type a word')
//         return
//     }
//     getData(word)

// })

// async function getData(word){
//     let response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`)
//     const data = await response.json()


//     // if empty result
//     if(!data.length){
//         notFound.innerText = 'No result found'
//         return

//     }
//     // is result is sugggestion
//     if(typeof data[0]==='string'){
//         let heading = document.createElement('h3')
//         heading.innerText='Did you mean?'
//         notFound.appendChild(heading)


//     }

// }



// --------------------

let searchButton = document.querySelector('#search')
let inputBox = document.querySelector('#input')
let apiKey = '56cb2509-ff83-4c01-a857-9785bbd5134d'
let notFound = document.getElementsByClassName('.not_found')
let defBox = document.querySelector('.def');
let loading = document.querySelector('.loading');




searchButton.addEventListener('click', (element) => {
    element.preventDefault()

    let word = inputBox.value;


    if (word === '') {
        alert('Please Enter Something')

    }
    getData(word);

})

async function getData(word) {
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`)
    const data = await response.json()


if (!data.length) {
    loading.style.display = 'none';
    notFound.innerText = 'No Result Found'
    return
}
// If result is suggetions
if (typeof data[0] === 'string') {
    loading.style.display = 'none';
    let heading = document.createElement('h3');
    heading.innerText = 'Did you mean?'
    notFound.appendChild(heading);
    data.forEach(element => {
        let suggetion = document.createElement('span');
        suggetion.classList.add('suggested');
        suggetion.innerText = element;
        notFound.appendChild(suggetion);

    })
    return;


}
// Result found 
loading.style.display = 'none';
let defination = data[0].shortdef[0];
defBox.innerText = defination;



console.log(data);
}
