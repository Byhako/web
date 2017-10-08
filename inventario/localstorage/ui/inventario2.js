$(document).ready(($) => {

	var productos = cargarProducto()
	var templates = {
		productoItem: Handlebars.compile($("#producto-item-tpl").html())
	};
	var menu_t = {
		productoItem: Handlebars.compile($("#menu-tpl").html())
	};
	////////////////////////////////////////////////////////////////////////////
	function agregarProducto_3(producto) {
		var html = templates.productoItem(producto)
		var menu = menu_t.productoItem(producto)

		$(".tabla-productos").append(html);
		$(".menu").append(menu);
	}

	function cargarProducto() {
		return JSON.parse(localStorage.getItem('productos')) || []
	}

	function renderProducto() {
		productos.forEach(agregarProducto_3)
	}
////////////////////////////////////////////////////////////////////////////
	$(".agregar-producto").click((e) => {
		var producto = {
			nombre: $("input.nombre-producto").val(),
			id: productos.length + 1,
			cantidad: 0
		}

		productos.push(producto);
		agregarProducto_3(producto);

		localStorage.setItem('productos', JSON.stringify(productos))
	})

	renderProducto()

	$(".borrar").click((e) => {
		$( "body.bodyt" ).replaceWith( '<tbody class="inner bodyt"> </tbody>' )
		$( "tr.inner" ).replaceWith( $( ".first" ) )
		$( "option.inner" ).replaceWith( $( ".first" ) )
		productos = []

		localStorage.clear()
	})

	$(".actualizar").click((e) => {
		var nombre = $('.menu').val()
		var lab = 'td.' + nombre
		var num = $('.numero').val()
		var html = '<td class=' + '"' + nombre+ '"' + '>' + num + '</td>'
		console.log(html);
		$( lab ).replaceWith( html )
	})

	$(document).on('mouseenter','.trr',function(){
		var nombre = $(this).attr("id");
		var lab = 'option#f' + nombre
		$(lab).addClass('lista');
		$(this).addClass('lista');
		$(this).append('<td class="img"><img src="equis.jpg" class="img"/></td>');
	});

	$(document).on('mouseleave','.trr',function(){
		var nombre = $(this).attr("id");
		var lab = 'option#f' + nombre
		$(lab).removeClass('lista');
		$(this).removeClass('lista');
		$('.img').remove();
	});

	$(document).on('click','.img',function(){
			$('.lista').remove();
	});

})
