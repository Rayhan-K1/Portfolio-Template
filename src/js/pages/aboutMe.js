// Vue Component Declaration
TPortfolio.f.p.AboutMe = Vue.component('AboutMe', function (resolve, reject) {
    // Loads html page content
    fetch('./src/html/pages/aboutMe.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'About Me',
                template: html,
                data() {
                    return {
                          isContentLoaded: false,
                    }
                },
                computed: {
 
                },
                methods: {
                    initialise: async function () {
                        let ref = this;
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