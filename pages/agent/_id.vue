<template>
	<iframe
		:src="hostName + `agent/` + $route.params.id"
		width="100%"
		height="100%"
		frameborder="0"
	>
	</iframe>
</template>

<script>
export default {
	name: 'AgentsMonitoringIdPage',
	layout: 'embedIframeFullWidth',
	data() {
		return {
			hostName: this.$config.OEB_LEGACY_ANGULAR_URI,
			breadcrumbs: [
				{
					text: 'Home',
					disabled: false,
					exact: true,
					to: '/',
				},
				{
					text: 'Agents',
					disabled: false,
					exact: true,
					to: '/agent',
				},
				{
					text: this.$route.params.id,
					disabled: true,
					to: this.$route.params.id,
				},
			],
		};
	},
	mounted() {
		this.$parent.$emit('emitBreadcrumbs', this.breadcrumbs);
	},
};
</script>
