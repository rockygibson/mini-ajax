$(document).ready(function() {
	$('#getUsers').on('click', function() {
		$.ajax({
			method: 'GET',
			url: 'http://reqr.es/api/users?page=1',
			success: function(data) {
				console.log(data.data);
				insertData(data.data);
			}
		});
	});
	var insertData = function(arr){
		for (var i = 0; i < arr.length; i++) {
			$('#userInfo' + (i + 1)).html('<div>' +
        	'User Info:' +
        	'<li>' +
        	'First name: ' + arr[i].first_name +
        	'</li>' +
        	'<li>' +
        	'Last name: ' + arr[i].last_name +
        	'</li>' +
        	'<hr>' +
        	'</div>'
     	 	)
		};
	}

  $('#addUser').on('click', function(e) {
  	e.preventDefault();
    var userName = $('#name').val();
    var userJob = $('#job').val();
    return $.ajax({
      method: 'POST',
      url: 'http://reqr.es/api/users',
      data: {name: userName, job: userJob},
      success: function(res) {
       $('#recentUser').html(
          '<li>' +
            'name: ' + res.name +
          '</li>' +
          '<li>' +
            'job: ' + res.job +
          '</li>' +
          '<li>' +
            'id: ' + res.id +
          '</li>' +
          '<li>' +
            'created at: ' + res.createdAt +
          '</li>'
        )
      }
    });
  });

});