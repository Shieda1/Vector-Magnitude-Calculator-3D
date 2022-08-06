// https://calculator.swiftutors.com/vector-magnitude-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const vector3DmagnitudeRadio = document.getElementById('vector3DmagnitudeRadio');
const valueofxRadio = document.getElementById('valueofxRadio');
const valueofyRadio = document.getElementById('valueofyRadio');
const valueofzRadio = document.getElementById('valueofzRadio');

let vector3Dmagnitude;
let valueofx = v1;
let valueofy = v2;
let valueofz = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

vector3DmagnitudeRadio.addEventListener('click', function() {
  variable1.textContent = 'Value of x';
  variable2.textContent = 'Value of y';
  variable3.textContent = 'Value of z';
  valueofx = v1;
  valueofy = v2;
  valueofz = v3;
  result.textContent = '';
});

valueofxRadio.addEventListener('click', function() {
  variable1.textContent = '3D vector magnitude';
  variable2.textContent = 'Value of y';
  variable3.textContent = 'Value of z';
  vector3Dmagnitude = v1;
  valueofy = v2;
  valueofz = v3;
  result.textContent = '';
});

valueofyRadio.addEventListener('click', function() {
  variable1.textContent = '3D vector magnitude';
  variable2.textContent = 'Value of x';
  variable3.textContent = 'Value of z';
  vector3Dmagnitude = v1;
  valueofx = v2;
  valueofz = v3;
  result.textContent = '';
});

valueofzRadio.addEventListener('click', function() {
  variable1.textContent = '3D vector magnitude';
  variable2.textContent = 'Value of x';
  variable3.textContent = 'Value of y';
  vector3Dmagnitude = v1;
  valueofx = v2;
  valueofy = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(vector3DmagnitudeRadio.checked)
    result.textContent = `3D vector magnitude = ${compute3Dvectormagnitude().toFixed(2)}`;

  else if(valueofxRadio.checked)
    result.textContent = `Value of x = ${computeValueofx().toFixed(2)}`;

  else if(valueofyRadio.checked)
    result.textContent = `Value of y = ${computeValueofy().toFixed(2)}`;

  else if(valueofzRadio.checked)
    result.textContent = `Value of z = ${computeValueofz().toFixed(2)}`;
})

// calculation

function compute3Dvectormagnitude() {
  return Math.sqrt(Math.pow(Number(valueofx.value), 2) + Math.pow(Number(valueofy.value), 2) + Math.pow(Number(valueofz.value), 2));
}

function computeValueofx() {
  return Math.sqrt(Math.pow(Number(vector3Dmagnitude.value), 2) - Math.pow(Number(valueofy.value), 2) - Math.pow(Number(valueofz.value), 2));
}

function computeValueofy() {
  return Math.sqrt(-Math.pow(Number(valueofx.value), 2) + Math.pow(Number(vector3Dmagnitude.value), 2) - Math.pow(Number(valueofz.value), 2));
}

function computeValueofz() {
  return Math.sqrt(-Math.pow(Number(valueofx.value), 2) - Math.pow(Number(valueofy.value), 2) + Math.pow(Number(vector3Dmagnitude.value), 2));
}