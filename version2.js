const searchinput = document.getElementById('searchinput');
const Searchbutton = document.getElementById('Searchbutton');
const searchresults = document.getElementById('searchresults');
const searchContainer = document.querySelector('.search');

//data to search through

const items=[ //constant reference to these values. 
    {
        label:"Eva",
        keywords:["Eva", "Eva Brunt", "Brunt"],
        href: "Brunt.html"
    },
    {
        label:"Chloe",
        keywords:["Chloe", "Chloe Chester", "Chester"],
        href: "Chloe.html"
    },
    {
        label:"Jess",
        keywords:["Jess", "Jessica", "Jessica Corbett", "Corbett", "Jess Corbett"],
        href: "Jess.html"
    },
    {
        label:"Rosy",
        keywords:["Rosy", "Rosy Lin", "Lin"],
        href: "Rosy.html"
    },
    {
        label:"Freja",
        keywords:["Freja", "Eriksson", "Freja Eriksson"],
        href: "Freja.html"
    },
    {
        label:"Apron",
        keywords:["apron", "grey apron", "barbeque"],
        href:"Brunt.html"
    },
    {
        label:"Laptop case",
        keywords:["laptop case", "laptop", "pencilcase", "pencil case"],
        href:"Freja.html"
    },
    {
        label:"Belt",
        keywords:["belt", "holder"],
        href:"Jess.html"
    },
    {
        label:"Satchel",
        keywords:["bag", "satchel", "work bag"],
        href:"Chloe.html"
    },
    {
        label:"Pink apron",
        keywords:["pink apron", "pink"],
        href:"Rosy.html"
    }

];


function performSearch() {
    const searchTerm = searchinput.value.toLowerCase();
    searchresults.innerHTML = ""; //This clears previous search results.

    if (searchTerm.trim() === "") {
        searchresults.style.display = "none";
        return; //If the input is empty, don't show results. 
    }
    const filteredItems = items.filter(entry=> 
        entry.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm)));

    searchresults.style.display = "block";

    if(filteredItems.length > 0){
        filteredItems.forEach(entry => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = entry.label;
            link.href = entry.href; //sets the destination URL for the link in the search results. 
            link.style.textDecoration = "none"; //removes underline
            link.style.color = "inherit"; //This is optional and I may remove it later
            li.appendChild(link); //adds the link to the list item
            searchresults.appendChild(li);//adds the list item to the results.

        });
    
    } else {
        const li = document.createElement('li');
        li.textContent = "No results found.";
        searchresults.appendChild(li);}
    }
//This triggers the search if the 'search' button is clicked, or if enter is clicked on the keyboard
    Searchbutton.addEventListener('click', performSearch);
    searchinput.addEventListener('keydown', function(e){
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    //Hide results when clicking outside the search area.

document.addEventListener('click', function(event){
    if (!searchContainer.contains(event.target)) {
        searchresults.innerHTML=''; //clears content
        searchresults.style.display="none"; //This hides the results box dropdown
        searchinput.value=''; //clear the input field
        

    }
});