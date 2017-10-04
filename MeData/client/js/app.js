$(document).ready(function() {
  var files

  $('#jstree').jstree({
    'core': {
      'check_callback': true
    },
    'plugins': ['types', 'dnd'],
    'types': {
      'default': {
        'icon': 'fa fa-folder'
      },
      'html': {
        'icon': 'fa fa-file-code-o'
      },
      'svg': {
        'icon': 'fa fa-file-picture-o'
      },
      'css': {
        'icon': 'fa fa-file-code-o'
      },
      'img': {
        'icon': 'fa fa-file-image-o'
      },
      'js': {
        'icon': 'fa fa-file-text-o'
      }

    }
  })

	getFiles(()=>{})

	function getFiles(cb){
		$.get('api/Files',(data) =>{
			files = data
			cb()
		})
	}

	$('#jstree_arbol').jstree({
		'core': {
			'data': {
				'url' : '/api/files',
				'data': function (node) {
					return {'id': node.id}
				}
			}
		}
	})
	console.log("Application ready")
})
