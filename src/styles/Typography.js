import {
    createGlobalStyle
}
from 'styled-components';


const Typography=createGlobalStyle` @font-face {
    font-family: 'Roboto Mono', monospace;
    src: @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat', sans-serif;
    src: @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat', sans-serif;
    src: @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    font-style: normal;
}

html {
    font-family: 'Roboto Mono', monospace;
    color: var(--gray-1);
}

* {
    font-family: 'Roboto Mono', monospace;
    color: var(--gray-1);
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Montserrat', sans-serif;
}

`;

export default Typography;