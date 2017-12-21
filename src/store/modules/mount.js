const state = {
	total: 0,
	items: [
		{
			number: 0
		},
		{
			number: 0
		},
		{
			number: 0
		}
	]
}
const getters = {
	getTotal: function (state) {
		return state.total
	},
	getItems: function (state) {
		return state.items
	}		
}
const actions = {
	calculateNumber (context,obj){
		context.commit('calculate',obj)
	}
}
const mutations = {
	calculate (state,obj){
		state.items=obj.items;
		state.total=obj.total;
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}