const state = {
	number: 0
}
const getters = {
	getNumber: function (state) {
		return state.number
	}
		
}
const actions = {
	addNumber (context,number){
		context.commit('add',number)
	},
	reduceNumber (context,number){
		context.commit('reduce',number)
	},
	calculateNumber (context,number){
		context.commit('calculate',number)
	}
}
const mutations = {
	add (state,number){
		state.number+=number
	},
	reduce (state,number){
		state.number-=number
	},
	calculate (state,number){
		state.number=number
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}