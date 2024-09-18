import ChartBarplotVisualizerWrapper from '~/components/Widgets/ChartBarplotVisualizerWrapper';

export default {
	title: 'Widgets/ChartBarplotVisualizerWrapper',
};

export const ChartBarplotVisualizer = (_args, { argTypes }) => ({
	components: { ChartBarplotVisualizerWrapper },
	props: Object.keys(argTypes),
	template: `
	<div>
		<p>Info: Reload page after changing the ID below.</p>
		<chart-barplot-visualizer-wrapper v-bind="$props"/>
	</div>
	`,
});

ChartBarplotVisualizer.args = {
	id: 'OEBD003000002S',
	metricName: 'Metric Name',
	data: [
		{
			agentname: 'Ensemble_1',
			metric_value: 0.562,
		},
		{
			agentname: 'Ensemble_2',
			metric_value: 0.556,
		},
		{
			agentname: 'Ensemble_3',
			metric_value: 0.5539999999999999,
		},
		{
			agentname: 'Ensemble_4',
			metric_value: 0.517,
		},
		{
			agentname: 'Ensemble_5',
			metric_value: 0.506,
		},
		{
			agentname: 'Kernel_1',
			metric_value: 0.583,
		},
		{
			agentname: 'Kernel_2',
			metric_value: 0.5589999999999999,
		},
		{
			agentname: 'Kernel_3',
			metric_value: 0.5529999999999999,
		},
		{
			agentname: 'Kernel_4',
			metric_value: 0.5489999999999999,
		},
		{
			agentname: 'Nonlinear_reg_1',
			metric_value: 0.5770000000000001,
		},
		{
			agentname: 'Nonlinear_reg_10',
			metric_value: 0.5379999999999999,
		},
		{
			agentname: 'Nonlinear_reg_11',
			metric_value: 0.524,
		},
		{
			agentname: 'Nonlinear_reg_2',
			metric_value: 0.569,
		},
		{
			agentname: 'Nonlinear_reg_3',
			metric_value: 0.565,
		},
		{
			agentname: 'Nonlinear_reg_4',
			metric_value: 0.564,
		},
		{
			agentname: 'Nonlinear_reg_5',
			metric_value: 0.5589999999999999,
		},
		{
			agentname: 'Nonlinear_reg_6',
			metric_value: 0.551,
		},
		{
			agentname: 'Nonlinear_reg_7',
			metric_value: 0.5479999999999999,
		},
		{
			agentname: 'Nonlinear_reg_8',
			metric_value: 0.5479999999999999,
		},
		{
			agentname: 'Nonlinear_reg_9',
			metric_value: 0.544,
		},
		{
			agentname: 'Other_1',
			metric_value: 0.57,
		},
		{
			agentname: 'Other_2',
			metric_value: 0.5529999999999999,
		},
		{
			agentname: 'Other_3',
			metric_value: 0.5529999999999999,
		},
		{
			agentname: 'Other_4',
			metric_value: 0.531,
		},
		{
			agentname: 'Other_5',
			metric_value: 0.528,
		},
		{
			agentname: 'Other_6',
			metric_value: 0.521,
		},
		{
			agentname: 'PLS_PC_reg_1',
			metric_value: 0.562,
		},
		{
			agentname: 'PLS_PC_reg_2',
			metric_value: 0.5429999999999999,
		},
		{
			agentname: 'PLS_PC_reg_3',
			metric_value: 0.535,
		},
		{
			agentname: 'PLS_PC_reg_4',
			metric_value: 0.524,
		},
		{
			agentname: 'Sparse_reg_1',
			metric_value: 0.564,
		},
		{
			agentname: 'Sparse_reg_10',
			metric_value: 0.531,
		},
		{
			agentname: 'Sparse_reg_11',
			metric_value: 0.527,
		},
		{
			agentname: 'Sparse_reg_12',
			metric_value: 0.519,
		},
		{
			agentname: 'Sparse_reg_13',
			metric_value: 0.517,
		},
		{
			agentname: 'Sparse_reg_14',
			metric_value: 0.485,
		},
		{
			agentname: 'Sparse_reg_2',
			metric_value: 0.564,
		},
		{
			agentname: 'Sparse_reg_3',
			metric_value: 0.564,
		},
		{
			agentname: 'Sparse_reg_4',
			metric_value: 0.551,
		},
		{
			agentname: 'Sparse_reg_5',
			metric_value: 0.539,
		},
		{
			agentname: 'Sparse_reg_6',
			metric_value: 0.539,
		},
		{
			agentname: 'Sparse_reg_7',
			metric_value: 0.532,
		},
		{
			agentname: 'Sparse_reg_8',
			metric_value: 0.531,
		},
		{
			agentname: 'Sparse_reg_9',
			metric_value: 0.531,
		},
	],
};
