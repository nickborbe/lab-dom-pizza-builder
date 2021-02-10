// Write your Pizza Builder JavaScript in this file.

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// Constants
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};


function renderPrice() {
  let theList = document.querySelector('.price ul');
  theList.innerHTML = '';
  Object.keys(state).forEach((eachStateKey)=>{
    if(state[eachStateKey]){
      var newItem = document.createElement("li");
      newItem.innerText = '$' + ingredients[eachStateKey].price;
      newItem.innerText += ' ' + ingredients[eachStateKey].name
      theList.append(newItem);
    }
  })

  document.querySelector('aside strong').innerText = `$${calculateTotal()}`;
}

function calculateTotal(){
  let price = 10;
  Object.keys(state).forEach((eachStateKey)=>{
    if(state[eachStateKey]){
      price += ingredients[eachStateKey].price;
    }
  })
  return price;
}



// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}


function renderDissappearingToppings(selector, toppingState){
  document.querySelectorAll(selector).forEach(oneDissappearingObject => {
    if (state[toppingState]) {
      oneDissappearingObject.style.visibility = 'visible';
    } else {
      oneDissappearingObject.style.visibility = 'hidden';
    }
  });
}

function renderPepperoni() {
  renderDissappearingToppings('.pep', 'pepperoni');
}

function renderGreenPeppers() {
  renderDissappearingToppings('.green-pepper', 'greenPeppers');
}

function renderMushrooms() {
  renderDissappearingToppings('.mushroom', 'mushrooms');
}

function renderWhiteSauce() {
  if(state.whiteSauce){
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  if(state.glutenFreeCrust){
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

function renderButtons() {

  let legend = {
    'btn-pepperoni': 'pepperoni',
    'btn-mushrooms': 'mushrooms',
    'btn-green-peppers': 'greenPeppers',
    'btn-sauce': 'whiteSauce',
    'btn-crust': 'glutenFreeCrust'
  };

  document.querySelectorAll('.btn').forEach((eachButton)=>{
    let buttonClass = eachButton.classList[1];
    let stateKeyName = legend[buttonClass];
    if(state[stateKeyName]){
      eachButton.classList.add('active')
    } else {
      eachButton.classList.remove('active');
    }
  })
}



renderEverything();

function addClickListener(selector, stateTopping){
  document.querySelector(selector).addEventListener('click', (event) => {
    // event.currentTarget.classList.toggle('active'); this is cool but we can do better 
    state[stateTopping] = !state[stateTopping];
    renderEverything();
  });  
}

addClickListener('.btn.btn-pepperoni', 'pepperoni');
addClickListener('.btn.btn-green-peppers', 'greenPeppers');
addClickListener('.btn.btn-mushrooms', 'mushrooms');
addClickListener('.btn.btn-sauce', 'whiteSauce');
addClickListener('.btn.btn-crust', 'glutenFreeCrust');




// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
