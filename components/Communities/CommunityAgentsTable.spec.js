import { shallowMount } from '@vue/test-utils';
import CommunityAgentsTable from './CommunityAgentsTable.vue';
import Agents from '~/test/unit/mockData/Agents';

const factory = (mockStore) => {
	return shallowMount(CommunityAgentsTable, {
		...createComponentMocks({ store: mockStore }),
		mocks: {
			$vuetify: { breakpoint: {} },
		},
		propsData: { agents: Agents },
	});
};

describe('CommunityAgentsTable', () => {
	const mockStore = {
		community: {
			state: () => {
				return {
					loading: {
						events: false,
						agents: false,
						datasets: false,
						community: false,
					},
				};
			},
		},
	};
	it('is instantiated', () => {
		const wrapper = factory(mockStore);
		expect(wrapper).toBeTruthy();
	});
});
