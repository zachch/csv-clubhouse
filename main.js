(async function(){
  "use strict"
  var stories = await clubhouseHelper.getStories()
  stories = clubhouseHelper.processStories(stories)
  var csvContent = utils.getCSVContent(stories,clubhouseHelper.getHeaders())
  utils.downloadCSVFile(csvContent, 'clubhouse.csv')

})()
