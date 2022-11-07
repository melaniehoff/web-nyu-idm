// const sheetLink = "https://sheets.googleapis.com/v4/spreadsheets/1JEf9EK3sTzKFIg3rd_h3SovOAR2QnWQ6jqoHoKtyA08/values/Sheet1/?key=AIzaSyBxqD3rSVOQIFMoZ3NsmkIZD4ytMXajU5c"
//
// const data = await  fetch(sheetLink)
// .then((response)=> {return response.json()});


console.log("yoo")

function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/2PACX-1vReFW3tvrzxomIgL-Wh_iYw0zJST4MqRRtGVdYeYxw1nFOreaFG6HPlSvWRKuCnJ-r1obZmd6sQcpQA/pubhtml',
                    callback: function(data, tabletop) {
                      console.log(data)
                    },
                    simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)
