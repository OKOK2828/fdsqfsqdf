const welcomeText = `

Who I am?
`;

const aboutText = `
I am the shadow without a name, the eyes without a face. 
I see all but do not; hear all but speak not. Of myself I am nothing. 
The Watcher’s will is my only purpose.
`;

const projectsText = `

`;

const socialMediaText = `
  https://t.me/echoprtl
`;

const thankYouText = `





`;

const output = document.getElementById("output");

const sections = [welcomeText, aboutText, projectsText, socialMediaText, thankYouText];
let sectionIndex = 0;
let index = 0;

function type() {
    if (sectionIndex < sections.length) {
        const section = sections[sectionIndex];
        if (index < section.length) {
            output.innerHTML += section.charAt(index);
            index++;
            setTimeout(type, 15);
            window.scrollTo(0,document.body.scrollHeight); // Scroll to the bottom of the page
        } else {
            output.innerHTML += '<br /><br />';
            sectionIndex++;
            index = 0;
            setTimeout(type, 1000); // Add a longer pause between sections
        }
    }
}

type();
