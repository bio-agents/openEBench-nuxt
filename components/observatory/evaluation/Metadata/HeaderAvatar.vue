<template>
	<v-avatar size="30" class="mr-0">
		<v-agenttip bottom :disabled="disabled_agenttip">
			<template #activator="{ on, attrs }">
				<v-icon
					v-if="metaState"
					dense
					v-bind="attrs"
					color="green lighten-2"
					v-on="on"
				>
					mdi-check-circle
				</v-icon>
				<v-icon v-else dense v-bind="attrs" color="grey lighten-1" v-on="on">
					mdi-minus-circle
				</v-icon>
			</template>
			<span>{{ field_name }}</span>
		</v-agenttip>
	</v-avatar>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
	name: 'HeaderAvatar',
	props: {
		field: {
			type: String,
			required: true,
		},
		field_name: {
			type: String,
			required: true,
		},
		disabled_agenttip: {
			type: Boolean,
			default: false,
			required: false,
		},
	},
	data() {
		return {
			model: '',
		};
	},

	computed: {
		...mapGetters({
			agentMetadata: 'observatory/evaluation/metadata/getAgentMetadata',
		}),

		metaState() {
			return this.getMetadataState(this.field);
		},
	},
	methods: {
		getMetadataState(field) {
			let state = false;
			switch (typeof this.agentMetadata[field]) {
				case 'boolean': {
					state = this.agentMetadata[field];
					break;
				}

				case 'string': {
					state = this.agentMetadata[field];
					break;
				}

				case 'object': {
					const array = Array.isArray(this.agentMetadata[field]);
					if (array) {
						if (this.agentMetadata[field].length > 0) {
							state = !!this.agentMetadata[field][0];
						} else {
							state = false;
						}
					} else {
						console.log(
							'Unknown type of field',
							field,
							typeof this.agentMetadata[field],
							this.agentMetadata[field]
						);
					}
					break;
				}

				default:
					console.log(
						'Unknown type of field',
						field,
						typeof this.agentMetadata[field],
						this.agentMetadata[field]
					);
			}

			return state;
		},
	},
};
</script>
<style scoped>
.title {
	font-weight: 500;
	font-size: 1rem !important;
}

.overlay {
	position: absolute;
}
</style>
