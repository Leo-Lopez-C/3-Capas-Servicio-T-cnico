class RepositorioCelulares {
    constructor() {
        this.atenciones = [];
        this.dispositivosRegistrados = [];
    }

    guardarAtencion(datosAtencion) {
        this.atenciones.push(datosAtencion);
        return "Atención registrada con éxito";
    }

    verificarDispositivoRegistrado(idDispositivo) {
        return this.dispositivosRegistrados.includes(idDispositivo);
    }

    guardarDispositivo(idDispositivo) {
        this.dispositivosRegistrados.push(idDispositivo);
        return "Dispositivo registrado con éxito";
    }

    estimarCostos(estimacionCosto) {
        // Implementa la lógica para estimar costos aquí
        return "Estimación de costos realizada con éxito";
    }

    estimarTiempoReparacion(tiempoEstimado) {
        // Implementa la lógica para estimar tiempo de reparación aquí
        return "Estimación de tiempo de reparación realizada con éxito";
    }

    obtenerAtenciones() {
        return this.atenciones;
    }
}
