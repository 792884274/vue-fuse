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
	],
	into: false
}
const getters = {
	getTotal: function (state) {
		return state.total
	},
	getItems: function (state) {
		return state.items
	},
	getInto: function (state) {
		return state.into
	}			
}
const actions = {
	calculateNumber (context,obj){
		context.commit('calculate',obj)
	},
	intoChange (context,method){
		context.commit('intoIf',method)
	}
}
const mutations = {
	calculate (state,obj){
		state.items=obj.items;
		state.total=obj.total;
	},
	intoIf (state,method){
		if (method=='click') {
			state.into=false;			
		} else if(method=='fall'){
			state.into=true;	
		}
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}