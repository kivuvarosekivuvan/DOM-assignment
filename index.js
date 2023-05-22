// Change document background color to
// silver
document.body.style.backgroundColor = `silver`
document.body.style.fontFamily= `Arial`
document.body.style.fontSize= `18px`
// Change the font color for h1 title tag to
// green

document.getElementById(`title`).style.color=`green`

// Change the font case for h3 title tags to
// uppercase
document.getElementById(`food`).style.textTransform = `uppercase`


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