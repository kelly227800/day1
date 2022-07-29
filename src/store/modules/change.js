export default {
    namespaced: true,
    state: {
        colorValue: '#b83f45'
    },
    mutations:{
        changeColorValue(state) {
            let newColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
            state.colorValue = newColor
        }
    },
    actions:{},
    getters:{}
}