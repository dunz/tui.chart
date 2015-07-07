/**
 * @fileoverview test bar chart model
 * @author jiung.kang@nhnent.com
 */

'use strict';

var BarChartModel = require('../../src/js/models/bar-chart-model.js'),
    chartConst = require('../../src/js/const.js');

describe('test bar chart model', function() {
    var userData = [
            ['Element', 'Density'],
            ['Copper', 8.94],
            ['Silver', 10.49],
            ['Gold', 19.30],
            ['Platinum', 21.45]
        ],
        defaultFirstColor = chartConst.DEFAUlT_COLORS[0];

    describe('test method', function() {
        var barChartModel = new BarChartModel();

        it('setData', function() {
            barChartModel.setData(userData);
            expect(barChartModel.vAxis.axisType).toEqual('value');
            expect(barChartModel.hAxis.axisType).toEqual('label');
            expect(barChartModel.plot.hTickCount).toEqual(4);
            expect(barChartModel.legend.data[0]).toEqual(['Density', defaultFirstColor]);
            expect(barChartModel.series.colors).toEqual([defaultFirstColor]);
        });
    });

    describe('test construct', function() {
        it('init label axis', function() {
            var options = {
                    title: 'chart title',
                    chartArea: '60%',
                    colors: ['black'],
                    hAxis: {
                        title: 'hAxis title'
                    },
                    vAxis: {
                        title: 'vAxis title',
                        minValue: 1,
                        format: '0.0'
                    },
                    bars: 'horizontal'
                },
                barChartModel = new BarChartModel(userData, options);
            expect(barChartModel.vAxis.isLabelAxis()).toBeTruthy();
            expect(barChartModel.hAxis.scale.min).toEqual(1);
            expect(barChartModel.hAxis.labels[1]).toEqual(6.3);
            expect(barChartModel.series.colors).toEqual(['black']);
        });
    });
});