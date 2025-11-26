// Vue Component Declaration
TPortfolio.f.p.CV = Vue.component('CV', function (resolve, reject) {
    // Loads html page content
    fetch('./src/html/pages/cv.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'CV',
                template: html,
                data() {
                    return {
                          isContentLoaded: false,
                          workExperience: [{
                            "Name": "Test",
                            "FullTime": false,
                            "Date": "12/12/2012 - 13/13/2013",
                            "Data": ["1", "2", "3"]
                          },
                          {
                            "Name": "Test2",
                            "FullTime": true,
                            "Date": "12/12/2013 - 13/13/2014",
                            "Data": ["1", "2", "3"]
                          }],
                          education: [{
                            "ID": 'left',
                            "Data": [{
                                "Name": "Microsoft Office Suite",
                                "ID": "microsoftOffice",
                                "Data": "Test Text One"
                            }]
                          }, {
                            "ID": 'right',
                            "Data": [{
                                "Name": "Unreal Engine",
                                "Data": "Test Text Two"
                            }]
                          }],
                          selectedExperience: null,
                          selectedEducation: null,
                          selectedEducationData: null,
                          educationState: 'init',
                    }
                },
                computed: {
 
                },
                methods: {
                    initialise: async function () {
                        let ref = this;
                        setTimeout(() => {
                            ref.isContentLoaded = true;
                          }, 1000);
                    },
                    toggleWorkExperienceModal: function() {
                        const modal = document.getElementById('modal-workExperience');
                        const modalContent = document.getElementById('modal-content');
                        modal.classList.toggle('hidden');
                        modalContent.classList.toggle('opacity-0');
                        modalContent.classList.toggle('scale-95');
                    },
                    toggleEducationModal: function() {
                        this.educationState = 'init';
                        const modal = document.getElementById('modal-education');
                        const modalContent = document.getElementById('modal-content');
                        modal.classList.toggle('hidden');
                        modalContent.classList.toggle('opacity-0');
                        modalContent.classList.toggle('scale-95');
                    },
                    selectEducation: function(_education) {
                        let ref = this;
                        let selectedEducation = null;
                        for(let i=0; i < ref.education.length; i++) {
                            if(ref.education[i].ID == _education) {
                                selectedEducation = ref.education[i];
                            }
                         }
                        ref.selectedEducation = selectedEducation;
                        ref.toggleEducationModal();
                    },
                    selectEducationData: function(_ed) {
                        let ref = this;
                        ref.educationState = _ed.ID; 
                        ref.selectedEducationData = _ed
                    },
                    selectWorkExperience: function(_experience) {
                        let ref = this;
                        ref.selectedExperience = _experience;
                        ref.toggleWorkExperienceModal();
                    },
                    calculateDate: function(_dates) {
                        let startDate = _dates.split(" - ")[0];
                        let endDate = _dates.split(" - ")[1];

                        let startDateYear = JSON.parse(startDate.split("/")[2]);
                        let startDateMonth = JSON.parse(startDate.split("/")[1]);
                        let endDateYear = JSON.parse(endDate.split("/")[2]);
                        let endDateMonth = JSON.parse(endDate.split("/")[1]);

                        let years = endDateYear - startDateYear;
                        let months = endDateMonth - startDateMonth;

                        return years + (years == 1 ? ' Year, ' : ' Years, ') + months + (months == 1 ? ' Month' : ' Months');
                    }
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