import { shallowMount } from '@vue/test-utils';
import Index from './index.vue';
import MockCommunity from '~/test/unit/mockData/Community';
import MockDatasets from '~/test/unit/mockData/Datasets';
import MockAgents from '~/test/unit/mockData/Agents';
jest.mock('marked', () => ({ marked: jest.fn(() => 'foo') }));

const factory = (mockStore, route) => {
	return shallowMount(Index, {
		...createComponentMocks({ store: mockStore }),
		mocks: {
			$route: route,
			$router: [],
		},
	});
};

describe('index.vue', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	const mockStore = {
		community: {
			getters: {
				currentCommunity: () => {
					return {};
				},
				community: () => {
					return MockCommunity;
				},
				datasets: () => {
					return MockDatasets;
				},
				agents: () => {
					return MockAgents;
				},
			},
			actions: { getCommunity: jest.fn() },
			state: () => {
				return {
					loading: {
						events: false,
						agents: false,
						datasets: false,
						community: false,
					},
					community: MockCommunity,
					datasets: MockDatasets,
					agents: MockAgents,
				};
			},
		},
	};

	const routeWithProjectId = {
		params: { project: 'sample' },
	};

	it('is instantiated', () => {
		const wrapper = factory(mockStore, routeWithProjectId);
		expect(wrapper).toBeTruthy();
	});

	it('calls store actions if community id URL param is not equal community in store', () => {
		const wrapper = factory(mockStore, routeWithProjectId);
		expect(wrapper).toBeTruthy();

		expect(wrapper.vm.$route.params.project).toBe('sample');
		expect(mockStore.community.actions.getCommunity).toHaveBeenCalled();
	});
});
