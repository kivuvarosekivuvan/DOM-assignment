// Change document background color to
// silver
document.body.style.backgroundColor = `silver`
document.body.style.fontFamily= `Arial`
document.body.style.fontSize= `18px`
// Change the font color for h1 title tag to
// green

document.getElementById(`title`).style.color=`green`
document.getElementById(`title`).style.marginLeft=`20px`


// Change the font case for h3 title tags to
// uppercase
document.getElementById(`food`).style.textTransform = `uppercase`
document.getElementById(`food2`).style.textTransform = `uppercase`
document.getElementById(`food`).style.color = `red`
document.getElementById(`food2`).style.color = `red`
document.getElementById(`food`).style.marginLeft = `70px`
document.getElementById(`food2`).style.marginLeft = `70px`

document.getElementById(`food`).style.fontSize = `30px`
document.getElementById(`food2`).style.fontSize = `30px`



// Add one more fruit to the fruits list
var morefruits=[`Pineapple`, `Orange`, `Pawpaw`, `Strawberry`]
var fruitlist = document.getElementById(`fruList`);
for(let i=0; i<morefruits.length; i++){
    var newList = document.createElement(`li`)
    newList.textContent=morefruits[i]
    fruitlist.appendChild(newList)
}



// Add one more vegetable to the vegetables
// list

var moreVeges = [`Carrot`, `Sukumawiki`, `Dania`, `Hoho`]
var previousVeges=document.getElementById(`vegList`);
for(let i=0; i<moreVeges.length; i++){
    var newVeg=document.createElement(`li`)
    newVeg.textContent = moreVeges[i]
    previousVeges.appendChild(newVeg)
}

var image = document.createElement("img");
image.style.top=`0`
image.style.position = "absolute";
image.style.left=`0`
image.src = "images/pic1.png";
image.style.float = "left";
image.style.marginLeft = "40%";
image.sizes = "20%"
document.body.appendChild(image);

document.getElementById(`title`).style.marginLeft=`0px`


// var image2 = document.createElement("img");
// // image2.style.top=`0`
// image2.style.position = "absolute";
// // image2.style.left=`0`
// image2.src = "images/pic2.png";
// image2.style.float = "left";
// image2.style.marginLeft = "40%";
// image2.sizes = "20%"
// document.body.appendChild(image);