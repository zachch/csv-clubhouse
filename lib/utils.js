var utils = {

  getCSVContent: function getCSVContent(contentArray, headerArray){
    var csvContent = "data:text/csv;charset=utf-8,"
    contentArray.unshift(headerArray)
    contentArray.forEach(function(row, index){
      csvContent += row
      csvContent += "\n"
    });
    return csvContent
  },

  downloadCSVFile: function downloadCSVFile(csvContent, name){
    var encodedUri = encodeURI(csvContent)
    var link = document.createElement("a")
    var d = new Date()
    var timestamp = d.getTime()
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", name + '_'+timestamp+'.csv')
    document.body.appendChild(link) // Required for FF
    link.click()
  }
}
