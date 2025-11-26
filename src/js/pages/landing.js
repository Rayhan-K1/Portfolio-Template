// Vue Component Declaration
TPortfolio.f.p.Landing = Vue.component('Landing', function (resolve, reject) {
    // Loads html page content
    fetch('./src/html/pages/landing.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'Landing',
                template: html,
                data() {
                    return {
                        items: [
                            { id: 1, content: 'Item 1' },
                            { id: 2, content: 'Item 2' },
                            { id: 3, content: 'Item 3' },
                            { id: 4, content: 'Item 4' },
                            { id: 5, content: 'Item 5' },
                          ],
                          isContentLoaded: false
                    }
                },
                computed: {
 
                },
                methods: {
                    initialise: async function () {
                        setTimeout(() => {
                            this.isContentLoaded = true;
                          }, 1000);
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