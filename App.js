import React, { useState, useMemo } from "react";

export default function App() {
  const dataPorCuadrante = {
    Diseño: {
      Funcionalidad: [
        { nombre: "Acceso a avenidas", valor: 3, id: "acceso_avenidas" },
        { nombre: "Caminable", valor: 3, id: "caminable" },
        {
          nombre: "Uso de transporte público",
          valor: 3,
          id: "transporte_publico",
        },
        { nombre: "Seguridad", valor: 3, id: "seguridad" },
        { nombre: "Iluminación", valor: 3, id: "iluminacion" },
        {
          nombre: "Protección climática",
          valor: 2,
          id: "proteccion_climatica",
        },
        { nombre: "Mobiliario Urbano", valor: 3, id: "mobiliario_urbano" },
      ],
      "Integración Urbana": [
        { nombre: "Equipamiento", valor: 2, id: "equipamiento" },
        { nombre: "Estacionamiento", valor: 1, id: "estacionamiento" },
        { nombre: "Comercio Aledaño", valor: 2, id: "comercio_aledano" },
        { nombre: "Impacto en el área", valor: 3, id: "impacto_area" },
      ],
      Innovación: [
        {
          nombre: "Espacios multifuncionales",
          valor: 3,
          id: "espacios_multifuncionales",
        },
        { nombre: "Elementos naturales", valor: 2, id: "elementos_naturales" },
        { nombre: "Tecnología", valor: 1, id: "tecnologia" },
        { nombre: "Elementos lúdicos", valor: 3, id: "elementos_ludicos" },
      ],
      Inclusión: [
        { nombre: "Programas sociales", valor: 2, id: "programas_sociales" },
        { nombre: "Talleres", valor: 1, id: "talleres" },
        {
          nombre: "Diversidad actividades",
          valor: 3,
          id: "diversidad_actividades",
        },
        { nombre: "Adaptación para NE", valor: 3, id: "adaptacion_ne" },
        {
          nombre: "Saberes tradicionales",
          valor: 2,
          id: "saberes_tradicionales",
        },
        {
          nombre: "Capacitación laboral",
          valor: 1,
          id: "capacitacion_laboral",
        },
        { nombre: "Equipamiento para NE", valor: 3, id: "equipamiento_ne" },
        {
          nombre: "Eventos comunitarios",
          valor: 2,
          id: "eventos_comunitarios",
        },
      ],
      Accesibilidad: [
        { nombre: "Vehicular", valor: 1, id: "vehicular" },
        { nombre: "Peatonal", valor: 3, id: "peatonal" },
        { nombre: "Bicicleta", valor: 1, id: "bicicleta" },
        { nombre: "Accesibilidad para NE", valor: 3, id: "accesibilidad_ne" },
      ],
      Confort: [
        { nombre: "Térmico", valor: 3, id: "termico" },
        { nombre: "Acústico", valor: 2, id: "acustico" },
        { nombre: "Lumínico", valor: 3, id: "luminico" },
        { nombre: "Visual (limpieza)", valor: 3, id: "visual_limpieza" },
      ],
      Imagen: [
        {
          nombre: "Elementos distintivos",
          valor: 2,
          id: "elementos_distintivos",
        },
        { nombre: "Áreas verdes", valor: 3, id: "areas_verdes_imagen" },
      ],
    },
    Construcción: {
      "Sostenibilidad Ambiental": [
        {
          nombre: "Áreas verdes (mitigación de isla de calor)",
          valor: 3,
          id: "areas_verdes_calor",
        },
        { nombre: "Especies nativas", valor: 3, id: "especies_nativas" },
        { nombre: "Métodos orgánicos", valor: 2, id: "metodos_organicos" },
        {
          nombre: "Conservación biodiversidad",
          valor: 3,
          id: "conservacion_biodiversidad",
        },
        { nombre: "Topografía natural", valor: 2, id: "topografia_natural" },
      ],
      "Cohesión Social": [
        {
          nombre: "Elementos interacción",
          valor: 3,
          id: "elementos_interaccion",
        },
        { nombre: "Uso grupos diversos", valor: 3, id: "diferentes_grupos" },
      ],
      "Movilidad Sostenible": [
        {
          nombre: "Infraestructura bicicletas",
          valor: 2,
          id: "infraestructura_bicicletas",
        },
        {
          nombre: "Conectividad transporte",
          valor: 3,
          id: "conectividad_transporte",
        },
      ],
      "Materiales Ecológicos": [
        { nombre: "Materiales locales", valor: 2, id: "materiales_locales" },
        {
          nombre: "Materiales reciclados",
          valor: 2,
          id: "materiales_reciclados",
        },
        {
          nombre: "Bajo impacto ambiental",
          valor: 3,
          id: "bajo_impacto_ambiental",
        },
      ],
      "Eficiencia Energética": [
        { nombre: "Iluminación LED", valor: 3, id: "iluminacion_led" },
        { nombre: "Energías renovables", valor: 2, id: "energias_renovables" },
      ],
    },
    Gestión: {
      Mantenimiento: [
        {
          nombre: "Personal mantenimiento",
          valor: 3,
          id: "personal_mantenimiento",
        },
        {
          nombre: "Mobiliario Urbano",
          valor: 2,
          id: "mobiliario_mantenimiento",
        },
        {
          nombre: "Instalaciones",
          valor: 2,
          id: "instalaciones_mantenimiento",
        },
        { nombre: "Equipamiento", valor: 2, id: "equipamiento_mantenimiento" },
        { nombre: "Áreas verdes", valor: 3, id: "areas_verdes_mantenimiento" },
      ],
      Planificación: [
        { nombre: "Plan mantenimiento", valor: 3, id: "plan_mantenimiento" },
        { nombre: "Gestión residuos", valor: 3, id: "gestion_residuos" },
        { nombre: "Gestión del agua", valor: 3, id: "gestion_agua" },
      ],
      "Gestión Operativa": [
        { nombre: "Sistema vigilancia", valor: 3, id: "vigilancia_monitoreo" },
        {
          nombre: "Roles responsabilidades",
          valor: 3,
          id: "roles_responsabilidades",
        },
        {
          nombre: "Estructura organizativa",
          valor: 2,
          id: "estructura_organizativa",
        },
      ],
      "Comunicación y Difusión": [
        {
          nombre: "Sistemas de información",
          valor: 2,
          id: "sistemas_informacion",
        },
        {
          nombre: "Canales comunicación",
          valor: 3,
          id: "canales_comunicacion",
        },
        {
          nombre: "Difusión actividades",
          valor: 2,
          id: "difusion_actividades",
        },
      ],
      "Monitoreo y Evaluación": [
        {
          nombre: "Flexibilidad ante cambios",
          valor: 3,
          id: "flexibilidad_cambios",
        },
        {
          nombre: "Evaluación satisfacción",
          valor: 3,
          id: "evaluacion_satisfaccion",
        },
      ],
    },
    Rehabilitación: {
      Cultura: [
        {
          nombre: "Actividades culturales",
          valor: 3,
          id: "actividades_culturales",
        },
        {
          nombre: "Diversidad disciplinas",
          valor: 2,
          id: "disciplinas_artisticas",
        },
        {
          nombre: "Accesibilidad económica",
          valor: 3,
          id: "accesibilidad_economica",
        },
        { nombre: "Diversidad horarios", valor: 2, id: "diversidad_horarios" },
        {
          nombre: "Iniciativas ciudadanas",
          valor: 3,
          id: "iniciativas_culturales",
        },
        {
          nombre: "Vínculos comunitarios",
          valor: 3,
          id: "vinculos_comunitarios",
        },
      ],
      Identidad: [
        {
          nombre: "Símbolos representativos",
          valor: 2,
          id: "simbolos_representativos",
        },
        { nombre: "Rituales locales", valor: 2, id: "rituales_locales" },
        { nombre: "Toponimia cultural", valor: 1, id: "toponimia_cultural" },
        { nombre: "Narrativa del lugar", valor: 2, id: "narrativa_lugar" },
      ],
      "Participación Ciudadana": [
        {
          nombre: "Programas convivencias",
          valor: 2,
          id: "programas_convivencias",
        },
        {
          nombre: "Actividades comunitarias",
          valor: 3,
          id: "actividades_comunitarias",
        },
        { nombre: "Cuidado comunitario", valor: 3, id: "cuidado_comunitario" },
        { nombre: "Consultas comunidad", valor: 3, id: "consultas_comunidad" },
      ],
      "Responsabilidad Social": [
        {
          nombre: "Programas grupos vulnerables",
          valor: 3,
          id: "programas_vulnerables",
        },
        {
          nombre: "Flexibilidad ante cambios",
          valor: 3,
          id: "flexibilidad_social",
        },
        {
          nombre: "Espacios actividad física",
          valor: 3,
          id: "espacios_actividad_fisica",
        },
        { nombre: "Promoción salud", valor: 3, id: "promocion_salud" },
        { nombre: "Educación ambiental", valor: 2, id: "educacion_ambiental" },
      ],
      "Impacto Económico": [
        { nombre: "Generación empleo", valor: 2, id: "generacion_empleo" },
        { nombre: "Incremento negocios", valor: 2, id: "incremento_negocios" },
        { nombre: "Turismo", valor: 1, id: "turismo" },
        {
          nombre: "Ingresos actividades culturales",
          valor: 2,
          id: "ingresos_culturales",
        },
        {
          nombre: "Ingresos actividades sociales",
          valor: 2,
          id: "ingresos_sociales",
        },
        { nombre: "Renta espacios", valor: 1, id: "renta_espacios" },
      ],
    },
  };

  const coloresCuadrante = {
    Diseño: "#9966ff",
    Construcción: "#95ca49",
    Gestión: "#5c8fe6",
    Rehabilitación: "#5cd6d6",
  };

  const coloresCuadranteIntensos = {
    Diseño: "#a855f7",
    Construcción: "#84cc16",
    Gestión: "#3b82f6",
    Rehabilitación: "#06b6d4",
  };

  const [cuadranteSeleccionado, setCuadranteSeleccionado] = useState("todos");
  const [puntoHover, setPuntoHover] = useState(null);
  const [modoVisualizacion, setModoVisualizacion] = useState("ideal");

  const promediosPorCategoria = {
    // Diseño (7 categorías)
    Funcionalidad: 2.8,
    "Integración Urbana": 2.0,
    Innovación: 2.2,
    Inclusión: 2.1,
    Accesibilidad: 2.0,
    Confort: 2.7,
    Imagen: 2.5,
    // Construcción (5 categorías)
    "Sostenibilidad Ambiental": 2.6,
    "Cohesión Social": 3.0,
    "Movilidad Sostenible": 2.5,
    "Materiales Ecológicos": 2.3,
    "Eficiencia Energética": 2.5,
    // Gestión (5 categorías)
    Mantenimiento: 2.5,
    Planificación: 3.0,
    "Gestión Operativa": 2.6,
    "Comunicación y Difusión": 2.3,
    "Monitoreo y Evaluación": 3.0,
    // Rehabilitación (5 categorías)
    Cultura: 2.6,
    Identidad: 1.7,
    "Participación Ciudadana": 2.7,
    "Responsabilidad Social": 2.8,
    "Impacto Económico": 1.6,
  };

  const [indicadoresActuales, setIndicadoresActuales] = useState(() => {
    const inicial = {};
    Object.values(dataPorCuadrante).forEach((cuadrante) => {
      Object.values(cuadrante).forEach((categoria) => {
        categoria.forEach((item) => {
          inicial[item.id] = false;
        });
      });
    });
    return inicial;
  });

  const toggleIndicador = (indicadorId) => {
    setIndicadoresActuales((prev) => ({
      ...prev,
      [indicadorId]: !prev[indicadorId],
    }));
  };

  const estadisticas = useMemo(() => {
    const totalIndicadores = Object.keys(indicadoresActuales).length;
    const indicadoresPresentes =
      Object.values(indicadoresActuales).filter(Boolean).length;
    const porcentajeExito = totalIndicadores > 0 ? Math.round(
      (indicadoresPresentes / totalIndicadores) * 100
    ) : 0;

    const estadisticasPorCuadrante = {};
    Object.entries(dataPorCuadrante).forEach(([cuadrante, categorias]) => {
      const todosItems = Object.values(categorias).flat();
      const totalCuadrante = todosItems.length;
      const presentesCuadrante = todosItems.filter(
        (item) => indicadoresActuales[item.id]
      ).length;
      const porcentajeCuadrante = totalCuadrante > 0 ? Math.round(
        (presentesCuadrante / totalCuadrante) * 100
      ) : 0;

      estadisticasPorCuadrante[cuadrante] = {
        total: totalCuadrante,
        presentes: presentesCuadrante,
        porcentaje: porcentajeCuadrante,
      };
    });

    return {
      total: totalIndicadores,
      presentes: indicadoresPresentes,
      porcentaje: porcentajeExito,
      porCuadrante: estadisticasPorCuadrante,
    };
  }, [indicadoresActuales, dataPorCuadrante]);

  const indicadoresFaltantes = useMemo(() => {
    const faltantes = {
      Diseño: [],
      Construcción: [],
      Gestión: [],
      Rehabilitación: [],
    };

    Object.entries(dataPorCuadrante).forEach(([cuadrante, categorias]) => {
      Object.entries(categorias).forEach(([categoria, items]) => {
        items.forEach((item) => {
          if (!indicadoresActuales[item.id]) {
            faltantes[cuadrante].push({ categoria, nombre: item.nombre });
          }
        });
      });
    });

    return faltantes;
  }, [indicadoresActuales, dataPorCuadrante]);

  const elementos = useMemo(() => {
    const elementos = [];
    const promediosCategoriaData = [];
    const promediosCategoriaIdealData = [];
    const centroX = 650;
    const centroY = 650;
    const radioMax = 350;
    const radioTexto = 470;

    const angulosCuadrante = {
      Diseño: { inicio: 0, fin: 90 },
      Construcción: { inicio: 90, fin: 180 },
      Gestión: { inicio: 180, fin: 270 },
      Rehabilitación: { inicio: 270, fin: 360 },
    };

    Object.entries(dataPorCuadrante).forEach(([cuadrante, categorias]) => {
      if (
        cuadranteSeleccionado !== "todos" &&
        cuadrante !== cuadranteSeleccionado
      ) {
        return;
      }

      const rangoAngulo = angulosCuadrante[cuadrante];
      const categoriaKeys = Object.keys(categorias);
      const anguloCategoria =
        (rangoAngulo.fin - rangoAngulo.inicio) / categoriaKeys.length;

      Object.entries(categorias).forEach(
        ([categoria, items], categoriaIndex) => {
          const anguloBaseCategoria =
            rangoAngulo.inicio + categoriaIndex * anguloCategoria;
          const anguloIndicador = anguloCategoria / (items.length + 1);

          let promedioCategoriaValor;
          if (modoVisualizacion === "actual") {
            const sumaValores = items.reduce((suma, item) => {
              const valorItem = indicadoresActuales[item.id] ? item.valor : 0;
              return suma + valorItem;
            }, 0);
            promedioCategoriaValor =
              items.length > 0 ? sumaValores / items.length : 0;
          } else {
            promedioCategoriaValor = promediosPorCategoria[categoria] || 0;
          }

          const promedioCategoriaIdealValor = promediosPorCategoria[categoria] || 0;

          const anguloPromedioCategoria =
            anguloBaseCategoria + anguloCategoria / 2;
          const anguloPromedioRad =
            ((anguloPromedioCategoria - 90) * Math.PI) / 180;

          const radioPromedio = (promedioCategoriaValor / 3) * radioMax;
          const xPromedio =
            centroX + Math.cos(anguloPromedioRad) * radioPromedio;
          const yPromedio =
            centroY + Math.sin(anguloPromedioRad) * radioPromedio;

          promediosCategoriaData.push({
            x: xPromedio,
            y: yPromedio,
            categoria,
            cuadrante,
            promedio: promedioCategoriaValor,
            angulo: anguloPromedioCategoria,
            color: coloresCuadrante[cuadrante],
          });

          const radioPromedioIdeal = (promedioCategoriaIdealValor / 3) * radioMax;
          const xPromedioIdeal =
            centroX + Math.cos(anguloPromedioRad) * radioPromedioIdeal;
          const yPromedioIdeal =
            centroY + Math.sin(anguloPromedioRad) * radioPromedioIdeal;

          promediosCategoriaIdealData.push({
            x: xPromedioIdeal,
            y: yPromedioIdeal,
            categoria,
            cuadrante,
            promedio: promedioCategoriaIdealValor,
            angulo: anguloPromedioCategoria,
            color: coloresCuadrante[cuadrante],
          });

          items.forEach((item, itemIndex) => {
            const anguloItem =
              anguloBaseCategoria + (itemIndex + 1) * anguloIndicador;
            const anguloItemRad = ((anguloItem - 90) * Math.PI) / 180;

            let valorItem =
              modoVisualizacion === "actual"
                ? indicadoresActuales[item.id]
                  ? item.valor
                  : 0
                : item.valor;

            const radioItem = (valorItem / 3) * radioMax;
            const xItem = centroX + Math.cos(anguloItemRad) * radioItem;
            const yItem = centroY + Math.sin(anguloItemRad) * radioItem;

            const xTexto = centroX + Math.cos(anguloItemRad) * radioTexto;
            const yTexto = centroY + Math.sin(anguloItemRad) * radioTexto;

            elementos.push({
              x: xItem,
              y: yItem,
              xTexto,
              yTexto,
              nombre: item.nombre,
              valor: valorItem,
              valorOriginal: item.valor,
              cuadrante,
              categoria,
              color: coloresCuadrante[cuadrante],
              angulo: anguloItem,
              id: `${cuadrante}-${categoria}-${item.id}`,
              indicadorId: item.id,
              presente: indicadoresActuales[item.id],
            });
          });
        }
      );
    });

    return { elementos, promediosCategoria: promediosCategoriaData, promediosCategoriaIdeal: promediosCategoriaIdealData };
  }, [
    cuadranteSeleccionado,
    modoVisualizacion,
    indicadoresActuales,
    promediosPorCategoria,
    dataPorCuadrante
  ]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        backgroundColor: "#f8fafc",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          padding: "25px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1e293b",
            margin: "0 0 10px 0",
          }}
        >
          Modelo de Estrategias de Viabilidad para Espacios Públicos
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#64748b",
            margin: "0",
          }}
        >
          Priorización Estratégica - Diagnóstico
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          justifyContent: "center",
          maxWidth: "1400px",
          margin: "0 auto 30px auto",
        }}
      >
        <div
          style={{
            width: "600px",
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            maxHeight: "600px",
            overflowY: "auto",
          }}
        >
          <h3
            style={{ margin: "0 0 20px 0", color: "#1e293b", fontSize: "18px" }}
          >
            Selecciona los indicadores presentes
          </h3>

          {Object.entries(dataPorCuadrante).map(([cuadrante, categorias]) => (
            <div key={cuadrante} style={{ marginBottom: "20px" }}>
              <h4
                style={{
                  color: coloresCuadrante[cuadrante],
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "0 0 10px 0",
                  borderBottom: `2px solid ${coloresCuadrante[cuadrante]}`,
                  paddingBottom: "5px",
                }}
              >
                {cuadrante}
              </h4>

              {Object.entries(categorias).map(([categoria, items]) => (
                <div
                  key={categoria}
                  style={{ marginBottom: "10px", marginLeft: "10px" }}
                >
                  <h5
                    style={{
                      color: "#374151",
                      fontSize: "13px",
                      fontWeight: "600",
                      margin: "0 0 5px 0",
                    }}
                  >
                    {categoria}
                  </h5>

                  {items.map((item) => (
                    <label
                      key={item.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "3px 8px",
                        marginBottom: "2px",
                        marginLeft: "8px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        backgroundColor: indicadoresActuales[item.id]
                          ? "#f0f9ff"
                          : "transparent",
                        border: indicadoresActuales[item.id]
                          ? "1px solid #e0f2fe"
                          : "1px solid transparent",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={indicadoresActuales[item.id]}
                        onChange={() => toggleIndicador(item.id)}
                        style={{
                          marginRight: "6px",
                          accentColor: coloresCuadrante[cuadrante],
                        }}
                      />
                      <span style={{ fontSize: "11px", color: "#374151" }}>
                        {item.nombre}
                        <span style={{ color: "#9ca3af", fontSize: "10px" }}>
                          {" "}
                          ({item.valor})
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            width: "600px",
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{ margin: "0 0 20px 0", color: "#1e293b", fontSize: "18px" }}
          >
            Diagnóstico del Espacio
          </h3>

          <div
            style={{
              textAlign: "center",
              padding: "15px",
              backgroundColor: "#f8fafc",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{ fontSize: "32px", fontWeight: "700", color: "#1e293b" }}
            >
              {estadisticas.porcentaje}%
            </div>
            <div style={{ fontSize: "13px", color: "#64748b" }}>
              Índice de Viabilidad
            </div>
            <div
              style={{ fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}
            >
              {estadisticas.presentes} de {estadisticas.total} indicadores
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4
              style={{
                fontSize: "14px",
                color: "#374151",
                marginBottom: "12px",
              }}
            >
              Por etapa:
            </h4>
            {Object.entries(estadisticas.porCuadrante).map(
              ([cuadrante, stats]) => (
                <div
                  key={cuadrante}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 0",
                    borderBottom: "1px solid #f1f5f9",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      fontWeight: "500",
                    }}
                  >
                    {cuadrante} ({stats.total})
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "8px",
                        backgroundColor: "#e2e8f0",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${stats.porcentaje}%`,
                          height: "100%",
                          backgroundColor: coloresCuadrante[cuadrante],
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#374151",
                        fontWeight: "600",
                        minWidth: "35px",
                      }}
                    >
                      {stats.porcentaje}%
                    </span>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Indicadores faltantes */}
          <div style={{ marginTop: "20px" }}>
            <h4
              style={{
                fontSize: "14px",
                color: "#374151",
                marginBottom: "12px",
              }}
            >
              Indicadores faltantes para la viabilidad del espacio público:
            </h4>

            {Object.entries(indicadoresFaltantes).map(([cuadrante, items]) => {
              if (items.length === 0) return null;

              const categoriasAgrupadas = items.reduce((acc, item) => {
                if (!acc[item.categoria]) acc[item.categoria] = [];
                acc[item.categoria].push(item.nombre);
                return acc;
              }, {});

              return (
                <div key={cuadrante} style={{ marginBottom: "8px" }}>
                  <span
                    style={{
                      color: coloresCuadrante[cuadrante],
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    {cuadrante}:
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#64748b",
                      marginLeft: "6px",
                    }}
                  >
                    {Object.entries(categoriasAgrupadas)
                      .map(([categoria, nombres]) => {
                        let displayNombres = nombres.slice(0,3).join(", ");
                        if (nombres.length > 3) {
                            displayNombres += ` ... +${nombres.length - 3} más`;
                        }
                        return `${categoria} (${displayNombres})`;
                       }
                      )
                      .join("; ")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "20px",
          gap: "8px",
        }}
      >
        <button
          style={{
            backgroundColor:
              cuadranteSeleccionado === "todos" ? "#e2e8f0" : "white",
            color: "#64748b",
            border: "1px solid #cbd5e1",
            borderRadius: "20px",
            padding: "6px 12px",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "12px",
            transition: "background-color 0.3s ease",
            outline: "none",
          }}
          onClick={() => setCuadranteSeleccionado("todos")}
        >
          Todos los etapas
        </button>

        {Object.entries(coloresCuadrante).map(([cuadrante, color]) => {
          return (
            <button
              key={cuadrante}
              style={{
                backgroundColor:
                  cuadranteSeleccionado === cuadrante ? color : "white",
                color:
                  cuadranteSeleccionado === cuadrante ? "white" : "#64748b",
                border: `2px solid ${color}`,
                borderRadius: "12px",
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "12px",
                transition: "all 0.3s ease",
                outline: "none",
                position: "relative",
                minWidth: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setCuadranteSeleccionado(cuadrante)}
            >
              <span>{cuadrante}</span>
            </button>
          );
        })}

        <div style={{ width: "20px" }} />

        <button
          style={{
            backgroundColor:
              modoVisualizacion === "actual" ? "#2563eb" : "white",
            color: modoVisualizacion === "actual" ? "white" : "#64748b",
            border: "1px solid #cbd5e1",
            borderRadius: "20px",
            padding: "6px 12px",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "12px",
            transition: "background-color 0.3s ease",
            outline: "none",
          }}
          onClick={() => setModoVisualizacion("actual")}
        >
          📊 Diagnóstico
        </button>

        <button
          style={{
            backgroundColor:
              modoVisualizacion === "ideal" ? "#16a34a" : "white",
            color: modoVisualizacion === "ideal" ? "white" : "#64748b",
            border: "1px solid #cbd5e1",
            borderRadius: "20px",
            padding: "6px 12px",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "12px",
            transition: "background-color 0.3s ease",
            outline: "none",
          }}
          onClick={() => setModoVisualizacion("ideal")}
        >
          🎯 Ideal
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <svg
            width="1300"
            height="1300"
            style={{ display: "block" }}
            onMouseLeave={() => setPuntoHover(null)}
          >
            <defs>
              <filter
                id="dropShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="3"
                  floodColor="rgba(0,0,0,0.15)"
                />
              </filter>
              <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f8fafc" />
              </radialGradient>
            </defs>

            <circle cx="650" cy="650" r="480" fill="url(#centerGradient)" />

            {[116, 233, 350].map((radio, index) => (
              <g key={index}>
                <circle
                  cx="650"
                  cy="650"
                  r={radio}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  fill="none"
                />
                <text
                  x="660"
                  y={650 - radio + 5}
                  fill="#94a3b8"
                  fontSize="12"
                  fontWeight="500"
                >
                  {index + 1}
                </text>
              </g>
            ))}

            <line
              x1="100"
              y1="650"
              x2="1200"
              y2="650"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="8,4"
            />
            <line
              x1="650"
              y1="100"
              x2="650"
              y2="1200"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="8,4"
            />

            {/* Etiquetas de cuadrantes en las extensiones de los ejes */}
            {[
              {
                nombre: "Rehabilitación",
                x: 200,
                y: 200,
                color: coloresCuadrante.Rehabilitación,
              },
              {
                nombre: "Diseño",
                x: 1100,
                y: 200,
                color: coloresCuadrante.Diseño,
              },
              {
                nombre: "Gestión",
                x: 200,
                y: 1100,
                color: coloresCuadrante.Gestión,
              },
              {
                nombre: "Construcción",
                x: 1100,
                y: 1100,
                color: coloresCuadrante.Construcción,
              },
            ].map(({ nombre, x, y, color }) => (
              <g key={nombre}>
                <rect
                  x={x - 45}
                  y={y - 11}
                  width="90"
                  height="22"
                  rx="11"
                  fill={color}
                  opacity="0.9"
                />
                <text
                  x={x}
                  y={y + 3}
                  textAnchor="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="600"
                >
                  {nombre}
                </text>
              </g>
            ))}

            {/* Líneas radiales más marcadas */}
            {elementos.elementos.map((elemento, index) => (
              <line
                key={`line-${index}`}
                x1="650"
                y1="650"
                x2={
                  650 + Math.cos(((elemento.angulo - 90) * Math.PI) / 180) * 450
                }
                y2={
                  650 + Math.sin(((elemento.angulo - 90) * Math.PI) / 180) * 450
                }
                stroke="#cbd5e1"
                strokeWidth="1"
                opacity="0.6"
              />
            ))}

            {/* Línea espiral de referencia */}
            <path
              d={(() => {
                let path = "";
                const numPuntos = 360;
                const radioEspiral = 350;
                for (let i = 0; i <= numPuntos; i++) {
                  const angulo = (i * 4 * Math.PI) / numPuntos;
                  const radio = (radioEspiral * i) / numPuntos;
                  const x = 650 + Math.cos(angulo) * radio;
                  const y = 650 + Math.sin(angulo) * radio;
                  if (i === 0) {
                    path += `M ${x} ${y}`;
                  } else {
                    path += ` L ${x} ${y}`;
                  }
                }
                return path;
              })()}
              stroke="#94a3b8"
              strokeWidth="1.5"
              fill="none"
              opacity="0.4"
              strokeDasharray="3,3"
            />

            {/* Línea ideal de referencia (solo en modo diagnóstico) */}
            {modoVisualizacion === "actual" && (
              <path
                d={(() => {
                  if (elementos.promediosCategoriaIdeal.length === 0) return "";
                  let path = `M ${elementos.promediosCategoriaIdeal[0].x} ${elementos.promediosCategoriaIdeal[0].y}`;
                  for (
                    let i = 1;
                    i < elementos.promediosCategoriaIdeal.length;
                    i++
                  ) {
                    path += ` L ${elementos.promediosCategoriaIdeal[i].x} ${elementos.promediosCategoriaIdeal[i].y}`;
                  }
                  path += ` Z`;
                  return path;
                })()}
                stroke="#9ca3af"
                strokeWidth="2"
                fill="rgba(156, 163, 175, 0.05)"
                opacity="0.8"
                strokeDasharray="5,5"
              />
            )}

            {/* Líneas conectando promedios de categorías actuales */}
            <path
              d={(() => {
                if (elementos.promediosCategoria.length === 0) return "";
                let path = `M ${elementos.promediosCategoria[0].x} ${elementos.promediosCategoria[0].y}`;
                for (let i = 1; i < elementos.promediosCategoria.length; i++) {
                  path += ` L ${elementos.promediosCategoria[i].x} ${elementos.promediosCategoria[i].y}`;
                }
                path += ` Z`;
                return path;
              })()}
              stroke="#374151"
              strokeWidth="2"
              fill="rgba(156, 163, 175, 0.1)"
              opacity="0.8"
            />

            {/* Puntos de promedio ideales de referencia (solo en modo diagnóstico) */}
            {modoVisualizacion === "actual" &&
              elementos.promediosCategoriaIdeal.map((promedio, index) => (
                <g key={`promedio-ideal-${index}`}>
                  <circle
                    cx={promedio.x}
                    cy={promedio.y}
                    r="8"
                    fill="#9ca3af"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.7"
                  />
                  <text
                    x={promedio.x}
                    y={promedio.y}
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                    fontWeight="600"
                    dominantBaseline="central"
                  >
                    {promedio.promedio.toFixed(1)}
                  </text>
                </g>
              ))}

            {/* Puntos de promedio de categorías actuales */}
            {elementos.promediosCategoria.map((promedio, index) => (
              <g key={`promedio-${index}`}>
                <circle
                  cx={promedio.x}
                  cy={promedio.y}
                  r="12"
                  fill={coloresCuadranteIntensos[promedio.cuadrante]}
                  stroke="white"
                  strokeWidth="3"
                  opacity="1"
                  filter="url(#dropShadow)"
                />
                <text
                  x={promedio.x}
                  y={promedio.y}
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                  fontWeight="700"
                  dominantBaseline="central"
                >
                  {promedio.promedio.toFixed(1)}
                </text>
              </g>
            ))}

            {elementos.elementos.map((elemento, index) => {
              const anguloTexto = elemento.angulo - 90;
              const anguloNormalizado = ((anguloTexto % 360) + 360) % 360;
              const esTextoInvertido =
                anguloNormalizado > 90 && anguloNormalizado < 270;
              const anguloFinal = esTextoInvertido
                ? anguloTexto + 180
                : anguloTexto;

              return (
                <text
                  key={`texto-${index}`}
                  x={elemento.xTexto}
                  y={elemento.yTexto}
                  textAnchor="middle"
                  fill="#374151"
                  fontSize="10"
                  fontWeight="500"
                  dominantBaseline="central"
                  transform={`rotate(${anguloFinal}, ${elemento.xTexto}, ${elemento.yTexto})`}
                >
                  {elemento.nombre}
                </text>
              );
            })}

            {elementos.elementos.map((elemento, index) => {
              const tamaño = 3 + elemento.valorOriginal * 1.5;
              const isHovered = puntoHover === elemento.id;

              return (
                <g key={`punto-${index}`}>
                  <circle
                    cx={elemento.x}
                    cy={elemento.y}
                    r={tamaño}
                    fill={
                      modoVisualizacion === "actual"
                        ? elemento.presente
                          ? elemento.color
                          : "#e2e8f0"
                        : elemento.color
                    }
                    stroke="white"
                    strokeWidth="1.5"
                    opacity={
                      modoVisualizacion === "actual"
                        ? elemento.presente
                          ? "0.9"
                          : "0.3"
                        : "0.9"
                    }
                    filter="url(#dropShadow)"
                    style={{
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={() => setPuntoHover(elemento.id)}
                    transform={isHovered ? `scale(1.3)` : "scale(1)"}
                    transformOrigin={`${elemento.x} ${elemento.y}`}
                  />

                  {isHovered && (
                    <g>
                      <rect
                        x={elemento.x - 90}
                        y={elemento.y - tamaño - 50}
                        width="180"
                        height="45"
                        rx="6"
                        fill="#1e293b"
                        opacity="0.95"
                        filter="url(#dropShadow)"
                      />

                      <text
                        x={elemento.x}
                        y={elemento.y - tamaño - 30}
                        textAnchor="middle"
                        fill="white"
                        fontSize="11"
                        fontWeight="600"
                      >
                        {elemento.nombre}
                      </text>

                      <text
                        x={elemento.x}
                        y={elemento.y - tamaño - 18}
                        textAnchor="middle"
                        fill="#cbd5e1"
                        fontSize="9"
                      >
                        {elemento.cuadrante} • {elemento.categoria}
                      </text>

                      <text
                        x={elemento.x}
                        y={elemento.y - tamaño - 8}
                        textAnchor="middle"
                        fill="#a3e635"
                        fontSize="10"
                        fontWeight="600"
                      >
                        Valor: {elemento.valorOriginal}
                        {modoVisualizacion === "actual" &&
                          ` | ${elemento.presente ? "Presente" : "Ausente"}`}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Interpretación de valores */}
      <div
        style={{
          textAlign: "center",
          padding: "15px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          marginTop: "20px",
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: "14px",
            color: "#374151",
            fontWeight: "500",
          }}
        >
          <strong>Interpretación de valores:</strong> 3 = Esencial | 2 =
          Importante | 1 = Complementario
          {modoVisualizacion === "actual" && (
            <span style={{ color: "#9ca3af", marginLeft: "20px" }}>
              <strong>Línea gris punteada:</strong> Referencia ideal para
              comparación
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
