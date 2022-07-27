// JavaScript source code


fetch("Homework.JSON")
    .then(response => response.json())
    .then(data => {
        var myArray = data;

        buildTable(myArray);



        function buildTable(tableData) {
            var table = document.getElementById('table1Body');
            var averageTemp = 0;

            //loop through array, making rows one by one
            for (let i = 0; i < tableData.length; i++) {

                //Make date clear to read
                var reportedDate = tableData[i].date;
                var dateParse = reportedDate.substring(0, 10);
                let dateOutput = new Date(dateParse).toLocaleDateString();

                //Add all temps within loop. Divide by total number outside of loop to get average.
                averageTemp = averageTemp + tableData[i].temperatureF;

                //Count Summaries to determine most common

                //concatonate rows for the table
                var row = ` <tr>
                                       <td>${dateOutput}</td>
                                        <td>${tableData[i].temperatureF}</td> 
                                        <td>${tableData[i].summary}</td> 
                                    </tr>`;
                //append data to table
                table.innerHTML += row;
            }

            //Divide average by total to get true average
            averageTemp = averageTemp / tableData.length;
            averageTemp = Math.round(averageTemp)

            //Add summary data to top table
            table = document.getElementById('summaryTable');
            row = ` <tr>
                                <td>${tableData.length}</td>
                                <td>${averageTemp}</td>
                            </tr>`
            table.innerHTML += row;
        }

    })


