let countr_array = Array.from( document.querySelectorAll("li")),
    feature = document.querySelectorAll("data-feature");
let lishky = document.getElementsByTagName("li"),
    attr = [],
    key = 0;

function corrector(i) {
        class_ind = i.classList.value;
    
        if(class_ind !== "europe" && class_ind !== "africa" && class_ind !== "oceania" && class_ind !== "asia" && class_ind !== "americas") {
            i.classList.value = 'europe' ; 
        };
        if( !i.attributes[1] ) {
            i.setAttribute('data-feature',"none")
        }
}

function setlogo(param) {
        attr[key] = param.attributes[1].value; //array with attributes
        
        if(param.attributes[1].value == attr[key]) { 
            if( attr[key] !== 'none'){
                let clas = attr[key].split(" "),
                    k = clas.join(' '),
                    arr = k.split(' ');

                for( i=0; i < arr.length; i++ ) {
                    div = document.createElement('div');
                    div.classList.add(arr[i]); 
                    div.classList.add("feature");
                    param.appendChild(div);  
                }  
            } else {
                    div = document.createElement('div');
                    div = document.createElement('div');
                    
                    div.classList.add("feature");
                    div.classList.add('line'); 
                    param.appendChild(div);  
            }   
        }      
 }

function processPage() {
    countr_array.forEach(param => {
        lishky[key].innerHTML=`<div>${lishky[key].innerText}</div>`;
        corrector(param);
        setlogo(param);
        key++;
    })
}



processPage()
