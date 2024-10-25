import { Periodo } from "./periodo";
import { Material } from "./material";
export interface PrecioInternacional {
    periodos: Periodo[];
    materiales: Material[];
}
