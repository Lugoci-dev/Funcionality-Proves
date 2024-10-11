
export interface Task {
  id: number;                // Identificador único de la tarea
  titulo: string;           // Título de la tarea
  descripcion?: string;     // Descripción de la tarea (opcional)
  estado: 'unsettled' | 'completed' | 'progress'; // Estado de la tarea
  prioridad: 'alta' | 'media' | 'baja'; // Prioridad de la tarea
  asignadaA?: string;       // Nombre de la persona a la que se le asigna la tarea (opcional)
  etiquetas?: string[];      // Etiquetas asociadas a la tarea (opcional)
}
