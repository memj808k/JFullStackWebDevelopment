import { datos } from "../json-switch";

test('Objects Validation', () => {
    expect(datos(1)).toEqual({ nombre: "Dans" });
    expect(datos(2)).toEqual({ apellido: "" });
    expect(datos(3)).toEqual({ curso: "js-fullstack" });
});
