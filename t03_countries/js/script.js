document.body.style.background = "red";
setTimeout(() => document.body.style.background = '', 1000);

let countr_array = Array.from( document.querySelectorAll("li")),
    feature = document.querySelectorAll("data-feature");

let lishky = document.getElementsByTagName("li");


function corrector() {
    for( i = 0 ; i < countr_array.length ; i++) {
    class_ind = countr_array[i].classList.value;
    
        if(class_ind !== "europe" && class_ind !== "africa" && class_ind !== "oceania" && class_ind !== "asia" && class_ind !== "americas") {
            countr_array[i].classList.value = 'europe'
        }
        if( !lishky[i].attributes[1] ) {
            document.getElementsByTagName("li")[i].setAttribute('data-feature',"")
            

        }

    }
}

function setlogo() {
    // const mount_img = `<div><img src="assets/images/mountain.png" style="max-width: 40px"/></div>`,
    //     beach_img = `<div><img src="assets/images/beach.png" style="max-width: 40px"/></div>`,
    //     mix_img = `<div><img src="assets/images/beach.png" style="max-width: 40px"/>
    //     <img src="assets/images/mountain.png" style="max-width: 40px"/></div>`,
    //     none_img = `<div><img src="assets/images/none.png" style="max-width: 40px"/></div>`;
        
        


        countr_array.forEach(param => {
            console.log(param.attributes[1].value)
        
        switch(param.attributes[1].value) {
            case "mountains":
                div = document.createElement('div');
                div.classList.add('mountains', 'feature');
                param.appendChild(div); 
                break;
            case "beach":
                div = document.createElement('div');
                div.classList.add('beach', 'feature');
                param.appendChild(div); 
                break;
            case "beach mountains":
                div1 = document.createElement('div');
                div2 = document.createElement('div')
                div1.classList.add('beach', 'feature');
                div2.classList.add('mountains', 'feature');
                param.appendChild(div1);
                param.appendChild(div2);
                break;            
            case "":
                div = document.createElement('div');
                div.classList.add('feature', 'line');
                param.appendChild(div); 
                break;
        }
    });  
 }

corrector();
setlogo();
