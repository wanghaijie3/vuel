export default {
    state :{
        isCollapse:false
    },
    mutations:{
        collapseMenus(state) {
            state.isCollapse = !state.isCollapse
        } 
    }

}