var clubhouseHelper = function(){
  return {
    getHeaders: function(){
      return [
        'ID',
        'Project',
        'Owners',
        'Type',
        'Points',
        'Name',
        'Labels',
        'Epic',
        'Created At',
        'Completed At',
        'Time To Complete (days)'
      ]
    },
    getStories: async function(){
      let stories = $('#story-progress-table tr.story-tr')
      var parsed_stories = []
      if(stories.length == 0){
        alert('nothing found')
        throw 'NOTHING FOUND ERROR'
      }
      for(let index = 0; index < stories.length; index++){
        var story = {}
        let oneStory = $(stories[index])
        story['id'] = clubhouseHelper.getId(oneStory)
        story['project'] = clubhouseHelper.getProject(oneStory)
        story['owners'] = clubhouseHelper.getOwners(oneStory).join(',')
        story['type'] = clubhouseHelper.getType(oneStory)
        story['points'] = clubhouseHelper.getPoints(oneStory)
        story['name'] = clubhouseHelper.getName(oneStory)
        story['labels'] = clubhouseHelper.getLabels(oneStory).join(',')
        story['epic'] = clubhouseHelper.getEpic(oneStory)
        parsed_stories.push(story)
      }
      return parsed_stories
    },

    // Takes an array of hashes, and converts each hash to
    // a string consisting of values separated by commas
    processStories: function(stories){
      var processedStories = stories.map(function(story){
        var story_values = $.map(story, function(v) { return v })
        var row = ''
        for(let i=0; i < story_values.length; i++){
          var val = story_values[i]
          row += '"'+val+'"'
          if( i + 1 < story_values.length)
            row += ','
        }
        return row
      })
      return processedStories
    },

    getId: function(story){
      return story.attr('data-id')
    },

    getProject: function(story){
      return story.find('.project-column').text().trim()
    },

    getOwners: function(story){
      var owners = []
      story.find('.owner-column img').each(function(){
        owners.push($(this).attr('alt'))
      })
      return owners
    },

    getType: function(story){
      return story.find('.type-column span').attr('data-tooltip')
    },

    getPoints: function(story){
      return story.find('.points-column').text().trim()
    },

    getName: function(story){
      return story.find('.name-column a').text().trim().replace(/"/g,"'")
    },

    getLabels: function(story){
      var labels = []
      story.find('.name-column span.tag').each(function(){
        labels.push($(this).text())
      })
      return labels
    },

    getEpic: function(story){
      return story.find('.epic-column a').text().trim()
    }

  }

}() //end clubhouseHelper

