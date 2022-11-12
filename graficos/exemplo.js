var data = [
    { y: '2014', a: 50, b: 90 },
    { y: '2015', a: 65, b: 75 },
    { y: '2016', a: 50, b: 50 },
    { y: '2017', a: 75, b: 60 },
    { y: '2018', a: 80, b: 65 },

],
    config = {
        data: data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total Income', 'Total Outcome'],
        fillOpacity: 0.7,
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
        pointFillColors: ['#ffffff'],
        pointStrokeColors: ['black'],
        lineColors: ['green', 'red']
    };
config.element = 'graficoDeLinha';
Morris.Line(config);

var data = [
    { y: '2014', a: 50, b: 90 },
    { y: '2015', a: 65, b: 75 },
    { y: '2016', a: 50, b: 50 },
    { y: '2017', a: 75, b: 60 },
    { y: '2018', a: 80, b: 65 },

],
    config = {
        data: data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total Income', 'Total Outcome'],
        fillOpacity: 0.7,
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
        pointFillColors: ['#ffffff'],
        pointStrokeColors: ['black'],
        lineColors: ['blue', 'red']
    };
config.element = 'graficoDeArea';
Morris.Area(config);




new Morris.Area({
    // ID of the element in which to draw the chart.
    element: 'graficoDeArea2',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2008', value: 20 },
        { year: '2009', value: 10 },
        { year: '2010', value: 5 },
        { year: '2011', value: 5 },
        { year: '2012', value: 20 },
        { year: '2013', value: 4 },
        { year: '2014', value: 20 },
    ],
    // 
    //O nome do atributo de registro de dados que contém valores x.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Rótulos para as ykeys -- serão exibidos quando você passar o mouse sobre o
    // gráfico.
    labels: ['Value']
});


new Morris.Donut({

    pointFillColors: ['#ffffff'],
    pointStrokeColors: ['black'],
    lineColors: ['gray', 'red'],

    // ID of the element in which to draw the chart.
    element: 'graficoDeDonut',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.

    data: [
        { label: "Download Sales", value: 12 },
        { label: "In-Store Sales", value: 30 },
        { label: "Mail-Order Sales", value: 20 },



    ],


    // 
    //O nome do atributo de registro de dados que contém valores x.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Rótulos para as ykeys -- serão exibidos quando você passar o mouse sobre o
    // gráfico.
    labels: ['Value']
});


new Morris.Bar({
    // ID of the element in which to draw the chart.
    element: 'graficoDeBarra',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2008', value: 20 },
        { year: '2009', value: 10 },
        { year: '2010', value: 5 },
        { year: '2011', value: 5 },
        { year: '2012', value: 20 },
        { year: '2013', value: 4 },
        { year: '2014', value: 20 },
    ],

    // 
    //O nome do atributo de registro de dados que contém valores x.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Rótulos para as ykeys -- serão exibidos quando você passar o mouse sobre o
    // gráfico.
    labels: ['Value']
});
