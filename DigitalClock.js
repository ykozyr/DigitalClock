const inner = document.querySelector('.inner');

// Function that will update the clock every second!

const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

// We will output the above information in the below html tag
    const html = `
    <span>${h}</span> :
    <span>${m < 10 ? `0${m}`:m}</span> :
    <span>${s < 10 ? `0${s}`:s}</span>
    `;

// Every second we'll be updating the html with the new template above
    inner.innerHTML = html;s
};

// The setInterval method can be used to call a function repeatedly
// We're calling the tick function every 1 second
setInterval(tick, 1000);