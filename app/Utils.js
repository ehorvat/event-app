var api = {


  sortScheduleData(proposals) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    //Put proposals in chron order
    proposals.sort(function(a,b) {
      return new Date(a.time_start).getTime() - new Date(b.time_start).getTime()
    });

    //Organize proposal data
    var listViewData = []
    var conferenceDates = []

    for(var proposal of proposals) {
      var proposalStartDate = new Date(proposal.time_start);
      var stringDate = monthNames[proposalStartDate.getMonth()]+ " "+ proposalStartDate.getDate() + ", " + proposalStartDate.getFullYear();
      var stringTime = proposalStartDate.getHours()+":00";
      var dateIndex = conferenceDates.indexOf(stringDate)

      proposal["section"] = stringTime;

      if(dateIndex <= -1) {
        conferenceDates.push(stringDate)
        listViewData.push({"proposals" : {}, "sections" : [stringTime] })
        listViewData[listViewData.length-1].proposals[stringTime] = []
      } else {
        if(listViewData[dateIndex].proposals[stringTime] == undefined || listViewData[dateIndex].proposals[stringTime] == null){
          listViewData[dateIndex].proposals[stringTime] = []
        }
        listViewData[dateIndex].proposals[stringTime].push(proposal)
        if(listViewData[dateIndex].sections.indexOf(stringTime) <= -1) {
          listViewData[dateIndex].sections.push(stringTime)
        }
      }
    }
    console.log(listViewData)
    return {listViewData, conferenceDates}
  }
}

module.exports = api;
