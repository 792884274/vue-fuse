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
		// console.log(state.total);
		return state.total
	},
	getItems: function (state) {
		// console.log(state.items);
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