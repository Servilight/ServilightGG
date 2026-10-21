/* ==================================================
   SERVILIGHTGG
   JAVASCRIPT PRINCIPAL
================================================== */


/* ================= PRODUCTOS ================= */

const productos = [

    {
        id: 1,
        nombre: "Placa de reconocimiento en acrílico",
        categoria: "Reconocimientos",
        precio: "Desde RD$ 2,500",
        descripcion: "Placa personalizada para reconocimientos, premiaciones y eventos.",
        imagen: ""
    },

    {
        id: 2,
        nombre: "Medallas personalizadas",
        categoria: "Reconocimientos",
        precio: "Desde RD$ 450",
        descripcion: "Medallas personalizadas para competencias, eventos y premiaciones.",
        imagen: ""
    },

    {
        id: 3,
        nombre: "Toga y birrete",
        categoria: "Graduaciones",
        precio: "Desde RD$ 1,800",
        descripcion: "Conjunto de toga y birrete para ceremonias de graduación.",
        imagen: ""
    },

    {
        id: 4,
        nombre: "Tazas personalizadas",
        categoria: "Regalos",
        precio: "Desde RD$ 350",
        descripcion: "Tazas personalizadas para regalos, empresas y ocasiones especiales.",
        imagen: ""
    },

    {
        id: 5,
        nombre: "Agenda corporativa",
        categoria: "Agendas",
        precio: "Desde RD$ 500",
        descripcion: "Agendas personalizadas para empresas y profesionales.",
        imagen: ""
    },

    {
        id: 6,
        nombre: "Libros y tesis",
        categoria: "Libros y tesis",
        precio: "Desde RD$ 1,200",
        descripcion: "Impresión y encuadernación de libros, tesis y trabajos académicos.",
        imagen: ""
    }

];


/* ================= ELEMENTOS ================= */

const productsGrid =
    document.getElementById("productsGrid");

const categoryButtons =
    document.querySelectorAll(".category");

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.querySelector(".nav");


/* ================= MOSTRAR PRODUCTOS ================= */

function mostrarProductos(lista) {

    productsGrid.innerHTML = "";

    if (lista.length === 0) {

        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>No encontramos productos</h3>
                <p>Prueba con otra categoría.</p>
            </div>
        `;

        return;
    }


    lista.forEach(producto => {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("product-card");


        tarjeta.innerHTML = `

            <div class="product-image">

                ${
                    producto.imagen
                    ? `<img src="${producto.imagen}"
                            alt="${producto.nombre}">`
                    : `<span>Imagen del producto</span>`
                }

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${producto.categoria}
                </div>


                <h3>
                    ${producto.nombre}
                </h3>


                <p class="product-description">
                    ${producto.descripcion}
                </p>


                <div class="product-footer">

                    <span class="product-price">
                        ${producto.precio}
                    </span>


                    <button
                        class="product-btn"
                        onclick="solicitarProducto(${producto.id})">

                        Cotizar

                    </button>

                </div>

            </div>

        `;


        productsGrid.appendChild(tarjeta);

    });

}


/* ================= FILTRAR CATEGORÍAS ================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        /*
         * Quitamos la clase activa
         * de todos los botones.
         */

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        /*
         * Activamos el botón seleccionado.
         */

        button.classList.add("active");


        const categoria =
            button.textContent.trim();


        /*
         * Si seleccionamos "Todos",
         * mostramos todos los productos.
         */

        if (categoria === "Todos") {

            mostrarProductos(productos);

            return;
        }


        /*
         * Filtramos por categoría.
         */

        const productosFiltrados =
            productos.filter(producto =>
                producto.categoria === categoria
            );


        mostrarProductos(productosFiltrados);

    });

});


/* ================= WHATSAPP ================= */

function solicitarProducto(id) {

    const producto =
        productos.find(producto =>
            producto.id === id
        );


    if (!producto) {
        return;
    }


    const mensaje =

        `Hola, ServilightGG. 👋\n\n` +

        `Estoy interesado/a en este producto:\n\n` +

        `📦 ${producto.nombre}\n` +

        `💰 ${producto.precio}\n\n` +

        `Me gustaría recibir más información y cotizarlo.`;


    const mensajeCodificado =
        encodeURIComponent(mensaje);


    const telefono =
        "18095278494";


    const url =
        `https://wa.me/${telefono}?text=${mensajeCodificado}`;


    window.open(url, "_blank");

}


/* ================= MENÚ MÓVIL ================= */

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


/* ================= CERRAR MENÚ ================= */

document.querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });


/* ================= INICIAR ================= */

mostrarProductos(productos);