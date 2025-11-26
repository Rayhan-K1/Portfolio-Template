const router = new VueRouter({
    // Route Declaration
    routes: [{
        path: '/',
        name: 'Portfolio',
        component: TPortfolio.f.p.Landing,
    },
    {
        path: '/WorkExperience',
        name: 'Work Experience',
        component: TPortfolio.f.p.WorkExperience,
    },
    {
        path: '/CV',
        name: 'CV',
        component: TPortfolio.f.p.CV,
    },
    {
        path: '/AboutMe',
        name: 'About Me',
        component: TPortfolio.f.p.AboutMe,
    },{
        path: '/Projects',
        name: 'Projects',
        component: TPortfolio.f.p.Projects,
    }]
})
// Vue Instance
TPortfolio.f.p.index = new Vue({
    el: '#app',
    data: {
        fullscreenLoader: {
            show: true,
        }
    },
    computed: {
       
    },
    methods: {
        initialise: function () {
        },
        scrollToContent: function() {
            this.fullscreenLoader.show = true;
            setTimeout(() => {
            const target = document.getElementById('routerView');
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.fullscreenLoader.show = false;
            }, 300);
        },
        scrollToTop: function() {
                this.$nextTick(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            this.fullscreenLoader.show = false;
        }
    },
    router,
    mounted() {
        setTimeout(() => {
            this.$nextTick(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }, 500);
        this.fullscreenLoader.show = false;
        this.initialise();
    },
})