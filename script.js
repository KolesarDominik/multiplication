const byId = (ident) => document.getElementById(ident);
const parseInteger = (value) => parseInt(value, 10);
const randomInRange = (min, max) => Math.floor(Math.random() * (max-min)) + min;

const fixed1 = byId('fixed_number1');
const min1 = byId('min_number1');
const max1 = byId('max_number1');

const fixed2 = byId('fixed_number2');
const min2 = byId('min_number2');
const max2 = byId('max_number2');

const issues = byId('issues');
const compute = byId('compute_button');

const getImageUnsplash = (width, height, v) => `https://source.unsplash.com/${width}x${height}?v=${v}`;
const getImagePicsum = (width, height, v) => `https://picsum.photos/${width}/${height}?v=${v}`;
const setRandomBackground = () => {
    const height = parseInteger(window.screen.height/(Math.random()+2));
    const width = parseInteger(window.screen.width/(Math.random()+2));
    const v = Math.random();
    const isUnsplash = window.getComputedStyle(issues).background.includes('unsplash');
    issues.style.backgroundImage =  isUnsplash ?  `url('${getImagePicsum(width, height, v)}')` : `url('${getImageUnsplash(width, height, v)}')`;
};


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