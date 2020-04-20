const chartData = [{
    "label": "Jim Oppong",
    "value": "100"
}, {
    "label": "Hilda Laryea",
    "value": "90"
}, {
    "label": "Yaw Peprah",
    "value": "95"
}, {
    "label": "Degraft Mensah",
    "value": "70"
}, {
    "label": "Mansah Rabi",
    "value": "65"
}, {
    "label": "Solomon Adjei",
    "value": "60"
}, {
    "label": "Adjoa Pokua",
    "value": "50"
}, {
    "label": "Afia Mensah",
    "value": "75"
}];

//STEP 3 - Chart Configurations
const chartConfig = {
type: 'column2d',
renderAt: 'chart-container',
width: '100%',
height: '400',
dataFormat: 'json',
dataSource: {
    // Chart Configuration
    "chart": {
        "caption": "Employees and their Productivity in time(hrs)",
        "subCaption": "1 hr = Sixty Minutes",
        "xAxisName": "Employee (SoftTech Ltd)",
        "yAxisName": "Productivity in time(hrs)",
        "numberSuffix": "hrs",
    
        },
    // Chart Data
    "data": chartData
    }
};
FusionCharts.ready(function(){
var fusioncharts = new FusionCharts(chartConfig);
fusioncharts.render();
});