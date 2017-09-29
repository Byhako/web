$(document).ready(($) => {

	var productos = []
	var contador = 0
	var templates = {productoItem: Handlebars.compile($("#producto-item-tpl").html())}
	var menu_t = {productoItem: Handlebars.compile($("#menu-tpl").html())}

	obtenerlista(() =>{
		var lim = productos.length
		console.log(lim)
		for(var i=0 ; i<lim ; i++){
			console.log(productos.length);
			var producto = productos[i]
			cargarProducto(producto)
			console.log(producto);
		}

	})
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
	function obtenerlista(cb){
		$.get('/api/lista',(data) =>{
			productos = data
			cb()
		})
	}

	function cargarProducto(producto) {
		var html = templates.productoItem(producto)
		var menu = menu_t.productoItem(producto)
		productos.push(producto)
		$(".tabla-productos").append(html);
		$(".menu").append(menu);
		contador++
	}

	function agregarProducto() {
		var producto = {
			nombre: $("input.nombre-producto").val(),
			id: parseInt(Math.random()*1e5),
			cantidad: 0}

		var html = templates.productoItem(producto)
		var menu = menu_t.productoItem(producto)

		productos.push(producto)
		$.post('/api/products', producto)

		$(".tabla-productos").append(html);
		$(".menu").append(menu);
		contador++
	}

	function actualizar(){
		var nombre = $('.menu').val()
		var lab = 'td.' + nombre
		var num = $('.numero').val()
		var html = '<td class=' + '"' + nombre+ '"' + '>' + num + '</td>'
		var name = {nombre:nombre, numero:num, contador:contador}
		$( lab ).replaceWith( html )
		$.post('/api/actualizar', name)
	}

	function borrar(){
		$( "body.bodyt" ).replaceWith( '<tbody class="inner bodyt"> </tbody>' )
		$( "tr.inner" ).replaceWith( $( ".first" ) )
		$( "option.inner" ).replaceWith( $( ".first" ) )
		$.get('/api/borrar')
		productos = []
		contador = 0
	}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
	$(".agregar-producto").click((e) => { agregarProducto() })

	$(".borrar").click((e) => { borrar() })

	$(".actualizar").click((e) => { actualizar() })

})

// xhr require javascript
