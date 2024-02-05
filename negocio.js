class GestorAtencionCelulares {
    constructor() {
        this.repositorio = new RepositorioCelulares();
    }

    registrarDispositivo(idDispositivo) {
        return this.repositorio.guardarDispositivo(idDispositivo);
    }

    registrarAtencion(datosAtencion) {
        // Validaciones y lógica de negocio
        const dispositivoRegistrado = this.repositorio.verificarDispositivoRegistrado(datosAtencion.idDispositivo);

        if (dispositivoRegistrado) {
            const estimacionCosto = this.repositorio.estimarCostos(datosAtencion.estimacionCosto);
            const tiempoEstimado = this.repositorio.estimarTiempoReparacion(datosAtencion.tiempoEstimado);

            const resultado = this.repositorio.guardarAtencion(datosAtencion);

            alert(`${resultado}\n${estimacionCosto}\n${tiempoEstimado}`);
            
            // Actualizar la visualización de atenciones después de registrar
            this.visualizarAtenciones();
        } else {
            alert("Error: El dispositivo no está registrado en el sistema. Regístralo antes de la atención.");
        }
    }

    visualizarAtenciones() {
        const atenciones = this.repositorio.obtenerAtenciones();
        const resultadoDiv = document.getElementById("resultadoContainer");
        resultadoDiv.innerHTML = "<h2>Atenciones Registradas:</h2>";

        if (atenciones.length === 0) {
            resultadoDiv.innerHTML += "<p>No hay atenciones registradas.</p>";
        } else {
            atenciones.forEach(atencion => {
                resultadoDiv.innerHTML += `<p>${atencion.idDispositivo}: ${atencion.descripcion}, Costo estimado: $${atencion.estimacionCosto}, Tiempo estimado: ${atencion.tiempoEstimado} días</p>`;
            });
        }
    }
}
