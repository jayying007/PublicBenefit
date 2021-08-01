function chart2018() {
    var myChart = echarts.init(document.getElementById('chart2018'));
    var options={
        //定义一个标题
        title:{
            text:'2018年榜'
        },
        legend:{
            data:['捐赠额:(万元)']
        },
        //X轴设置
        xAxis:{
            data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis:{
        },
        //name=legend.data的时候才能显示图例
        series:[{
            name:'捐赠额:(万元)',
            type:'bar',
            data:['22','32','45','68','60','52','52','55','68','60','65','60']
        }]

    };
    myChart.setOption(options);
}
function chart2019() {
    var myChart = echarts.init(document.getElementById('chart2019'));
    var options={
        //定义一个标题
        title:{
            text:'2019年榜'
        },
        legend:{
            data:['捐赠额:(万元)']
        },
        //X轴设置
        xAxis:{
            data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis:{
        },
        //name=legend.data的时候才能显示图例
        series:[{
            name:'捐赠额:(万元)',
            type:'bar',
            data:['27','32','53','48','16','25','25','0','0','0','0','0']
        }]
    };
    myChart.setOption(options);
}