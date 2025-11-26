// Vue Component Declaration
TPortfolio.f.p.Projects = Vue.component('Projects', function (resolve, reject) {
    // Loads html page content
    fetch('./src/html/pages/projects.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'Projects',
                template: html,
                data() {
                    return {
                          isContentLoaded: false,
                          selectedProject: null,
                          sections: [
                            {
                                title: "Web Development Projects",
                                videos: [
                                    { name: "[Name]'s Portfolio", src: "src/resources/forest.mp4", text: "This Website", description: "This website was made in HTML, CSS and JavaScript using Vue.js and Tailwind CSS.  I chose this because the MVC Architecture Model of data modelling allowed me to enable dynamic updates to my website, as well as a large host of other functionality perks, such as routing to preserve cache, enhanced security due to real-time base64 encryption, etc. <br><br> These technologies were chosen as they are at the forefront of the Website Development Industry, being used in the most bleeding edge technology available. They are also highly adaptable, in that they can be containerised and released on multiple platforms rather than being platform-specific. As a result of this, there is a centralised codebase for these types of projects, which makes the latter part of the Software Development Life Cycle easier to maintain. </span>" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 2", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 3", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                ]
                            },
                            {
                                title: "Games Development Projects",
                                videos: [
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 1", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 2", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 3", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 3", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 3", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                ]
                            },
                            {
                                title: "UI/UX Designs",
                                videos: [
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 1", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 2", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 3", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 3", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 3", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 3", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                ]
                            },
                            {
                                title: "Other Projects",
                                videos: [
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 1", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 2", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 3", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                    { name: "Test", src: "src/resources/forest.mp4", text: "Video 3", description: "I am really really gay, I like men, thats why I am dating Sonya" },
                                ]
                            },
                        ]
                    }
                },
                computed: {
 
                },
                methods: {
                    initialise: async function () {
                        let ref = this;
                        ref.$root.fullscreenLoader.show = true;
                        setTimeout(() => {
                            ref.$root.fullscreenLoader.show = false;
                        }, 1000)
                    },
                },
                mounted() {
                    this.initialise();
                },
                watch: {
                   
                }
            })
        })
    })
})