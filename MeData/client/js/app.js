$(document).ready(function() {
  var files
	$('.dataTables-example').DataTable({
		pageLength: 10,
		//responsive: true,
		//buttons: [],
		processing: true,
		serverSide: true,
		ajax: 'api/datos'
	});


/////////////////////////////////////////////////////////////////////////

// Polling
	setInterval(function(){
		console.log('Fetching data...');
		$('#jstree_arbol').jstree().destroy()
		//$('#jstree_tree').jstree().redraw()
		loadTree()
	}, 10 * 1000)

	//getTree(() => {});

	loadTree()

	function	getTree(cb){
		$.get('api/files', (data) => {
			tree = data
			console.log(tree)
			cb()
		})
	}

	function loadTree(){
		$('#jstree_arbol').jstree({
			'core': {
				'data': {
					'url': '/api/files',
					'data': function (node){
						return {'id': node.id}
					}
				}
			}
		})

		$('#jstree_arbol').on('ready.jstree', treeReady)
	}

	function treeReady(){
		const $el = $('#jstree_arbol')

		$el.jstree().open_all()
		$el.on('after_open.jstree', function(e, node){
			console.log('Node openned')
			// get_state arroja el estado del abierto
			// Le pasamos el estado a get_state
			saveState($el.jstree().get_state())
		})

		restoreState()
	}

	var treeState

	function saveState(state){
		// Guarda el estado en treeState
		treeState = state.core.open;
	}

	function restoreState(state){
		if(!treeState){return;}
		const $el = $('#jstree_arbol')
		const elId = $el.attr("class").split(" ")[1].split("-").pop()
		treeState = treeState.map((id, i) =>{
			return id.replace(/^j\d+_/, `j${elId}_`)
		})

		const s = $el.jstree().get_state()
		s.core.open = treeState
		$el.jstree().set_state(s);
		$el.jstree().redraw();
	}



	console.log("Application ready")
})
