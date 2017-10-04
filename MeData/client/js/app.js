$(document).ready(function() {
	var files
	var treeState

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
	loadTree()
	restoreState()

	function getFiles(cb){
		$.jstree.destroy()
		$.get('api/Files',(data) =>{
			files = data
			cb()
		})
	}

	function loadTree (){
		$('#jstree_arbol').jstree({
			'core': {
				'data': {
					'url' : '/api/files',
					'data': function (node) {
						return {'id': node.id, 'state': node.state}
					}
				}
			}
		})

		$('#jstree_arbol').on('ready.jstree', treeReady)
	}

	function treeReady() {
		const $el = $('#jstree_arbol')

		$el.jstree().open_all()
		$el.on('after_open.jstree', function(e, node){
			treeState = $el.jstree().get_state()
		})
	}


	function restoreState(){
		const s = $('#jstree_arbol').jstree().get_state()
		s.core.open = treeState
		$el.jstree().set_state(s)
		$el.jstree().redraw(s)
	}



})
