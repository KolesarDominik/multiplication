const byId = (ident) => document.getElementById(ident);
const parseInteger = (value) => parseInt(value, 10);
const randomInRange = (min, max) => Math.floor(Math.random() * (max-min)) + min;
// const imageSize = () => console.log(issues.style.background


const issues = byId('issues');

const fixed1 = byId('fixed_number1');
const min1 = byId('min_number1');
const max1 = byId('max_number1');

const fixed2 = byId('fixed_number2');
const min2 = byId('min_number2');
const max2 = byId('max_number2');

const compute = byId('compute_button');

// const thewindow = window;

const setRandomBackground = () => {
    const background = window.getComputedStyle(issues).background.includes('1000');
    issues.style.backgroundImage = background ? "url('https://source.unsplash.com/1100x1100')" : "url('https://source.unsplash.com/1000x1000')";
};


// [fixed1, min1, max1, fixed2, min2, max2].forEach(function(input) {
//     input.addEventListener('change', function(e) {
//       if (e.target.value == '') {
//         e.target.value = 0
//       }
//     })
// })

// min1.onchange = (v) => {
//     console.log(v);
// }

compute.onclick = () => {
    const range1 = fixed1.value ? [fixed1.value, fixed1.value] : [min1.value || 0, max1.value];
    const range2 = fixed2.value ? [fixed2.value, fixed2.value] : [min2.value || 0, max2.value];

    const issue = document.createElement("span");

    issue.innerText = `${randomInRange(...range1.map(parseInteger))} x ${randomInRange(...range2.map(parseInteger))}`;

    issue.classList = ['issue'];

    issue.onclick = () =>  compute.click();

    if(issues.lastElementChild) {
        issues.removeChild(issues.lastElementChild);
    }

    issues.appendChild(issue);

    setRandomBackground(issues);
    

};

// setRandomBackground(issues);