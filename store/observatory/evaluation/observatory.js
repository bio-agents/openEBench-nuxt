/*
This is the store for the FAIR4S Evaluator's **step 2** when metadata is
imported from the Software Observatory.
These functions are mainly called from the component `observatoryInput.vue`
(in `components/evaluation/Observatory`)
*/

// state
export const state = () => ({
	_ObservatoryAgentsNameTypeSources: [],
	_loadingAutocomplete: false,
	_loading: false,
	_importationResult: null, //
});

// getters
export const getters = {
	getObservatoryAgentsNameTypeSources(state) {
		return state._ObservatoryAgentsNameTypeSources;
	},

	getLoadingAutocomplete(state) {
		return state._loadingAutocomplete;
	},

	getLoading(state) {
		return state._loading;
	},
};

// actions
export const actions = {
	async getObservatoryAgentsNameTypeSources({ commit, _state }) {
		const URL = '/agents/names_type_labels';

		commit('setLoadingAutocomplete', true);

		const result = await this.cache.dispatch(
			'observatory/evaluation/observatory/GET_URL',
			URL
		);

		commit('setObservatoryAgentsNameTypeSources', result);
		commit('setLoadingAutocomplete', false);
	},

	async fetchAgentMetadata({ commit, dispatch }, payload) {
		const URL = '/agents?name=' + payload.name + '&type=' + payload.type;

		commit('setLoading', true); // set loading to true to show the loading bar

		// do not cache this request. Otherwise, the processed metadata will be cached as well.
		let result = await this.dispatch(
			'observatory/evaluation/observatory/GET_URL',
			URL
		);

		result = await dispatch(
			'observatory/evaluation/metadata/prepareMetadata',
			result,
			{ root: true }
		);

		dispatch('observatory/evaluation/metadata/updateAgentsMetadata', result, {
			root: true,
		}); // modify to use mutation in index;

		dispatch('observatory/evaluation/metadata/updateLoadedMetadata', true, {
			root: true,
		});

		commit('setLoading', false); // set loading to false to hide the loading bar

		dispatch('observatory/evaluation/changeStep', 3, { root: true });
	},

	async GET_URL({ _commit, _state }, URL) {
		const result = await this.$observatory.get(URL);
		return result.data;
	},

	updateLoading({ commit }, loading) {
		commit('setLoading', loading);
	},
};

// mutations
export const mutations = {
	setObservatoryAgentsNameTypeSources(state, data) {
		state._ObservatoryAgentsNameTypeSources = data;
	},

	setLoadingAutocomplete(state, data) {
		state._loadingAutocomplete = data;
	},

	setLoading(state, data) {
		state._loading = data;
	},
};
