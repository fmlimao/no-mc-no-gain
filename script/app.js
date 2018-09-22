function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFormattedDate(){
    var d = new Date();
    d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2);
    return d;
}

var App = new Vue({
    el: '#AppVue',
    data: {
        phrases: [
            '<b>MC</b>?',
            'Hoje é dia de se estragar! Vá em frente, pode ir no <b>MC</b>!!!',
            'Cara, hoje eu to de bom humor, então se você for no <b>MC</b> eu posso fingir q não vi...',
            'Hoje é dia de comer uma delicisa comida na <b>ATIVA</b>!',
        ],
        phrase: '',
        modal: {
            opened: false,
            loading: true,
        },
    },
    methods: {
        init: function () {},
        selectLunch: function () {
            App.modal.loading = true;
            App.modal.opened = true;

            setTimeout(function () {
                var now = getFormattedDate();
                var current_prhase = sessionStorage.getItem('current_prhase_' + now);

                if (!current_prhase) {
                    var i = getRndInteger(0, App.phrases.length - 1);
                    current_prhase = App.phrases[i];
                    sessionStorage.setItem('current_prhase_' + now, current_prhase);
                }

                App.phrase = current_prhase;
                App.modal.loading = false;
            }, 1000);
        },
    },
});

App.init();