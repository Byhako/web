$(document).ready(($) => {

	var productos = []
	var templates = {productoItem: Handlebars.compile($("#producto-item-tpl").html())}
	var menu_t = {productoItem: Handlebars.compile($("#menu-tpl").html())}

	obtenerlista()

////////////////////////////////////////////////////////////////////////////

	$(".agregar-producto").click((e) => { agregarProducto() })

	$(".borrar").click((e) => { borrar() })

	$(".actualizar").click((e) => { actualizar() })

////////////////////////////////////////////////////////////////////////////

	function obtenerlista(){          //carga lista con datos de base
		$.get('/api/products',(data) =>{
			productos = data
			var lim = productos.length
			for(var i=0 ; i<lim ; i++){
				var producto = productos[i]
				cargarProducto(producto)
			}
		})
	}

	function cargarProducto(producto) {
		var html = templates.productoItem(producto)
		var menu = menu_t.productoItem(producto)
		productos.push(producto)
		$(".tabla-productos").append(html) //carga producto en lista
		$(".menu").append(menu)            //carga producto en menu
	}

	function agregarProducto() {
		var producto = {
			nombre: $("input.nombre-producto").val(),
			cantidad: 0}
		$.post('/api/products', producto)  //envio data
		$("body.bodyt").replaceWith('<tbody class="inner bodyt"> </tbody>')
		$("tr.inner").replaceWith( $(".first") )
		$("option.inner").replaceWith( $(".first") )
		obtenerlista()
	}

	function actualizar(){
		var nombre = $('.menu').val()
		var lab = 'td.' + nombre
		var num = $('.numero').val()
		var html = '<td class=' + '"' + nombre+ '"' + '>' + num + '</td>'
		var name = {nombre:nombre, numero:num}
		$( lab ).replaceWith( html )
		$.ajax({url: '/api/products', type: 'PUT', data: name})

	}

	function borrar(){
		$("body.bodyt").replaceWith('<tbody class="inner bodyt"> </tbody>')
		$("tr.inner").replaceWith( $(".first") )
		$("option.inner").replaceWith( $(".first") )
		$.ajax({url: '/api/products', type: 'DELETE'})
		productos = []
	}
})
