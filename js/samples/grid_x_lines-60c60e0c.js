var chart = c3.generate({
    data: {
        columns: [
            ['sample', 30, 200, 100, 400, 150, 250]
        ]
    },
    grid: {
        x: {
            lines: [
                {value: 1, text: 'Lable 1'},
                {value: 3, text: 'Lable 3', position: 'middle'},
                {value: 4.5, text: 'Lable 4.5', position: 'start'}
            ]
        }
    }
});
